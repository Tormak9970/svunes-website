<script lang="ts">
  import { Icon } from "@component-utils";
  import type { IconifyIcon } from "@iconify/types";
  import { Card } from "@layout";

  export let icon: IconifyIcon;
  export let title: string;
  export let id: string = "";
</script>

<div id={id !== "" ? id : undefined} class="section">
  <Card type="elevated">
    <div class="section-header">
      <div class="icon">
        <Icon icon={icon} />
      </div>
      <div class="headline">{title}</div>
    </div>
    <div class="section-body">
      <slot />
    </div>
  </Card>
</div>

<style>
  .section {
    width: calc(100% - 2rem);
    max-width: 60rem;
  }

  .section-header {
    width: 100%;

    display: flex;
    align-items: center;

    margin-bottom: 0.5rem;

    gap: 0.5rem;
  }

  .section-body {
    width: 100%;
  }

  .icon {
    color: rgb(var(--m3-scheme-primary-container));
  }

  .icon :global(svg) {
    width: 1.25rem;
    height: 1.25rem;
  }

  .headline {
    font-size: 1.4rem;
    font-weight: 600;
  }
</style>