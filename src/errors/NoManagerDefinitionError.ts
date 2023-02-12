import { HtmlGdprGuardError } from "./HtmlGdprGuardError";

/**
 * Error thrown when the library does not find
 * a root {@link HTMLElement} to get the manager's
 * data from
 */
export class NoManagerDefinitionError extends HtmlGdprGuardError {
	static defaultMessage: string = "No definition found for the GDPR manager";

	constructor(message = NoManagerDefinitionError.defaultMessage) {
		super(message);
	}
}
