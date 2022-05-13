import { OrderFilterParams } from '../typings/custom'
import { toQueryString } from '../utils/toQueryString'

export const sellerOrders = async (
  _: unknown,
  params: OrderFilterParams,
  ctx: Context
) => {
  const {
    vtex: { workspace, account },
    clients: { marketplace, affiliate },
  } = ctx

  const marketplaceAccount = await affiliate.getMarketplaceName()

  const marketplaceReference = {
    account: marketplaceAccount,
    workspace,
  }

  const queryString = toQueryString({
    ...params.searchOrdersParams,
    sellerId: account,
  })

  const invoices = await marketplace.sellerOrders(
    marketplaceReference,
    queryString
  )

  return invoices
}
