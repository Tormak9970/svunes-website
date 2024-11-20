export * from "./animations/animations";
export * from "./animations/easing";

export function openInNewTab(href: string) {
  const anchor = document.createElement("a");
  anchor.href = href;
  anchor.target = "_blank";
  anchor.rel = "noopenner";

  anchor.click();

  anchor.remove();
}

