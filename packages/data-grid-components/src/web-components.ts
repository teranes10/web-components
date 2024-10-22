import '../../../shared/assets/css/tailwind.css'

import { registerWebComponent, defineWebComponent, RegisterOptions } from '../../../shared/web-components';

import { DataTable, Pagination, Table } from './vue'

const DataTableCe = defineWebComponent(DataTable);
const PaginationCe = defineWebComponent(Pagination);
const TableCe = defineWebComponent(Table)

export function register(options: RegisterOptions = {}) {
    registerWebComponent('data-table', DataTableCe, options)
    registerWebComponent('pagination', PaginationCe, options)
    registerWebComponent('table', TableCe, options)
}