import type { ValidationProps } from '../../validation/ValidationConfig'

export type CheckboxProps<V> = ValidationProps<boolean> & {
  label?: string
  modelValue?: boolean
  value?: V
  icon?: 'tick' | 'minus' | 'square'
  color?: string
  disabled?: boolean
}

export type CheckboxEmits = {
  'update:modelValue': [value: boolean]
  'checked': [value: boolean]
}
