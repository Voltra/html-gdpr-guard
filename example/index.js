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
		}, { passive: true });
	});

document.querySelectorAll("[data-gdpr-allow-all], [data-gdpr-decline-all], [data-gdpr-save], [data-gdpr-cancel]")
	.forEach(el => {
		el.addEventListener("click", () => {
			window.gdprManager.closeBanner();
			MicroModal.close("gdpr-modal");
		}, { passive: true })
	});

const banner = document.querySelector("[data-gdpr-banner]");

(async () => {
	try {
		const savior = new LocalStorageSavior(
			defaults.makeConfig({
				version: "v1.0.0",
			})
		);

		window.gdprManager = await restoreHtmlGdprManager(savior, {
			onBannerOpen() {
				banner.style.display = "block";
			},
			onBannerClose() {
				banner.style.display = "none";
			},
		});
	} catch(e) {
		console.error(e);
	}
})();
