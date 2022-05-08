interface GetInvoiceInput {
  id: string
}

export const getInvoice = async (
  _: unknown,
  params: GetInvoiceInput,
  ctx: Context
) => {
  const {
    vtex: { account: sellerAccount, workspace },
    clients: { marketplace, affiliate },
  } = ctx

  const { id } = params

  const marketplaceAccount = await affiliate.getMarketplaceName()

  const marketplaceReference = {
    account: marketplaceAccount,
    workspace,
  }

  const invoice = await marketplace.getInvoice(
    sellerAccount,
    id,
    marketplaceReference
  )

  return invoice
}
