<script lang="ts">
  import { showUnsupportedPlatformModal } from "@stores";
  import UnsupportedPlatform from "./UnsupportedPlatform.svelte";

</script>

{#if $showUnsupportedPlatformModal}
  <UnsupportedPlatform />
{/if}