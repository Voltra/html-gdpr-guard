import { HtmlGdprGuardError } from "./HtmlGdprGuardError";

export class NoNameError extends HtmlGdprGuardError {
	static defaultMessage: string = "Guard definition is missing the guard's name";

	constructor(message: string = NoNameError.defaultMessage) {
		super(message);
	}
}
