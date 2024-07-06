import { GdprGuard, GdprManager, GdprManagerFactory, GdprSavior, GdprManagerEventHub } from "gdpr-guard";
import { GlobalEventBus } from "../utils/eventBus";
import { GuardParseResult } from "../domainLogic/guardsParsing";

/**
 * Add listeners to the change event of the manager's and guards' checkboxes
 * @param manager - The manager to handle state changes for
 * @param managerCheckbox - The global manager toggle checkbox
 * @param parsedGuards - The guards that have been parsed from the DOM
 * @param hadManager - Whether the manager came from the savior instead of the factory
 * @param updateCheckboxState - Callback used to trigger an update of the checkbox's state
 */
export const setupCheckboxListeners = (manager: GdprManager, managerCheckbox: HTMLInputElement, parsedGuards: GuardParseResult[], hadManager: boolean, updateCheckboxState: () => void) => {
	const handleInitialSync = (checkbox: HTMLInputElement, guard: GdprGuard) => {
		if (hadManager) {
			if ((checkbox.checked && !guard.enabled) || (!checkbox.checked && guard.enabled)) {
				checkbox.click();
			}
		}
	};

	handleInitialSync(managerCheckbox, manager);

	managerCheckbox.addEventListener("click", () => {
		manager.toggle();
		updateCheckboxState();
	});

	parsedGuards.forEach(({ name, checkbox }) => {
		const guard = manager.getGuard(name)!;

		handleInitialSync(checkbox, guard);

		checkbox.addEventListener("click", () => {
			guard.toggle();
			updateCheckboxState();
		});
	});
};

/**
 * Setup item activation in the `<head>` tag (i.e. to execute code when the corresponding guard is enabled)
 * @param manager - The manager to attach the activation logic to
 * @param itemSelector - The selector to query all the related items (must include `[data-gdpr-on-enable]`)
 * @param setupItemHook - The function to call to set up the item before putting it in the DOM
 */
export const setupInHeadActivation = <ItemType extends HTMLElement = HTMLElement>(
	manager: GdprManager,
	itemSelector: string,
	setupItemHook: (item: ItemType) => void
) => {
	document.querySelectorAll<ItemType>(itemSelector)
		.forEach(item => {
			const guardName = item.dataset.gdprOnEnable!;

			if (manager.hasGuard(guardName)) {
				manager.events.onEnable(guardName, () => {
					if (!item) {
						return; // Already handled, avoid call duplications like this for now
					}

					/*
						Script tags have an internal attribute checking whether
						they have already been loaded. Cloning a script will
						always clone that flag as well (which is unwanted).
					 */

					const isScript = item.matches("script");

					const oldItem = item;
					item = undefined as any; // cleanup


					const clonedItem = (
						isScript
							? document.createElement("script")
							: oldItem.cloneNode(true)
					) as ItemType;

					Object.assign(clonedItem, {
						...oldItem,
						type: isScript ? "text/javascript" : ((oldItem as any).type ?? undefined),
					});

					if (isScript) {
						// Copy attributes over
						oldItem.getAttributeNames().forEach(attrName => {
							const attrValue = oldItem.getAttribute(attrName)!;
							clonedItem.setAttribute(attrName, attrValue);
						});

						clonedItem.textContent = oldItem.textContent;
					}

					setupItemHook(clonedItem);
					clonedItem.removeAttribute("data-gdpr-on-enable");
					oldItem.remove();
					document.head.appendChild(clonedItem);
				});
			} else if(item) {
				item.remove();
			}
		});
};


/**
 * Setup scripts activation logic to load them when the corresponding guard is enabled (type must initially be text and the src attribute mst be present)
 * @param manager - The manager to attach the activation logic to
 */
export const setupScriptActivation = (manager: GdprManager) => {
	setupInHeadActivation<HTMLScriptElement>(
		manager,
		"script[type='text'][data-gdpr-on-enable]",
		actualScript => {
			actualScript.setAttribute("type", "text/javascript");
		}
	);
};

/**
 * Setup stylesheets activation logic to load them when the corresponding guard is enabled (rel attribute must be different from stylesheet and the href attribute must be present)
 * @param manager - The manager to attach the activation logic to
 */
