import zkSyncMapper from "./lib/mappers/zkSync";

export const networks = {
  zkSyncMainnet: {
    url: "https://zksync2-mainnet-explorer.zksync.io/contract_verification/info",
    mapper: zkSyncMapper
  }
} as { [key: string]: { url: string, mapper: typeof zkSyncMapper } }
