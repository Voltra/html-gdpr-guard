# html-gdpr-guard

> Vanilla JavaScript binding to gdpr-guard as efficiently and easily as possible, based on data provided in the DOM

<center><img src="https://github.com/Voltra/html-gdpr-guard/raw/master/html-gdpr-guard.png" alt="html-gdpr-guard logo"/></center>

You can have a look at the [demo](https://voltra.github.io/html-gdpr-guard) to see it in action and inspect the DOM.

## Install

Via NPM: `npm i -S html-gdpr-guard`

Via Yarn: `yarn add html-gdpr-guard`

As a 3rd-party script tag:
```html
<script src="/path/to/dist/index.js"></script>
```

## Use

Using modules:
```javascript
import {
	restoreHtmlGdprManager,
	//
	HtmlGdprGuardError,
	NoManagerDefinitionError,
	NoNameError,
	NoCheckboxError,
} from "html-gdpr-guard"
```

Using commonjs:
```javascript
const {
	restoreHtmlGdprManager,
	//
	HtmlGdprGuardError,
	NoManagerDefinitionError,
	NoNameError,
	NoCheckboxError,
} = require("html-gdpr-guard");
```

In the browser:
```javascript
const {
	restoreHtmlGdprManager,
	//
	HtmlGdprGuardError,
	NoManagerDefinitionError,
	NoNameError,
	NoCheckboxError,
} = htmlGdprGuard;
```

## Restore your manager instance

To restore your manager instance, you will need an instance of [`GdprSavior`](https://www.ludwig-guerin.fr/gdpr-guard/interfaces/serde_GdprSavior.GdprSavior.html).
The simplest one is [gdpr-guard-local](https://www.npmjs.com/package/gdpr-guard-local) which relies on local storage.

The simplest way to restore your manager is to let the library do everything:
```javascript
const gdprSavior = getMyGdprSavior();
const manager = await restoreHtmlGdprManager(gdprSavior);
```

If it fails, it will throw an instance of `HtmlGdprGuardError` which can be one of the following:
* `NoManagerDefinitionError`
* `NoNameError`
* `NoCheckboxError`

## Create your DOM structure

### A guard's data

#### Guard name (mandatory)

A guard's data is scoped within the root element that is marked using the `data-gdpr-guard` attribute.
That attribute can contain the name of your guard, otherwise the first element that has a `data-gdpr-guard-name`
will be used to retrieve the guard's name. **It is mandatory**

#### Guard description (optional)

The guard's description can be added via a `data-gdpr-guard-description` with a value on the root element, or
you can tag an element with `data-gdpr-guard-description` whose `textContent` will be treated as its description.
**It is optional**

It will default to an empty string. Note that if the description is the attribute's value it won't be shown to the user.

#### Guard storage (optional)

The guard's storage can be added via a `data-gdpr-guard-storage` attribute whose value should be the key in the [`GdprStorage`](https://www.ludwig-guerin.fr/gdpr-guard/enums/GdprStorage.GdprStorage-1.html) enum. **It is optional**

#### Guard checkbox (mandatory)

The checkbox that controls the guard is resolved (among the guard's children) in the following order based on the guard's name:
* checkbox whose ID is the guard's name
* checkbox whose `name` attribute is the guard's name
* first checkbox marked with the `data-gdpr-checkbox` attribute

#### Guard's required status (optional)

To mark the guard as required you can:
* Add the `gdpr-guard-required` attribute on the guard's root element
* Add the `required` attribute on the guard's checkbox

Note that, just like the way `gdpr-guard` handles required guards, if a parent is required
then all of its children will be as well.

You don't *have* to make your checkbox required and disabled, it will be all synced up as the guard is parsed.

## A group's data

A group behaves exactly like a guard, except that its root is marked using `data-gdpr-group` instead of `data-gdpr-guard`.

### The manager's data

The manager behaves a little bit like a guard, but has specific attributes:

* `data-gdpr` is used to find the root of your manager, unless you provide it in `restoreHtmlGdprManager`'s options. Its value is treated as the manager's name. You don't have to give it a value. You can skip it altogether.
* `data-gdpr-manager` that can be used to store the name of the manager if you didn't provide a value to the `data-gdpr` attribute (or the attribute itself)

## Customize the restoration process

You can pass a set of options as the second argument of `restoreHtmlGdprManager`. Let's inspect them one by one.

### `gdprEl` HTMLElement

The html element that will serve as root of the manager's definitions. By default, it will use `document.querySelector("[data-gdpr]")`.

If the manager can't be found, it'll throw a `NoManagerDefinitionError`.

### `autoCloseBanner` bool

Whether the banner should be automatically closed once the manager has been restored if the consent banner has already been shown.

### `bindEventHandlersHook` function

A callback that can be used to attach event listeners to the manager's [`GdprManagerEventHub`](https://www.ludwig-guerin.fr/gdpr-guard/classes/GdprManagerEventHub.GdprManagerEventHub-1.html).

The callback's signature is the following:
```typescript
type BindEventsCallback = (eventsHub: GdprManagerEventHub) => void;
```

For instance:
```javascript
await restoreHtmlGdprManager(gdprSavior, {
	bindEventHandlersHook(eventsHub) {
		eventsHub.onEnable("myGuard", () => {
			connectToWsApi();
		});

		eventsHub.onDisable("myGuard", () => {
			disconnectFromWsApi();
		});
	},
});
```

### `addGuardsBeforeHook` function

A callback that can be used to add guards' definitions to the [`GdprManagerBuilder`](https://www.ludwig-guerin.fr/gdpr-guard/classes/builders_GdprManagerBuilder.GdprManagerBuilder.html) instance before the library parses data from the DOM.

The callback's signature is the following:
```typescript
type AddGuardsCallback = (managerBuilder: GdprManagerBuilder) => void;
```

### `addGuardsAfterHook` function

A callback that can be used to add guards' definitions to the [`GdprManagerBuilder`](https://www.ludwig-guerin.fr/gdpr-guard/classes/builders_GdprManagerBuilder.GdprManagerBuilder.html) instance after the library parsed data from the DOM.

The callback's signature is the following:
```typescript
type AddGuardsCallback = (managerBuilder: GdprManagerBuilder) => void;
```

### `onDeclineAllErrorHook` function

A callback that can be used to hande/capture errors when the user click on a "decline all" button.

The callback's signature is the following:
```typescript
type StoreErrorHandler = (didStore: boolean, error?: Error) => void;
```

### `onSaveErrorHook` function

A callback that can be used to hande/capture errors when the user saves their preferences.

The callback's signature is the following:
```typescript
type StoreErrorHandler = (didStore: boolean, error?: Error) => void;
```

### `onCancelErrorHook` function

A callback that can be used to hande/capture errors when the user click on a "cancel" button.

The callback's signature is the following:
```typescript
type StoreErrorHandler = (didStore: boolean, error?: Error) => void;
```

### `onBannerClose` function

A callback that can be used to execute code when the GDPR banner is closed.

The callback's signature is the following:
```typescript
type BannerCallback = () => void;
```

For instance:
```javascript
await restoreHtmlGdprManager(gdprSavior, {
	onBannerClose() {
		hideMyGdprBanner();
	},
});
```

### `onBannerOpen` function

A callback that can be used to execute code when the GDPR banner is closed.

The callback's signature is the following:
```typescript
type BannerCallback = () => void;
```

For instance:
```javascript
await restoreHtmlGdprManager(gdprSavior, {
	onBannerOpen() {
		showMyGdprBanner();
	},
});
```
