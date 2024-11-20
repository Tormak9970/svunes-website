<script lang="ts">
  import { Icon } from "@component-utils";
  import { Bug, CheckList, ContactSupport, MusicNote, Palette, Star } from "@icons";
  import { Button } from "@interactables";
  import { goToDownload, goToGitHub } from "@site-navigation";
  import { openInNewTab } from "@utils";
  import Section from "./Section.svelte";

  const BUG_REPORT_URL = "https://github.com/Tormak9970/Svunes/issues/new?assignees=Tormak9970&labels=bug&projects=&template=bug_report.md&title=";
  const FEATURE_REQUEST_URL = "https://github.com/Tormak9970/Svunes/issues/new?assignees=Tormak9970&labels=enhancement&projects=&template=feature_request.md&title=";

  let starCount = 12;

  async function getRepoData() {
    fetch("https://api.github.com/repos/Tormak9970/Svunes").then(async (res) => {
      const data = await res.json();
      starCount = data.stargazers_count;
    });
  }

  getRepoData();
</script>

<div id="content">
  <div class="title-field">
    <img src="/logo.svg" alt="Svunes Logo">
    <div class="title">Svunes</div>
    <div>A robust, offline first music player and tag editor</div>
    <Button type="tonal" on:click={goToDownload}>Download</Button>
    <div class="stats">
      <Button type="text" iconType="left" on:click={goToGitHub}>
        <Icon icon={Star} />
        {starCount}
      </Button>
    </div>
  </div>
  <div class="sections">
    <Section icon={MusicNote} id="About" title="About">
      Svunes is an offline first music player with a wide variety of features and personalization options. Built with <a href="https://svelte.dev/" target="_blank" rel="noopenner">Svelte</a> and <a href="https://tauri.app/" target="_blank" rel="noopenner">Tauri</a>, 
      the app has a sleek interface and has a heavy focus on security and performance. Svunes is fully open source, so you can dig into how it works <a href="https://github.com/Tormak9970/Svunes" target="_blank" rel="noopenner">here</a>.
      <span slot="actions">
        <Button type="tertiary" iconType="left" on:click={() => openInNewTab(BUG_REPORT_URL)}>
          <Icon icon={Bug} />
          Report a Bug
        </Button>
      </span>
    </Section>
    <Section icon={CheckList} id="Features" title="Features">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores excepturi natus officiis quibusdam facere similique culpa commodi doloribus? Beatae, alias eligendi hic explicabo fuga perferendis iusto recusandae illo quas id odio. Perferendis, reprehenderit repellendus. Ex facilis vel dicta nobis maxime.
    </Section>
    <Section icon={Palette} title="Personalization Options">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores excepturi natus officiis quibusdam facere similique culpa commodi doloribus? Beatae, alias eligendi hic explicabo fuga perferendis iusto recusandae illo quas id odio. Perferendis, reprehenderit repellendus. Ex facilis vel dicta nobis maxime.
    </Section>
    <Section icon={ContactSupport} id="FAQ" title="Common Questions">
      <div class="question">Are metrics reported / tracked?</div>
      <div class="answer">No, everything stays on your device. The only tracking the app does is when songs have been played. This can be disabled in settings if you don't like it.</div>

      <br />

      <div class="question">This is an offline music player, why does it need wifi for some features?</div>
      <div class="answer">The Album Info and Cover lookup require internet by nature, and are useful when trying to edit albums/songs.</div>
    </Section>
  </div>
</div>

<style>
  #content {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .title-field {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 1rem;

    padding-top: 1.5rem;
    margin-bottom: 2.5rem;
  }

  .title-field img {
    max-width: 12rem;
  }
  
  .title {
    font-size: 2.15rem;
    font-weight: bold;
  }

  .sections {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 1rem;

    padding-bottom: 1rem;
  }

  a {
    color: rgb(var(--m3-scheme-primary));
  }

  a:hover,
  a:visited {
    color: rgb(var(--m3-scheme-primary));
    text-decoration: underline;
  }

  a:focus {
    color: rgb(var(--m3-scheme-primary) / 0.8);
    text-decoration: underline;
  }

  .question {
    font-weight: bold;
    font-size: 1.15rem;
  }

  .answer {
    margin-top: 0.25rem;
  }
</style>