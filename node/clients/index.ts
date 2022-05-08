import { ClientsConfig, IOClients, LRUCache } from '@vtex/api'

import MarketplaceAppClient from './marketplace'
import AffiliatesClient from './affiliates'

export class Clients extends IOClients {
  public get marketplace() {
    return this.getOrSet('marketplace', MarketplaceAppClient)
  }

  public get affiliate() {
    return this.getOrSet('affiliate', AffiliatesClient)
  }

  /* public marketplaceV2(marketplaceURL: string, context: IOContext): any {
    return new MarketplaceFinancialCommission(marketplaceURL, context)
  } */
}

const TIMEOUT_MS = 60000
const memoryCache = new LRUCache<string, any>({ max: 5000 })

metrics.trackCache('seller-financial-commission', memoryCache)

const clients: ClientsConfig<Clients> = {
  implementation: Clients,
  options: {
    default: {
      retries: 2,
      timeout: TIMEOUT_MS,
      memoryCache,
    },
  },
}

export default clients
