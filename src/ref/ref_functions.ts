// CLEAN REUSABLE FUNCTIONS FOR INTERACTING WITH AND GETTING DATA FROM REF CONTRACT
// depends on nearClient
import { nearClient } from "../createNearClient";
import { ref_exchange_methods_const } from "@sleet-js/ref-exchange-methods-const";
import { ref_contractId_for_network } from "./ref_const";
import type {
  REF_GET_POOL_TYPE,
  REF_GET_DEPOSITS_TYPE,
  STORAGE_BALANCE_OF_RESPONSE_TYPE,
} from "./ref_types";
import {
  REF_GET_POOL_TYPE_Z_CONST,
  REF_GET_POOLS_TYPE_Z_CONST,
} from "./ref_types";
// ================================================
interface ref_args_params_interface {
  pool_id: number;
  from_index: number;
  limit: number;
  fee: number;
  tokens: string[];
  account_id: string;
  token_id: string;
  amount: string;
  deposit: string;
  token_in: string;
  amount_in: string;
  token_out: string;
  min_amount_out: string;
  referral_id: string;
}
// ================================================
// ref_get_number_of_pools_function
export async function ref_get_number_of_pools_function(): Promise<number> {
  const result = await nearClient().view({
    contractId: ref_contractId_for_network(),
    methodName: ref_exchange_methods_const.get_number_of_pools,
    args: {},
  });
  return result as number;
}
// ================================================
// ref_get_pool_function
export async function ref_get_pool_function(
  pool_id: ref_args_params_interface["pool_id"],
): Promise<REF_GET_POOL_TYPE> {
  const result = await nearClient().view({
    contractId: ref_contractId_for_network(),
    methodName: ref_exchange_methods_const.get_pool,
    args: { pool_id: pool_id },
  });

  return REF_GET_POOL_TYPE_Z_CONST.parse(result);
}
// ================================================
// ref_get_deposits_function
export async function ref_get_deposits_function(
  accountId: ref_args_params_interface["account_id"],
): Promise<REF_GET_DEPOSITS_TYPE> {
  const result = await nearClient().view({
    contractId: ref_contractId_for_network(),
    methodName: ref_exchange_methods_const.get_deposits,
    args: { account_id: accountId },
  });

  return result as REF_GET_DEPOSITS_TYPE;
}
// ================================================
// ref_get_pools_function
export async function ref_get_pools_function(
  from_index: ref_args_params_interface["from_index"],
  limit: ref_args_params_interface["limit"],
): Promise<REF_GET_POOL_TYPE[]> {
  const result = await nearClient().view({
    contractId: ref_contractId_for_network(),
    methodName: ref_exchange_methods_const.get_pools,
    args: { from_index, limit },
  });

  return REF_GET_POOLS_TYPE_Z_CONST.parse(result);
}
// ================================================
// ref_add_simple_pool_function
export async function ref_add_simple_pool_function(
  fee: ref_args_params_interface["fee"],
  tokens: ref_args_params_interface["tokens"],
) {
  const result = await nearClient().sendTx({
    receiverId: ref_contractId_for_network(),
    actions: [
      nearClient().actions.functionCall({
        methodName: ref_exchange_methods_const.add_simple_pool,
        args: { fee: fee, tokens: tokens },
        gas: "30000000000000", // 30 TGas
        deposit: "9000000000000000000000", // 0.009
      }),
    ],
  });
  console.log(result);
  return result;
}
// ================================================
// ref_withdraw_function
export async function ref_withdraw_function(
  amount: ref_args_params_interface["amount"],
  token_id: ref_args_params_interface["token_id"],
) {
  const result = await nearClient().sendTx({
    receiverId: ref_contractId_for_network(),
    actions: [
      nearClient().actions.functionCall({
        methodName: ref_exchange_methods_const.withdraw,
        args: {
          amount: amount,
          token_id: token_id,
          unregister: false,
          skip_unwrap_near: false,
        },
        gas: "30000000000000", // 30 TGas
        deposit: "1",
      }),
    ],
  });
  console.log(result);
  return result;
}
// ================================================
// ref_get_deposits_function
export async function ref_storage_balance_of_function(
  accountId: ref_args_params_interface["account_id"],
): Promise<STORAGE_BALANCE_OF_RESPONSE_TYPE> {
  const result = await nearClient().view({
    contractId: ref_contractId_for_network(),
    methodName: ref_exchange_methods_const.storage_balance_of,
    args: { account_id: accountId },
  });

  return result as STORAGE_BALANCE_OF_RESPONSE_TYPE;
}
// ================================================
// ref_storage_deposit_function
export async function ref_storage_deposit_function(
  deposit: ref_args_params_interface["deposit"],
) {
  const result = await nearClient().sendTx({
    receiverId: ref_contractId_for_network(),
    actions: [
      nearClient().actions.functionCall({
        methodName: ref_exchange_methods_const.storage_deposit,
        // args: { },
        gas: "30000000000000", // 30 TGas
        deposit: deposit,
      }),
    ],
  });
  console.log(result);
  return result;
}
// ================================================
// ref_get_return_function
export async function ref_get_return_function(
  pool_id: ref_args_params_interface["pool_id"],
  token_in: ref_args_params_interface["token_in"],
  amount_in: ref_args_params_interface["amount_in"],
  token_out: ref_args_params_interface["token_out"],
): Promise<string> {
  const result = await nearClient().view({
    contractId: ref_contractId_for_network(),
    methodName: ref_exchange_methods_const.get_return,
    args: {
      pool_id: pool_id,
      token_in: token_in,
      amount_in: amount_in,
      token_out: token_out,
    },
  });
  return result as string;
}
// ================================================
// ref_swap_function
export async function ref_swap_function(
  pool_id: ref_args_params_interface["pool_id"],
  token_in: ref_args_params_interface["token_in"],
  amount_in: ref_args_params_interface["amount_in"],
  token_out: ref_args_params_interface["token_out"],
  min_amount_out: ref_args_params_interface["min_amount_out"],
  referral_id: ref_args_params_interface["referral_id"],
) {
  const result = await nearClient().sendTx({
    receiverId: ref_contractId_for_network(),
    actions: [
      nearClient().actions.functionCall({
        methodName: ref_exchange_methods_const.swap,
        args: {
          actions: [
            {
              pool_id: pool_id,
              token_in: token_in,
              amount_in: amount_in,
              token_out: token_out,
              min_amount_out: min_amount_out,
            },
          ],
          referral_id: referral_id,
        },
        gas: "30000000000000", // 30 TGas
        deposit: "1",
      }),
    ],
  });
  console.log(result);
  return result;
}
// ================================================
// ================================================
// copyright 2025 by sleet.near
