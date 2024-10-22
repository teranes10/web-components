import '../../../shared/assets/css/base.css'
import '../../../shared/assets/css/tailwind.css'
import './assets/css/web-components-styles.css'

import { registerWebComponent, defineWebComponent, RegisterOptions } from '../../../shared/web-components';
import {
    Accordion, AccordionItem, AccordionItemGroup,
    Button, ButtonGroup, ChevronBtn,
    Chip, Group, Image, Link, Loading, LoadingIcon, ProgressBar, Tabs, Tab, TabContent, Tooltip
} from './vue'

const AccordionCe = defineWebComponent(Accordion);
const AccordionItemCe = defineWebComponent(AccordionItem);
const AccordionItemGroupCe = defineWebComponent(AccordionItemGroup);
const ButtonCe = defineWebComponent(Button, { emits: ['pressed'] });
const ButtonGroupCe = defineWebComponent(ButtonGroup);
const ChevronBtnCe = defineWebComponent(ChevronBtn);
const ChipCe = defineWebComponent(Chip);
const GroupCe = defineWebComponent(Group);
const ImageCe = defineWebComponent(Image);
const LinkCe = defineWebComponent(Link);
const LoadingCe = defineWebComponent(Loading);
const LoadingIconCe = defineWebComponent(LoadingIcon);
const ProgressBarCe = defineWebComponent(ProgressBar);
const TabsCe = defineWebComponent(Tabs);
const TabCe = defineWebComponent(Tab);
const TabContentCe = defineWebComponent(TabContent);
const TooltipCe = defineWebComponent(Tooltip);

export function register(options: RegisterOptions = {}) {
    registerWebComponent('loading', LoadingCe, options)
    registerWebComponent('loading-icon', LoadingIconCe, options)

    registerWebComponent('group', GroupCe, options)
    registerWebComponent('tooltip', TooltipCe, options)

    registerWebComponent('accordion', AccordionCe, options)
    registerWebComponent('accordion-item-group', AccordionItemGroupCe, options)
    registerWebComponent('accordion-item', AccordionItemCe, options)

    registerWebComponent('button', ButtonCe, options)
    registerWebComponent('button-group', ButtonGroupCe, options)
    registerWebComponent('chevron-btn', ChevronBtnCe, options)

    registerWebComponent('chip', ChipCe, options)
    registerWebComponent('image', ImageCe, options)
    registerWebComponent('link', LinkCe)

    registerWebComponent('progress-bar', ProgressBarCe, options)

    registerWebComponent('tabs', TabsCe, options)
    registerWebComponent('tab', TabCe, options)
    registerWebComponent('tab-content', TabContentCe, options)
}

export { type ComponentColor, componentColors } from '../../../shared/colors'

export { useIconBtnView } from './vue'
export { useChipView } from './vue'
export { useGroupView } from './vue'
export { useImageView } from './vue'
export { useLinkView } from './vue'
export { useProgressBarView } from './vue'
