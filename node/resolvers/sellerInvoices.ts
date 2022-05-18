import { InvoiceFilterParams } from '../typings/custom'

export const sellerInvoices = async (
  _: unknown,
  params: InvoiceFilterParams,
  ctx: Context
) => {
  const {
    vtex: { account: sellerAccount, workspace },
    clients: { marketplace, affiliate },
  } = ctx

  const marketplaceAccount = await affiliate.getMarketplaceName()

  const marketplaceReference = {
    account: marketplaceAccount,
    workspace,
  }

  const filter = {
    ...params.sellerInvoiceParams.dates,
    ...params.sellerInvoiceParams.pagination,
  }

  const invoices = await marketplace.invoicesBySeller(
    sellerAccount,
    marketplaceReference,
    filter
  )

  return invoices
}
