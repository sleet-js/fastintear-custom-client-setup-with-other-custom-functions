<!--  -->
<!-- =========================================== -->
<!--  -->

<script lang="ts">
    import { onMount } from "svelte";
    import { NETWORK_STORAGE_KEY } from "../createNearClient";

    let NETWORK_ID: string = "mainnet";

    onMount(() => {
        // Initialize network ID from localStorage
        const savedNetwork = localStorage.getItem("network_id") || "mainnet";
        NETWORK_ID = savedNetwork;
    });

    function toggleNetwork() {
        const newNetwork = NETWORK_ID === "mainnet" ? "testnet" : "mainnet";
        NETWORK_ID = newNetwork;
        localStorage.setItem(NETWORK_STORAGE_KEY, newNetwork);
        console.info(newNetwork);
    }
</script>

<!--  -->
<!-- =========================================== -->
<!--  -->

<!-- NETWORK_BUTTON -->
<button on:click={toggleNetwork}>
    {NETWORK_ID.toUpperCase()}
</button>

<!--  -->
<!-- =========================================== -->
<!--  -->
