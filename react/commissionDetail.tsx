import React from 'react'
import { useRuntime } from 'vtex.render-runtime'
import { commissionReportDetail as Detail } from 'vtex.marketplace-financial-commission'

import { SELLER_ORDERS } from './graphql'

function CommissionDetail() {
  const { account } = useRuntime()

  return <Detail account={account} ordersQuery={SELLER_ORDERS} />
}

export default CommissionDetail
