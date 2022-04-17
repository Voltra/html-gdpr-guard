const {
	defaults,
	LocalStorageSavior,
} = gdprGuardLocal;

const { restoreHtmlGdprManager } = htmlGdprGuard;

MicroModal.init({
	debugMode: true,
});

document.querySelectorAll("[data-gdpr-open]")
	.forEach(el => {
		el.addEventListener("click", () => {
			MicroModal.show("gdpr-modal");
		});
	});

document.querySelectorAll("[data-gdpr-allow-all], [data-gdpr-decline-all], [data-gdpr-save], [data-gdpr-cancel]")
	.forEach(el => {
		el.addEventListener("click", () => {
			window.gdprManager.closeBanner();
			MicroModal.close("gdpr-modal");
		})
	});

(async () => {
	try {
		const savior = new LocalStorageSavior(
			defaults.makeConfig({
				version: "v1.0.0",
			})
		);

		window.gdprManager = await restoreHtmlGdprManager(savior);
	} catch(e) {
		console.error(e);
	}
})();
