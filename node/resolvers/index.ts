import { getInvoice } from './getInvoice'
import { createInvoice } from './createInvoice'
import { sellerInvoices } from './sellerInvoices'

export const queries = {
  sellerInvoices,
  getInvoice,
}

export const mutations = {
  createInvoice,
}
