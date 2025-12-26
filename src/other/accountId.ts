import { nearClient } from "../createNearClient";
// ==========================================
// ==========================================
// handy when you need a string.
export function get_nearClient_accountId() {
  const accountId: string = nearClient().accountId() ?? "";
  console.log("accountId");
  console.log(accountId);
  return typeof accountId === "string" ? accountId : accountId;
}
// ================================================
// ================================================
// copyright 2025 by sleet.near
