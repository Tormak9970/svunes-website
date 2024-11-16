<script lang="ts">
  import Background from "./components/Background.svelte";

</script>

<main>
  <div class="background">
    <Background />
  </div>
  <div class="content">
    Svunes is Amazing
  </div>
</main>

<style>
  main {
    height: 100%;
    width: 100%;

    background-color: rgb(var(--m3-scheme-background));
    color: rgb(var(--m3-scheme-on-background));
  }

  .background {
    height: 100%;
    width: 100%;

    position: absolute;
    top: 0;

    z-index: 1;
  }

  .content {
    z-index: 2;
    
    width: 100%;
  }
</style>
