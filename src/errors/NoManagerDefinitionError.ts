import { HtmlGdprGuardError } from "@/errors/HtmlGdprGuardError";

export class NoManagerDefinitionError extends HtmlGdprGuardError {
	static defaultMessage: string = "No definition found for the GDPR manager";

	constructor(message = NoManagerDefinitionError.defaultMessage) {
		super(message);
	}
}
