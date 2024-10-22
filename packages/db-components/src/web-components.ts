import '../../../shared/assets/css/tailwind.css'

import { registerWebComponent, defineWebComponent, RegisterOptions } from '../../../shared/web-components'

import { ErDiagram } from './vue'

const ErDiagramCe = defineWebComponent(ErDiagram);

export function register(options: RegisterOptions = {}) {
    registerWebComponent('er-diagram', ErDiagramCe, options)
}