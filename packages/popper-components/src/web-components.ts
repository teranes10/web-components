import '../../../shared/assets/css/tailwind.css'

import { registerWebComponent, defineWebComponent, RegisterOptions } from '../../../shared/web-components';

export { useAlert, useArchiveAlert, useRestoreAlert, useDeleteAlert, useNotification, useToast, useModal } from './vue'

import { Modal } from './vue'

const ModalCe = defineWebComponent(Modal)

export function register(options: RegisterOptions = {}) {
    registerWebComponent('modal', ModalCe, options)
}
