// ACCESS_KEY_INTERFACE
export interface ACCESS_KEY_INTERFACE {
  access_key: {
    nonce: number; // large integer; if you need BigInt, change to bigint
    permission: AccessKeyPermission;
  };
  public_key: string; // e.g. "ed25519:..."
}
// ===============================================
// Permission can be either FullAccess or FunctionCall
type AccessKeyPermission = FullAccessPermission | FunctionCallPermission;
interface FullAccessPermission {
  // When it's full access, NEAR returns: { permission: "FullAccess" }
  // Represented here as a discriminated union
  FullAccess: Record<string, never>;
}
interface FunctionCallPermission {
  FunctionCall: {
    // On NEAR RPC these large numeric strings are yoctoNEAR, so keep as string to avoid precision loss
    allowance?: string; // optional: sometimes not present
    method_names: string[];
    receiver_id: string;
  };
}
