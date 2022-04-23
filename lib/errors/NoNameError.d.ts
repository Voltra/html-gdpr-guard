import { HtmlGdprGuardError } from "@/errors/HtmlGdprGuardError";
export declare class NoNameError extends HtmlGdprGuardError {
    static defaultMessage: string;
    constructor(message?: string);
}
