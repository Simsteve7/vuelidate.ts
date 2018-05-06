/// <reference path="vuelidate.d.ts" />
// TypeScript Version: 2.3
import Vue from 'vue'
import { Validation, ValidationRule } from 'vuelidate'

declare module 'vue/types/vue' {
    interface Vue {
        $v: { [attr: string]: Validation }
    }
}

declare module 'vue/types/options' {
    interface ComponentOptions<V extends Vue> {
        validations?: ValidationRule[]
    }
}
