<!--  -->
<!-- =========================================== -->
<!--  -->

<script lang="ts">
    import { onMount } from "svelte";
    import {
        isSignedIn,
        accountId,
        auth_update_authStatus_fun,
        auth_handleLogin,
        auth_handleLogout,
    } from "../index";
    // ==================
    onMount(async () => {
        await auth_update_authStatus_fun();
    });
</script>

<!--  -->
<!-- =========================================== -->
<!--  -->

<!-- AUTH_BUTTON -->
{#if isSignedIn}
    <button on:click={auth_handleLogout}>
        LOGOUT {accountId}
    </button>
{:else}
    <button on:click={auth_handleLogin}> LOGIN </button>
{/if}

<!--  -->
<!-- =========================================== -->
<!--  -->
