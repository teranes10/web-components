import { type Component } from 'vue'
import type { AutocompleteEmits, AutocompleteProps, CheckboxEmits, CheckboxGroupEmits, CheckboxGroupProps, CheckboxProps, CurrencyFieldEmits, CurrencyFieldProps, DatePickerEmits, DatePickerProps, FileUploadEmits, FileUploadProps, NumberFieldEmits, NumberFieldProps, RadioButtonEmits, RadioButtonProps, RadioGroupEmits, RadioGroupProps, SelectEmits, SelectProps, SwitchEmits, SwitchProps, TextFieldEmits, TextFieldProps } from '../input'
import { Autocomplete, Checkbox, CheckboxGroup, CurrencyField, DatePicker, FileUpload, NumberField, RadioButton, RadioGroup, Select, Switch, TextField } from '../input'
import { Attrs } from '@teranes/vue-composables'

export interface InputComponentProps {
  'checkbox-group': Attrs<CheckboxGroupProps<unknown>, CheckboxGroupEmits<unknown>>
  'checkbox': Attrs<CheckboxProps<unknown>, CheckboxEmits>
  'radio-group': Attrs<RadioGroupProps<unknown>, RadioGroupEmits<unknown>>
  'radio': Attrs<RadioButtonProps<unknown>, RadioButtonEmits>
  'switch': Attrs<SwitchProps, SwitchEmits>
  'date': Attrs<DatePickerProps, DatePickerEmits>
  'select': TextFieldProps & Attrs<SelectProps<unknown, unknown>, SelectEmits<unknown>>
  'autocomplete': TextFieldProps & SelectProps<unknown, unknown> & Attrs<AutocompleteProps<unknown>, AutocompleteEmits<unknown>>
  'text': Attrs<TextFieldProps, TextFieldEmits>
  'number': TextFieldProps & Attrs<NumberFieldProps, NumberFieldEmits>
  'currency': TextFieldProps & Attrs<CurrencyFieldProps, CurrencyFieldEmits>
  'file-upload': Attrs<FileUploadProps<unknown>, FileUploadEmits<unknown>>
}

export const inputComponents: Record<keyof InputComponentProps, Component> = {
  'checkbox-group': CheckboxGroup,
  'checkbox': Checkbox,
  'radio-group': RadioGroup,
  'radio': RadioButton,
  'switch': Switch,
  'date': DatePicker,
  'select': Select,
  'autocomplete': Autocomplete,
  'text': TextField,
  'number': NumberField,
  'currency': CurrencyField,
  'file-upload': FileUpload,
}

export interface InputWidgetProps<T extends keyof InputComponentProps> {
  type: T
  props: InputComponentProps[T]
}
