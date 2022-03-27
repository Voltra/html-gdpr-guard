import { HtmlGdprGuardError } from "@/errors/HtmlGdprGuardError";

export class NoCheckboxError extends HtmlGdprGuardError {
	static defaultMessage: string = "No checkbox found for that guard";

	constructor(message: string = NoCheckboxError.defaultMessage) {
		super(message);
	}
}
