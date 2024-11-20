import { openInNewTab } from "@utils";

function scrollTo(id: string) {
  const section = document.getElementById(id)!;
  section.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

export const goToAbout = () => scrollTo("About");
export const goToFeatures = () => scrollTo("Features");
export const goToFAQ = () => scrollTo("FAQ");

export const goToGitHub = () => openInNewTab("https://github.com/Tormak9970/Svunes");

export function goToDownload() {
  
}