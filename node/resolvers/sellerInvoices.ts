import { SellerInvoicesParams } from '../typings/custom'

export const sellerInvoices = async (
  _: unknown,
  params: SellerInvoicesParams,
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

  const body = { ...params.dates, ...params.pagination }

  const invoices = await marketplace.invoicesBySeller(
    sellerAccount,
    marketplaceReference,
    body
  )

  return invoices
}
