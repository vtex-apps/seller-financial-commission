import { InvoiceData } from '../typings/custom'

interface CreateInvoiceInput {
  invoiceData: InvoiceData
}

export const createInvoice = async (
  _: any,
  params: CreateInvoiceInput,
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

  const response = await marketplace.createInvoice(
    sellerAccount,
    marketplaceReference,
    params.invoiceData
  )

  return response
}
