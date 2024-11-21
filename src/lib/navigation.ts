import { showUnsupportedPlatformModal } from "@stores";
import { openInNewTab } from "@utils";
import { getUserPlatform, SUPPORTED_PLATFORMS } from "./platforms";

function scrollTo(id: string) {
  const section = document.getElementById(id)!;
  const layout = document.getElementById("layout")!;

  const headerOffset = 64;

  // * This matches the same padding that's used on the side of the sections.
  const topPadding = 8;
  const elementPosition = section.getBoundingClientRect().top;
  
  const offsetPosition = elementPosition + layout.scrollTop - headerOffset - topPadding;

  layout.scrollTo({
    top: offsetPosition,
    behavior: "smooth"
  });
}

export const goToAbout = () => scrollTo("About");
export const goToFeatures = () => scrollTo("Features");
export const goToFAQ = () => scrollTo("FAQ");

export const goToGitHub = () => openInNewTab("https://github.com/Tormak9970/Svunes");


const downloadLinks = {
  "Windows": "https://github.com/Tormak9970/Svunes?tab=readme-ov-file#windows",
  "Linux": "https://github.com/Tormak9970/Svunes?tab=readme-ov-file#linux"
}

export function goToDownload() {
  const platform = getUserPlatform();

  if (!SUPPORTED_PLATFORMS.includes(platform)) {
    showUnsupportedPlatformModal.set(true);
    return;
  }
  
  // @ts-expect-error This will always work.
  openInNewTab(downloadLinks[platform]);
}