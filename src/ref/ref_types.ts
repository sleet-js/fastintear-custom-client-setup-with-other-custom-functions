import * as z from "zod";
// ref types
// ==============================
// ==============================
export interface REF_GET_POOL_TYPE {
  pool_kind: string;
  token_account_ids: string[];
  amounts: string[];
  total_fee: number;
  shares_total_supply: string;
  amp: number;
}
// ==============================
export const REF_GET_POOL_TYPE_Z_CONST = z.object({
  pool_kind: z.string(),
  token_account_ids: z.array(z.string()),
  amounts: z.array(z.string()),
  total_fee: z.number(),
  shares_total_supply: z.string(),
  amp: z.number(),
}) satisfies z.ZodType<REF_GET_POOL_TYPE>;
export const REF_GET_POOLS_TYPE_Z_CONST = z.array(REF_GET_POOL_TYPE_Z_CONST);
