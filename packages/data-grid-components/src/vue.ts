import '../../../shared/assets/css/tailwind.css'

export type { DataTableProps, DataTableEmits, DataTableContext, DataTableLoadOptions } from './components/data-table/DataTableConfig'
export { DataTableInitializer as useDataTableInitializer } from './components/data-table/DataTableConfig'
export { default as DataTable } from './components/data-table/DataTable.vue'

export type { PaginationProps, PaginationEmits } from './components/data-table/components/pagination/PaginationConfig'
export { default as Pagination } from './components/data-table/components/pagination/Pagination.vue'

export type { TableProps, TableEmits, TableHeader } from './components/table/TableConfig'
export { default as Table } from './components/table/Table.vue'
