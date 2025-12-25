import { NETWORK_STORAGE_KEY } from "../createNearClient";
// ===========================================
let NETWORK_ID: string;
//
export function toggleNetwork() {
  const savedNetwork = localStorage.getItem(NETWORK_STORAGE_KEY) || "mainnet";
  NETWORK_ID = savedNetwork;
  const newNetwork = NETWORK_ID === "mainnet" ? "testnet" : "mainnet";
  NETWORK_ID = newNetwork;
  localStorage.setItem(NETWORK_STORAGE_KEY, newNetwork);
  console.info(newNetwork);
}
//
export function setNetwork_mainnet() {
  let NETWORK_ID = "mainnet";
  localStorage.setItem(NETWORK_STORAGE_KEY, NETWORK_ID);
}
export function setNetwork_testnet() {
  let NETWORK_ID = "testnet";
  localStorage.setItem(NETWORK_STORAGE_KEY, NETWORK_ID);
}