<script lang="ts">
  import { Icon } from "@component-utils";
  import { CheckList, ContactSupport, MusicNote, Star } from "@icons";
  import { Button } from "@interactables";
  import { goToDownload, goToGitHub } from "@site-navigation";
  import Section from "./Section.svelte";

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
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis fugit dolor accusantium quibusdam magnam explicabo alias culpa laborum nulla vel libero cumque, asperiores vitae rem fuga delectus assumenda unde aspernatur et laboriosam nemo officia iusto necessitatibus? Nisi eius eveniet sint.
    </Section>
    <Section icon={CheckList} id="Features" title="Features">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores excepturi natus officiis quibusdam facere similique culpa commodi doloribus? Beatae, alias eligendi hic explicabo fuga perferendis iusto recusandae illo quas id odio. Perferendis, reprehenderit repellendus. Ex facilis vel dicta nobis maxime.
    </Section>
    <Section icon={ContactSupport} id="FAQ" title="Common Questions">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi deleniti quas esse omnis incidunt velit voluptates commodi molestiae. Porro corrupti soluta autem modi officia velit voluptate repellendus doloribus qui vero! Aperiam, distinctio! Minima ullam sapiente et saepe earum? Voluptatum, ut!
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
</style>