<script lang="ts">
  import { Background } from "@layout";
  import { Header } from "@navigation";
  import Content from "./components/Content.svelte";
  import Footer from "./components/navigation/Footer.svelte";

</script>

<main>
  <div class="background">
    <Background />
  </div>
  <div class="layout">
    <Header />
    <Content />
    <Footer />
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

  .layout {
    z-index: 2;
    
    width: 100%;
    height: 100%;
  }
</style>
