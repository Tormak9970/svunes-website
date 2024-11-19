<script lang="ts">
  import MusicNotes from "./MusicNotes.svelte";
</script>

<div id="background">
  <div id="left-circle"></div>
  <div id="right-circle"></div>
  <MusicNotes />
</div>

<style>
  #background {
    margin: 0;
    padding: 0;
    height: 100%;
    overflow: hidden;
    position: relative;
    z-index: 1;
  }

  #left-circle {
    position: absolute;
    top: 0%;
    left: -50%;
    width: 150vh;
    height: 150vh;
    opacity: .2;
    background: radial-gradient(circle, rgb(var(--m3-scheme-primary-container)) 0%, transparent 70%);
    z-index: 1;
  }

  #right-circle {
    position: absolute;
    top: -50%;
    left: 50%;
    width: 150vh;
    height: 150vh;
    opacity: .2;
    background: radial-gradient(circle, rgb(var(--m3-scheme-primary-container)) 0%, transparent 70%);
    z-index: 1;
  }

  :global(.music-note) {
    position: absolute;
    font-size: 24px;
    animation: float 10s linear infinite;
    opacity: 0.8;
    color: transparent;  
    text-shadow: 0 0 0 rgb(var(--m3-scheme-primary-container) / 0.6);
  }
</style>