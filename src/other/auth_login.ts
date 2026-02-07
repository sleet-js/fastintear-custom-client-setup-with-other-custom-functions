import { nearClient } from "../createNearClient";
// ==============================================
export let isSignedIn: boolean = false;
export let accountId: string | null = null;
// ==============================================
export async function auth_update_authStatus_fun() {
    const status = nearClient().authStatus();
    isSignedIn = status === "SignedIn";
    accountId = isSignedIn ? nearClient().accountId() : null;
}
// ==============================================
export async function auth_handleLogin() {
    try {
        await nearClient().requestSignIn();
        await auth_update_authStatus_fun();
    } catch (error) {
        console.error("Login failed:", error);
    }
}
// ==============================================
export async function auth_handleLogout() {
    try {
        await nearClient().signOut();
        await auth_update_authStatus_fun();
    } catch (error) {
        console.error("Logout failed:", error);
    }
}
// ==============================================
// ==============================================
// copyright 2025 by sleet.near
