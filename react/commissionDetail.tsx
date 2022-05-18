import React from 'react'
import { useRuntime } from 'vtex.render-runtime'
import { detail as Detail } from 'vtex.components-financial-commission'

import SELLER_ORDERS from './graphql/sellerOrders.gql'
import CREATE_INVOICE from './graphql/createInvoice.gql'
import SELLER_INVOICES from './graphql/sellerInvoices.gql'

function CommissionDetail() {
  const { account } = useRuntime()

  return (
    <Detail
      account={account}
      ordersQuery={SELLER_ORDERS}
      invoiceMutation={CREATE_INVOICE}
      invoicesQuery={SELLER_INVOICES}
    />
  )
}

export default CommissionDetail
