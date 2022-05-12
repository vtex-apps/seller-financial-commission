import React from 'react'
import { useRuntime } from 'vtex.render-runtime'
import { commissionReportDetail as Detail } from 'vtex.marketplace-financial-commission'

function CommissionDetail() {
  const { account } = useRuntime()

  return <Detail seller={account} />
}

export default CommissionDetail
