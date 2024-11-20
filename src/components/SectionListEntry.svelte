<script lang="ts">
  import { Icon } from "@component-utils";
  import type { IconifyIcon } from "@iconify/types";

  export let icon: IconifyIcon;
</script>

<div class="section-list-entry">
  <Icon icon={icon} />
  <div class="description">
    <slot />
  </div>
</div>

<style>
  .section-list-entry {
    display: flex;
    align-items: center;

    padding-left: 0.4rem;
    gap: 0.5rem;
  }

  .section-list-entry :global(svg) {
    color: rgb(var(--m3-scheme-tertiary));
  }
</style>