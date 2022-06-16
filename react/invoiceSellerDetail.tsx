import React from 'react'
import { invoiceDetail as InvoiceDetail } from 'vtex.components-financial-commission'

import GET_INVOICE from './graphql/getInvoice.gql'
import SEND_EMAIL from './graphql/sendEmail.gql'
import GET_TEMPLATE from './graphql/getTemplate.gql'

const InvoiceSellerDetail = () => {
  return (
    <InvoiceDetail
      invoiceQuery={GET_INVOICE}
      getTemplate={GET_TEMPLATE}
      sendEmail={SEND_EMAIL}
    />
  )
}

export default InvoiceSellerDetail
