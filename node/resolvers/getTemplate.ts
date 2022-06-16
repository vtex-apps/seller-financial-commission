export const getTemplate = async (_: unknown, __: unknown, ctx: Context) => {
  const {
    vtex: { workspace },
    clients: { marketplace, affiliate },
  } = ctx

  const marketplaceAccount = await affiliate.getMarketplaceName()

  const marketplaceReference = {
    account: marketplaceAccount,
    workspace,
  }

  const template = await marketplace.getTemplate(marketplaceReference)

  return template.template.Templates.email.Message
}
