export type Maybe<T> = T | void

export interface SellerInvoicesParams {
  pagination: {
    page: number
    pageSize: number
  } | null
  dates: {
    startDate: string
    endDate: string
  }
}