export const setupStyleSheetsActivation = (manager: GdprManager) => {
	setupInHeadActivation<HTMLLinkElement>(
		manager,
		"link[href][data-gdpr-on-enable]",
		actualStyleSheet => {
			actualStyleSheet.setAttribute("rel", "stylesheet");
		}
	);
};

export type BindEventsCallback = (eventsHub: GdprManagerEventHub, manager: GdprManager) => void;

export type StoreErrorHandler = (didStore: boolean, error?: Error) => void;

export interface SetupButtonListenersHooks {
	onDeclineAllErrorHook: StoreErrorHandler;
	onAllowAllErrorHook: StoreErrorHandler;
	onCancelErrorHook: StoreErrorHandler;
	onSaveErrorHook: StoreErrorHandler;
	onBannerClose: () => void;
	onBannerOpen: () => void;
}

/**
 * Bind event listeners to the general buttons
 * @param manager
 * @param gdprSavior
 * @param hooks
 * @param restoreFactory
 * @param updateCheckboxState
 */
export const setupButtonsListeners = (
	manager: GdprManager,
	gdprSavior: GdprSavior,
	hooks: SetupButtonListenersHooks,
	restoreFactory: GdprManagerFactory,
	updateCheckboxState: () => void
) => {
	GlobalEventBus.on("click", "[data-gdpr-open]", e => {
		e.preventDefault();

		manager.resetAndShowBanner();
		updateCheckboxState();
		hooks.onBannerOpen();
	});

	GlobalEventBus.on("click", "[data-gdpr-decline-all]", e => {
		e.preventDefault();

		manager.disable();
		updateCheckboxState();
		manager.closeBanner();

		gdprSavior.store(manager.raw())
			.then(didStore => {
				if (!didStore) {
					manager.resetAndShowBanner();
					updateCheckboxState();
					hooks.onDeclineAllErrorHook(didStore);
				} else {
					try {
						hooks.onBannerClose();
					} catch(e) {
						hooks.onDeclineAllErrorHook(didStore, e as Error);
					}
				}
			}).catch(e => {
				manager.resetAndShowBanner();
			updateCheckboxState();
				hooks.onDeclineAllErrorHook(false, e)
			});
	});

	GlobalEventBus.on("click", "[data-gdpr-allow-all]", e => {
		e.preventDefault();

		manager.enable();
		updateCheckboxState();
		manager.closeBanner();

		gdprSavior.store(manager.raw())
			.then(didStore => {
				if (!didStore) {
					manager.resetAndShowBanner();
					updateCheckboxState();
					hooks.onAllowAllErrorHook(didStore);
				} else {
					try {
						hooks.onBannerClose();
					} catch(e) {
						hooks.onAllowAllErrorHook(didStore, e as Error);
					}
				}
			}).catch(e => {
				manager.resetAndShowBanner();
				updateCheckboxState();
				hooks.onAllowAllErrorHook(false, e)
			});
	});

	GlobalEventBus.on("click", "[data-gdpr-cancel]", e => {
		e.preventDefault();

		(async () => {
			try {
				const hadManager = await gdprSavior.exists(false);

				if (hadManager) {
					await gdprSavior.restore(true);
				} else {
					await gdprSavior.restoreOrCreate(restoreFactory);
					//TODO: Use save/restore new API (when it's out, for now the savior API has to suffice)
				}
			} catch(e) {
				hooks.onCancelErrorHook(true, e as Error);
			}
		})();
	});

	GlobalEventBus.on("click", "[data-gdpr-save]", e => {
		e.preventDefault();

		manager.closeBanner();
		gdprSavior.store(manager.raw())
			.then(didStore => {
				if (!didStore) {
					manager.resetAndShowBanner();
					updateCheckboxState();
					hooks.onSaveErrorHook(didStore);
				} else {
					try {
						hooks.onBannerClose();
					} catch(e) {
						hooks.onSaveErrorHook(didStore, e as Error);
					}
				}
			}).catch(e => {
				manager.resetAndShowBanner();
				updateCheckboxState();
				hooks.onSaveErrorHook(e);
			});
	});
};
