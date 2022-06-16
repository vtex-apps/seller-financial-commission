import { EmailData } from '../typings/custom'

interface SendEmailInput {
  emailData: EmailData
}

export const sendEmail = async (
  _: unknown,
  params: SendEmailInput,
  ctx: Context
) => {
  const {
    vtex: { workspace },
    clients: { marketplace, affiliate },
  } = ctx

  const marketplaceAccount = await affiliate.getMarketplaceName()

  const marketplaceReference = {
    account: marketplaceAccount,
    workspace,
  }

  const response = await marketplace.sendEmail(marketplaceReference, {
    email: params.emailData.email,
    jsonData: JSON.parse(params.emailData.jsonData),
  })

  return response
}
