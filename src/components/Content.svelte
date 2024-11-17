<script lang="ts">
    import { CheckList, MusicNote } from "@icons";
    import Section from "./Section.svelte";


</script>

<div id="content">
  <div class="title-field">
    <div class="logo">

    </div>
    <div class="title">

    </div>
    <div class="description">

    </div>
  </div>
  <div class="sections">
    <Section icon={MusicNote} id="About" title="About">
      Test
    </Section>
    <Section icon={CheckList} id="Features" title="Features">
      Test
    </Section>
    <Section icon={MusicNote} id="FAQ" title="Common Questions">
      Test
    </Section>
  </div>
</div>

<style>
  #content {
    padding-top: 4rem;

    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .sections {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 1rem;
  }
</style>