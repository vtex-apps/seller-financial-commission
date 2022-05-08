import type { InstanceOptions, IOContext, IOResponse } from '@vtex/api'
import { JanusClient } from '@vtex/api'

export interface Affiliate {
  name: string
  id: string
  followUpEmail: string
  salesChannel: string
  searchURIEndpoint: string
  useSellerPaymentMethod: boolean
  searchURIEndpointVersion: string
  searchURIEndpointAvailableVersions: string[]
}

export default class AffiliatesClient extends JanusClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super(context, {
      ...options,
      headers: {
        ...options?.headers,
        VtexIdclientAutCookie:
          context.adminUserAuthToken ?? context.authToken ?? '',
        'x-vtex-user-agent': context.userAgent,
      },
    })
  }

  public async getMarketplaceName(): Promise<string> {
    // https://developers.vtex.com/vtex-rest-api/reference/affiliations
    const url = `/api/fulfillment/pvt/affiliates`

    const apiResponse = (await this.http.getRaw(url)) as IOResponse<Affiliate[]>

    const fulfillmentURL = apiResponse.data[0].searchURIEndpoint.split('/')
    const marketplaceAccountName = fulfillmentURL[fulfillmentURL.length - 2]

    return marketplaceAccountName
  }
}
