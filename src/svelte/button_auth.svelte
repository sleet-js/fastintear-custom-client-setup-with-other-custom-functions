<!--  -->
<!-- =========================================== -->
<!--  -->

<script lang="ts">
    import { onMount } from "svelte";
    import { nearClient } from "../createNearClient";

    let isSignedIn: boolean = false;
    let accountId: string | null = null;

    async function updateAuthStatus() {
        const status = nearClient().authStatus();
        isSignedIn = status === "SignedIn";
        accountId = isSignedIn ? nearClient().accountId() : null;
    }

    async function handleLogin() {
        try {
            await nearClient().requestSignIn();
            await updateAuthStatus();
        } catch (error) {
            console.error("Login failed:", error);
        }
    }

    async function handleLogout() {
        try {
            await nearClient().signOut();
            await updateAuthStatus();
        } catch (error) {
            console.error("Logout failed:", error);
        }
    }

    onMount(async () => {
        await updateAuthStatus();
    });
</script>

<!--  -->
<!-- =========================================== -->
<!--  -->

<!-- AUTH_BUTTON -->
{#if isSignedIn}
    <button on:click={handleLogout}>
        LOGOUT {accountId}
    </button>
{:else}
    <button on:click={handleLogin}> LOGIN </button>
{/if}

<!--  -->
<!-- =========================================== -->
<!--  -->
