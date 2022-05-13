import { getInvoice } from './getInvoice'
import { createInvoice } from './createInvoice'
import { sellerInvoices } from './sellerInvoices'
import { sellerOrders } from './sellerOrders'

export const queries = {
  sellerInvoices,
  getInvoice,
  sellerOrders,
}

export const mutations = {
  createInvoice,
}
