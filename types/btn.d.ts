import Vue from 'vue'

export declare interface Btn extends Vue {
  type: 'primary' | 'success' | 'warning' | 'danger'

  disabled: boolean
}
