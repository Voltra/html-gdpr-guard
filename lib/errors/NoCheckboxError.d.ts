import { HtmlGdprGuardError } from "@/errors/HtmlGdprGuardError";
export declare class NoCheckboxError extends HtmlGdprGuardError {
    static defaultMessage: string;
    constructor(message?: string);
}
