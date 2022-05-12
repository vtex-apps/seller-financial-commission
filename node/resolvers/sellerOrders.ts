import { OrderFilterParams } from '../typings/custom'
import { toQueryString } from '../utils/toQueryString'

export const sellerOrders = async (
  _: unknown,
  params: OrderFilterParams,
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

  const queryString = toQueryString(params.searchOrdersParams)

  const invoices = await marketplace.sellerOrders(
    sellerAccount,
    marketplaceReference,
    queryString
  )

  return invoices
}
