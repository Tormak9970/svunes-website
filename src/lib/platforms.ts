export enum Platform {
  WINDOWS = "Windows",
  LINUX = "Linux",
  MACOS = "MacOS",
  IOS = "iOS",
  ANDROID = "Android",
  CHROMEOS = "Chrome OS",
  UNKOWN = "Unkown"
}

export const SUPPORTED_PLATFORMS = [Platform.WINDOWS, Platform.LINUX];
export const PLANNED_SUPPORTED_PLATFORMS = [Platform.MACOS, Platform.IOS, Platform.ANDROID];
export const UNSUPPORTED_PLATFORMS = [Platform.CHROMEOS, Platform.UNKOWN];

export function getUserPlatform(): Platform {
  const userAgent = navigator.userAgent;

  if (userAgent.includes("iPhone") || userAgent.includes("iPad") || userAgent.includes("iPod")) {
    return Platform.IOS;
  } else if (userAgent.includes("Macintosh") || userAgent.includes("Mac OS X")) {
    return Platform.MACOS;
  } else if (userAgent.includes("Android")) {
    return Platform.ANDROID;
  } else if (userAgent.includes("Windows NT")) {
    return Platform.WINDOWS;
  } else if (userAgent.includes("Linux") || userAgent.includes("X11")) {
    return Platform.LINUX;
  } else if (userAgent.includes("CrOS")) {
    return Platform.CHROMEOS;
  } else {
    return Platform.UNKOWN;
  }
}