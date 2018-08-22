declare module "vuelidate/lib/validators" {
    import Vue from "vue";
    import {ValidationPredicate} from "vuelidate";

    /**
     * Accepts only alphabet characters.
     */
    export function alpha(value: any): boolean;

    /**
     * Accepts only alphanumerics.
     */
    export function alphaNum(value: any): boolean;

    /**
     * Accepts only numeric.
     */
    export function numeric(numeric: any): boolean;

    /**
     * Checks if a number is in specified bounds. Min and max are both inclusive.
     */
    export function between(min: number, max: number): (value: any) => boolean;

    /**
     * Accepts valid email addresses. Keep in mind you still have to carefully verify it on your server, as it is impossible to tell if the address is real without sending verification email.
     */
    export function email(value: any): boolean;

    /**
     * Requires the input to have a maximum specified length, inclusive. Works with arrays.
     */
    export function maxLength(max: number): (value: any) => boolean;

    /**
     * Requires the input to have a minimum specified length, inclusive. Works with arrays.
     */
    export function minLength(min: number): (value: any) => boolean;

    /**
     * Requires non-empty data. Checks for empty arrays and strings containing only whitespaces.
     */
    export function required(value: any): boolean;

    /**
     * Checks for equality with a given property. Locator might be either a sibling property name or a function, that will get your component as this and nested model which sibling properties under second parameter.
     */
    export function sameAs(locator: string): (value: any, vm?: any) => boolean;

    /**
     * Passes when at least one of provided validators passes.
     */
    export function or(...validators: ValidationPredicate[]): () => boolean;

    /**
     * Passes when all of provided validators passes.
     */
    export function and(...validators: ValidationPredicate[]): () => boolean;

    export const helpers: {
        withParams: any;
        req(value: any): boolean;
        len(value: any[] | object | string);
        ref(reference: string, vm: Vue, parentVm: Vue): any;
        regex(type: any, expr: RegExp): boolean;
    }
}
