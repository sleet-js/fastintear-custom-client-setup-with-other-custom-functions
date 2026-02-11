# fastintear-custom-client-setup-with-other-custom-functions

A custom fastintear NEAR client setup and functions for interacting with common smart contracts to assist in dapp development.

ℹ️ Expected for use in browser environment  
ℹ️ Developed for internal use and I don't have time to document everything  
ℹ️ No error handling  
ℹ️ Not an exhaustive list of functions, but I can add based on request

---

## Publishing with Bun

This package uses modern TypeScript publishing with Bun. Here's how to develop and publish:

```bash
bun install                    # Install dependencies
bun run build                  # Build the package (compile TypeScript to JavaScript)
bun publish --dry-run          # Test publish without actually publishing
bunx npm login                 # Login to npm (first time only)
bun publish --access public    # Publish to npm registry
```

---

### Features

- Dynamic network support
- TypeScript support with type declarations
- Svelte auth and network button components
- Modern ES module support

---

### Installation


```bash
bun add @sleet-js/fastintear-custom-client-setup-with-other-custom-functions
npm install @sleet-js/fastintear-custom-client-setup-with-other-custom-functions
```

---

### Usage

Import the NEAR client:

```js
import { nearClient } from "@sleet-js/fastintear-custom-client-setup-with-other-custom-functions";
```

Use Svelte components:

```svelte
<script>
  import NETWORK_BUTTON from "@sleet-js/fastintear-custom-client-setup-with-other-custom-functions/button_network_toggle.svelte";
  import AUTH_BUTTON from "@sleet-js/fastintear-custom-client-setup-with-other-custom-functions/button_auth.svelte";
</script>

<AUTH_BUTTON />
<NETWORK_BUTTON />
```

---

### Development

This package uses:

- TypeScript for type safety
- Bun for fast builds and package management
- Modern ESNext features
- Svelte components for UI elements

The package is compiled to both JavaScript and type declaration files for optimal compatibility with different build systems and TypeScript projects.

---

This project was created using `bun init` in bun v1.2.12. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

Copyright 2025 by sleet.near
