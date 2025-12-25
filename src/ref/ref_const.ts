import {
  ref_mainnet_contractId_const,
  ref_testnet_contractId_const,
} from "@sleet-js/ref-exchange-methods-const";
import { getStoredNetworkId } from "../createNearClient";
//
export function ref_contractId_for_network() {
  const networkId = getStoredNetworkId();
  const ref_contractId =
    networkId === "testnet"
      ? ref_testnet_contractId_const
      : ref_mainnet_contractId_const;
  console.log("ref contractId", ref_contractId);
  return ref_contractId;
}
