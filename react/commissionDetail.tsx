import React, { useEffect } from 'react'
import { useRuntime } from 'vtex.render-runtime'
import { commissionReportDetail as Detail } from 'vtex.marketplace-financial-commission'

import SELLER_ORDERS from './graphql/sellerOrders.gql'

function CommissionDetail() {
  const { account, setQuery } = useRuntime()

  useEffect(() => {
    setQuery({ sellerName: account })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <Detail account={account} ordersQuery={SELLER_ORDERS} />
}

export default CommissionDetail
