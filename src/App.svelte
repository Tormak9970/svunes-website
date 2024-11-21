<script lang="ts">
  import { Background } from "@layout";
  import { Header } from "@navigation";
  import { showSidebar } from "@stores";
  import Content from "./components/Content.svelte";
  import Modals from "./components/modals/Modals.svelte";
  import Footer from "./components/navigation/Footer.svelte";
  import Sidebar from "./components/navigation/Sidebar.svelte";

</script>

<main>
  <div class="background">
    <Background />
  </div>
  <div id="layout" class="layout">
    <Header />
    {#if $showSidebar}
      <Sidebar />
    {/if}
    <Content />
    <Footer />
  </div>
  <Modals />
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

  .layout {
    position: relative;
    z-index: 2;
    
    width: 100%;
    height: 100%;

    overflow-y: auto;

    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
