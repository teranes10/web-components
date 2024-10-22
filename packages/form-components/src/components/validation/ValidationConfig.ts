import type { Ref } from 'vue'

export type ValidationRule<T> = (value: T) => string | boolean

export interface ValidationProps<T> {
  rules?: ValidationRule<T>[]
}

export type ValidationCallback = (messages?: string[]) => void

export interface ValidationOptions<T> {
  inputElement?: HTMLInputElement
  inputContainer?: HTMLElement
  errorsListElement?: HTMLUListElement
  value?: Ref<T | undefined>
  cb?: ValidationCallback
}

export const ValidationFormContextKey = 'ValidationFormContextKey'
export const ValidationFieldIdAttribute = 'validation-id'

export interface ValidationFieldContext {
  isError: Ref<boolean>
  validate: (cb?: ValidationCallback) => Promise<boolean>
}

export interface ValidationFormContext {
  onInitialize: (key: string, ctx: ValidationFieldContext) => void
}

export interface ValidationForm {
  getFields: () => Map<string, ValidationFieldContext>
  validate: () => Promise<boolean>
}
