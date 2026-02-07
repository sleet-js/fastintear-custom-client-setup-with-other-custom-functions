// nearClient
export {
  nearClient,
  getStoredNetworkId,
  NETWORK_STORAGE_KEY,
} from "./createNearClient";
// network
export {
  toggleNetwork,
  setNetwork_mainnet,
  setNetwork_testnet,
} from "./network/index";
// ref
export { ref_contractId_for_network } from "./ref/ref_const";
export {
  ref_get_number_of_pools_function,
  ref_get_pool_function,
  ref_get_pools_function,
  ref_add_simple_pool_function,
} from "./ref/ref_functions";
// other
export { get_nearClient_accountId } from "./other/accountId";
export { delete_key_fun, get_key_list_fun } from "./other/keys";
export type { ACCESS_KEY_INTERFACE } from "./other/key_types";
// auth
export {
  isSignedIn,
  accountId,
  auth_update_authStatus_fun,
  auth_handleLogin,
  auth_handleLogout
} from "./other/auth_login";
// ================================================
// ================================================
// copyright 2025 by sleet.near
