import '../../../shared/assets/css/tailwind.css'

import { registerWebComponent, defineWebComponent, RegisterOptions } from '../../../shared/web-components'

import {
    TextField, FormBuilder, FormBuilderModal, Autocomplete, Select, Checkbox, CheckboxGroup, CurrencyField,
    NumberField, RadioButton, RadioGroup, Switch, InputWidget, Menu, Dropdown
} from './vue'


const FormBuilderCe = defineWebComponent(FormBuilder);
const FormBuilderModalCe = defineWebComponent(FormBuilderModal);

const TextFieldCe = defineWebComponent(TextField);
const CurrencyFieldCe = defineWebComponent(CurrencyField);
const NumberFieldCe = defineWebComponent(NumberField);
const AutocompleteCe = defineWebComponent(Autocomplete);
const SelectCe = defineWebComponent(Select);
const CheckboxCe = defineWebComponent(Checkbox);
const CheckboxGroupCe = defineWebComponent(CheckboxGroup);
const RadioButtonCe = defineWebComponent(RadioButton);
const RadioGroupCe = defineWebComponent(RadioGroup);
const SwitchCe = defineWebComponent(Switch);
const InputWidgetCe = defineWebComponent(InputWidget);
const MenuCe = defineWebComponent(Menu);
const DropdownCe = defineWebComponent(Dropdown);

export function register(options: RegisterOptions = {}) {
    registerWebComponent('form-builder', FormBuilderCe, options)
    registerWebComponent('form-builder-modal', FormBuilderModalCe, options)

    registerWebComponent('text-field', TextFieldCe, options)
    registerWebComponent('currency-field', CurrencyFieldCe, options)
    registerWebComponent('number-field', NumberFieldCe, options)
    registerWebComponent('autocomplete', AutocompleteCe, options)
    registerWebComponent('select', SelectCe, options)

    registerWebComponent('checkbox-group', CheckboxGroupCe, options)
    registerWebComponent('checkbox', CheckboxCe, options)

    registerWebComponent('radio-group', RadioGroupCe, options)
    registerWebComponent('radio-button', RadioButtonCe, options)

    registerWebComponent('switch', SwitchCe, options)

    registerWebComponent('input-widget', InputWidgetCe, options)

    registerWebComponent('menu', MenuCe, options)

    registerWebComponent('dropdown', DropdownCe, options)
}

export { FormBuilderBase, useFormFieldView, useSwitchView } from './vue'
