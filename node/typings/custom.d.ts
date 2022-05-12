export type Maybe<T> = T | void

export interface InvoiceFilterParams {
  pagination: {
    page: number
    pageSize: number
  } | null
  dates: {
    startDate: string
    endDate: string
  }
}

export interface InvoiceData {
  id: string
  name: string
  email: string
  startDate: string
  endDate: string
}

export interface FlatFilters {
  page?: number
  pageSize?: number
  startDate: string
  endDate: string
}

export interface OrderFilterParams {
  searchOrdersParams: {
    dateStart: string
    dateEnd: string
    sellerName: string
    page: number
    perpage: number
    status?: string
  }
}
