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
    {#if $$slots.actions}
      <div class="actions">
        <slot name="actions" />
      </div>
    {/if}
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
    color: rgb(var(--m3-scheme-primary));
    background-color: rgb(var(--m3-scheme-primary-container));

    border-radius: 4px;
    border: 1px solid rgb(var(--m3-scheme-primary) / 0.7);

    width: 1.8rem;
    height: 1.8rem;
    
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .icon :global(svg) {
    width: 1.25rem;
    height: 1.25rem;
  }

  .actions {
    margin-top: 0.5rem;
  }

  .actions :global(span) {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .headline {
    font-size: 1.4rem;
    font-weight: 600;
  }
</style>