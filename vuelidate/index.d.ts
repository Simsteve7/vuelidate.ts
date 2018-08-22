import Vue from 'vue'

declare module 'vuelidate' {

    /**
     * Covers beforeCreate(), beforeDestroy() and data().
     *
     * No public members.
     */
    export const validationMixin: {
        data(): any
        beforeCreate(): void
        beforeDestroy(): void
    }

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

    export interface ValidationPredicate {}

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
}

declare module 'vue/types/vue' {
    interface Vue {
        $v: { [attr: string]: any }
    }
}

declare module 'vue/types/options' {
    interface ComponentOptions<V extends Vue> {
        validations?: ValidationRule[]
    }
}
