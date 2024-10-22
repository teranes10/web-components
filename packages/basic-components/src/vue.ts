import '../../../shared/assets/css/base.css'
import '../../../shared/assets/css/tailwind.css'

export { type ComponentColor, componentColors } from '../../../shared/colors'

export type { AccordionProps } from './components/accordion/AccordionConfig'
export { default as Accordion } from './components/accordion/Accordion.vue'
export type { AccordionItemProps } from './components/accordion/components/accordion-item/AccordionItemConfig'
export { default as AccordionItem } from './components/accordion/components/accordion-item/AccordionItem.vue'
export type { AccordionItemGroupProps } from './components/accordion/components/accordion-item-group/AccordionItemGroupConfig'
export { default as AccordionItemGroup } from './components/accordion/components/accordion-item-group/AccordionItemGroup.vue'

export type { ButtonProps, ButtonEmits, ButtonClickOptions } from './components/button/ButtonConfig'
export { useIconBtnView } from './components/button/ButtonComposable'
export { default as Button } from './components/button/Button.vue'
export { default as ButtonGroup } from './components/button/components/button-group/ButtonGroup.vue'
export { default as ChevronBtn } from './components/chevron-btn/ChevronBtn.vue'

export type { ChipProps } from './components/chip/ChipConfig'
export { useChipView } from './components/chip/ChipComposable'
export { default as Chip } from './components/chip/Chip.vue'

export { useGroupView } from './components/group/GroupComposable'
export { default as Group } from './components/group/Group.vue'

export { useImageView } from './components/image/ImageComposable'
export { default as Image } from './components/image/Image.vue'

export { useLinkView } from './components/link/LinkComposable'
export { default as Link } from './components/link/Link.vue'

export type { LoadingProps, LoadingEmits } from './components/loading/LoadingConfig'
export { default as Loading } from './components/loading/Loading.vue'

export type { LoadingIconProps } from './components/loading/components/loading-icon/LoadingIconConfig'
export { default as LoadingIcon } from './components/loading/components/loading-icon/LoadingIcon.vue'

export { useProgressBarView } from './components/progress-bar/ProgressBarComposable'
export { default as ProgressBar } from './components/progress-bar/ProgressBar.vue'

export type { TabsProps, TabsEmits, TabItems } from './components/tabs/TabsConfig'
export { default as Tabs } from './components/tabs/Tabs.vue'

export type { TabProps } from './components/tabs/TabConfig'
export { default as Tab } from './components/tabs/Tab.vue'

export { default as TabContent } from "./components/tabs/TabContent.vue"

export type { TooltipProps, TooltipEmits } from './components/tooltip/TooltipConfig'
export { default as Tooltip } from './components/tooltip/Tooltip.vue';
export { vTooltip } from './components/tooltip/TooltipConfig'
