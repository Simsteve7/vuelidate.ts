declare module 'vuelidate' {
    import Vue from 'vue'

    /**
     * Covers beforeCreate(), beforeDestroy() and data().
     *
     * No public members.
     */
    // export interface validationMixin { }

    // const Validation
    export interface Validation extends Vue {
        // const validationGetters
        readonly $invalid: boolean
        readonly $dirty: boolean
        readonly $error: boolean
        readonly $pending: boolean
        readonly $params: boolean

        // const validationMethods
        $touch(): never
        $reset(): never
        $flattenparams(): Params[]
    }

    // const ValidationRule
    export interface ValidationRule {
        $params(): Params
        $pending(): boolean
    }

    // pre-defined rules
    export const required: ValidationRule
    export const requiredIf: (field: string) => ValidationRule
    export const requiredUnless: (field: string) => ValidationRule
    export const sameAs: (field: string) => ValidationRule

    // build your own rule
    export const withParams: (params: Params, rule: CustomRule) => ValidationRule
    export interface Params {
        type: string
    }
    export interface CustomRule extends ValidationRule {
        (value: any, parentVm?: Vue): boolean
    }

    export default Validation
}
