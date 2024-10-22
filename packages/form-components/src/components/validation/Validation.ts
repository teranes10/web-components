import { inject, onUnmounted, provide, ref, watch } from 'vue'
import { call, isString } from '@teranes/utils'
import { getShortUniqueId } from '@teranes/short-unique-id'
import type { ValidationCallback, ValidationFieldContext, ValidationForm, ValidationFormContext, ValidationOptions, ValidationRule } from './ValidationConfig'
import { ValidationFormContextKey, ValidationFieldIdAttribute } from './ValidationConfig'

export function useFieldValidation<T>(rules: ValidationRule<T>[],
  { inputElement, inputContainer, errorsListElement, value, cb }: ValidationOptions<T> = {}): ValidationFieldContext {
  const fieldId = getShortUniqueId()
  const isError = ref(false)

  if (inputContainer) {
    inputContainer.setAttribute(ValidationFieldIdAttribute, fieldId)
  }

  if (inputElement) {
    async function onBlur() {
      await validate(cb)
    }

    inputElement.setAttribute(ValidationFieldIdAttribute, fieldId)
    inputElement.addEventListener('blur', onBlur)

    onUnmounted(() => {
      inputElement.removeEventListener('blur', onBlur)
    })
  }

  if (value) {
    let waitingTimer: NodeJS.Timeout
    const waitingTimerDelay = rules.some(x => x.constructor.name === 'AsyncFunction') ? 2500 : 100

    watch(value, () => {
      clearTimeout(waitingTimer)
      waitingTimer = setTimeout(async () => {
        await validate(cb)
      }, waitingTimerDelay)
    })
  }

  function getValue() {
    return value ? value.value : inputElement?.value
  }

  async function validate(cb?: ValidationCallback): Promise<boolean> {
    const value = getValue()
    const errorMessages: string[] = []

    if (rules && rules.length > 0) {
      for (const rule of rules) {
        const result = await call(rule, value)
        if (isString(result)) {
          errorMessages.push(result)
        }
      }
    }

    isError.value = errorMessages && errorMessages.length > 0
    cb && cb(errorMessages)

    if (errorsListElement) {
      setErrorsToContainer(errorsListElement, errorMessages)
    }

    return !isError.value
  }

  function setErrorsToContainer(container: HTMLUListElement, errors: string[]) {
    while (container.firstChild) {
      container.removeChild(container.firstChild)
    }

    if (document) {
      for (const error of errors) {
        const li = document.createElement('li')
        li.classList.add('form-help', 'text-danger')

        const textNode = document.createTextNode(error)

        li.appendChild(textNode)
        container.appendChild(li)
      }
    }
  }

  const fieldCtx: ValidationFieldContext = { isError, validate }

  const formCtx = inject<ValidationFormContext | undefined>(ValidationFormContextKey, undefined)
  formCtx?.onInitialize(fieldId, fieldCtx)

  return fieldCtx
}

export function useFormValidation(): ValidationForm {
  const formFields = new Map<string, ValidationFieldContext>()

  const ctx: ValidationFormContext = {
    onInitialize: function (key: string, ctx: ValidationFieldContext): void {
      formFields.set(key, ctx)
    },
  }

  provide(ValidationFormContextKey, ctx)

  return {
    getFields: () => formFields,
    validate: async () => {
      let _isValid = true
      let firstErrorFieldId

      const fields = Array.from(formFields.entries())
      if (fields && fields.length > 0) {
        for (const [key, value] of fields) {
          if (!await value.validate()) {
            if (!firstErrorFieldId) {
              firstErrorFieldId = key
            }
            _isValid = false
          }
        }

        if (document && firstErrorFieldId) {
          const firstFieldElement = document.querySelector(`[${ValidationFieldIdAttribute}="${firstErrorFieldId}"]`)
          if (firstFieldElement) {
            scrollToView(firstFieldElement, -40)
          }
        }
      }

      return _isValid
    },
  }
}

function scrollToView(element: Element, adjustment: number = 0) {
  const scrollContainer = findScrollContainer(element)
  const scrollTop = scrollContainer?.scrollTop || 0
  const elementTop = element?.getBoundingClientRect()?.top || 0

  scrollContainer?.scrollTo({
    top: elementTop + scrollTop + adjustment,
    behavior: 'smooth',
  })
}

function findScrollContainer(element: Element): Element | null {
  let parent = element.parentElement
  while (parent) {
    if (getComputedStyle(parent).overflow === 'auto') {
      return parent
    }

    parent = parent.parentElement
  }

  return null
}
