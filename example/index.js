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
			MicroModal.close("gdpr-modal");
		})
	});
