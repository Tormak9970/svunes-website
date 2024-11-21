<script lang="ts">
  import { Icon } from "@component-utils";
  import { Bedtime, BrightnessMedium, Bug, CheckList, ContactSupport, DarkMode, DashboardEdit, DirectionsCar, Edit, EditDocument, ExitToApp, Favorite, FolderOpen, Groups, History, Home, Imagesmode, LibraryMusic, MusicNote, Palette, PictureInPicture, PlayCircle, QueueMusic, Search, Star, TextRotationNone, TravelExplore, TrendingUp, Tune } from "@icons";
  import { Button } from "@interactables";
  import { goToDownload, goToGitHub } from "@site-navigation";
  import { openInNewTab } from "@utils";
  import Section from "./Section.svelte";
  import SectionListEntry from "./SectionListEntry.svelte";

  const BUG_REPORT_URL = "https://github.com/Tormak9970/Svunes/issues/new?assignees=Tormak9970&labels=bug&projects=&template=bug_report.md&title=";

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
      <div class="section-list">
        <SectionListEntry icon={Home}>Custom Home Page</SectionListEntry>
        <SectionListEntry icon={QueueMusic}>User Playlists</SectionListEntry>
        <SectionListEntry icon={ExitToApp}>Import / Export Playlists</SectionListEntry>
        <SectionListEntry icon={Favorite}>Favorites</SectionListEntry>
        <SectionListEntry icon={History}>History, Most Played, Recently Added</SectionListEntry>
        <SectionListEntry icon={TrendingUp}>Top Artists / Albums</SectionListEntry>
        <SectionListEntry icon={LibraryMusic}>Browse Albums, Artists, Songs, Genres</SectionListEntry>
        <SectionListEntry icon={Search}>Full Library Search</SectionListEntry>
        <SectionListEntry icon={DashboardEdit}>Custom Library Layouts / Sorting</SectionListEntry>
        <SectionListEntry icon={PlayCircle}>Now Playing Themes</SectionListEntry>
        <SectionListEntry icon={PictureInPicture}>Popout Player</SectionListEntry>
        <SectionListEntry icon={Edit}>Song / Album Tag Editing</SectionListEntry>
        <SectionListEntry icon={EditDocument}>Bulk Tag Editing</SectionListEntry>
        <SectionListEntry icon={TravelExplore}>Song / Album Metadata Lookup</SectionListEntry>
        <SectionListEntry icon={Imagesmode}>Cover Art Lookup</SectionListEntry>
        <SectionListEntry icon={TextRotationNone}>Filename Metadata Parsing</SectionListEntry>
        <SectionListEntry icon={FolderOpen}>Whitelist / Blacklist Folders</SectionListEntry>
        <SectionListEntry icon={Tune}>Filters Music by Length</SectionListEntry>
        <SectionListEntry icon={DirectionsCar}>Driving Mode</SectionListEntry>
        <SectionListEntry icon={Bedtime}>Sleep Timer</SectionListEntry>
      </div>
    </Section>
    <Section icon={Palette} title="Personalization Options">
      <div class="section-list">
        <SectionListEntry icon={Palette}>Full Dynamic Theming</SectionListEntry>
        <SectionListEntry icon={BrightnessMedium}>Light / Dark Mode</SectionListEntry>
        <SectionListEntry icon={DarkMode}>OLED Dark Theme</SectionListEntry>
        <SectionListEntry icon={LibraryMusic}>Custom Library Categories</SectionListEntry>
        <SectionListEntry icon={Groups}>User Profiles</SectionListEntry>
      </div>
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

  .section-list {
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .question {
    font-weight: bold;
    font-size: 1.15rem;
  }

  .answer {
    margin-top: 0.25rem;
  }
</style>