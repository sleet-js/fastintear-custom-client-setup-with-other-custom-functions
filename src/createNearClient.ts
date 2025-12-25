// src/ts/fastintear/createNearClient.ts
// This file handles near client setup
// and has function to getStoredNetworkId
// ===========================================
import { createNearClient } from "fastintear";
import * as near from "fastintear";
// ===========================================
// used for network toggle
export const NETWORK_STORAGE_KEY = "network_id";
//
export function getStoredNetworkId(): "mainnet" | "testnet" {
  const raw = localStorage.getItem(NETWORK_STORAGE_KEY);
  const value = (raw || "mainnet").trim().toLowerCase();
  // also global near needs to be configured. easiest to make sure right everytime we need
  near.config({ networkId: value });
  return value === "testnet" ? "testnet" : "mainnet";
}
// ===========================================
// Multiple clients with different configurations
const near_mainnetClient = createNearClient({ networkId: "mainnet" });
const near_testnetClient = createNearClient({ networkId: "testnet" });
//
export function nearClient() {
  const networkId = getStoredNetworkId();
  const client =
    networkId === "testnet" ? near_testnetClient : near_mainnetClient;

  console.log("[nearClient] networkId:", networkId);
  console.log(
    "[nearClient] client:",
    networkId === "testnet" ? "near_testnetClient" : "near_mainnetClient",
  );

  return client;
}
// ================================================
// ================================================
// copyright 2025 by sleet.near
