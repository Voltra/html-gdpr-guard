import { HtmlGdprGuardError } from "@/errors/HtmlGdprGuardError";
/**
 * Error thrown when the library does not find
 * a root {@link HTMLElement} to get the manager's
 * data from
 */
export declare class NoManagerDefinitionError extends HtmlGdprGuardError {
    static defaultMessage: string;
    constructor(message?: string);
}
