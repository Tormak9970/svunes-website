import { writable } from "svelte/store";

export const showSidebar = writable(false);

export const showUnsupportedPlatformModal = writable(false);