import { nearClient } from "../createNearClient";
import type { ACCESS_KEY_INTERFACE } from "./key_types";
// ==========================================
// args list:
// - publicKey
// - account_id
// ==========================================
// delete_key_fun
export async function delete_key_fun(publicKey: string) {
  nearClient().actions.deleteKey({ publicKey: publicKey });
}
// ==========================================
// get_key_list_fun
export async function get_key_list_fun(account_id: string) {
  const response = await nearClient().sendRpc("query", {
    request_type: "view_access_key_list",
    account_id,
    finality: "final",
  });
  const keys: ACCESS_KEY_INTERFACE[] = response.result.keys;
  return keys;
}
// ==========================================

