<script lang="ts">
  import { ModalBody } from "@component-utils";
  import { Button } from "@interactables";
  import { getUserPlatform, PLANNED_SUPPORTED_PLATFORMS } from "@platforms";
  import { showUnsupportedPlatformModal } from "@stores";

  const PLATFORM_REQUEST_URL = "https://github.com/Tormak9970/Svunes/issues/new?assignees=Tormak9970&labels=platform+support&projects=&template=platform_request.md&title=Add+Support+for+%7BPLATFORM%7D";

  let open = true;

  const userPlatform = getUserPlatform();
  const isPlanned = PLANNED_SUPPORTED_PLATFORMS.includes(userPlatform);

  function onConfirm() {
    open = false;
  }
</script>

<ModalBody headline={"Unsupported Platform"} open={open} on:closeEnd={() => { $showUnsupportedPlatformModal = false }}>
  <div class="content">
    {#if isPlanned}
      Support for {userPlatform} is in the works, but not quite ready yet.
    {:else}
      Support for {userPlatform} is not currently planned, but if you would like to see supported added for it, please open a platform request <a href={PLATFORM_REQUEST_URL} target="_blank" rel="noopenner">here</a>
    {/if}
  </div>
  <div slot="buttons" class="buttons">
    <Button type="text" on:click={onConfirm}>Ok</Button>
  </div>
</ModalBody>

<style>
  .content {
    max-width: 300px;
  }

  .buttons {
    display: flex;
    align-items: center;
    gap: 20px;
  }
</style>
