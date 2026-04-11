/** FAQ content: `answerText` is used for JSON-LD and must match visible copy. */
export type FaqAccent = "blue" | "purple" | "indigo";

export interface FaqEntry {
  question: string;
  answerText: string;
  /** Trusted HTML (same meaning as answerText). */
  answerHtml: string;
  accent: FaqAccent;
}

export const FAQ_ENTRIES: FaqEntry[] = [
  {
    question: "Do you have a support Discord?",
    answerText: "Join our Discord server",
    answerHtml:
      '<a href="https://discord.gg/TnhxcqynZ2" class="text-blue-400 hover:text-blue-300 transition-colors hover:underline">Join our Discord server</a>',
    accent: "blue",
  },
  {
    question: "Will I get banned for using this?",
    answerText:
      "You are breaking Discord ToS by using Legcord, but no one has been banned from using it or any of the client mods included.",
    answerHtml:
      "You are breaking <a href='https://discord.com/terms#software-in-discord%E2%80%99s-services' class='text-blue-400 hover:text-blue-300 transition-colors hover:underline'>Discord ToS</a> by using Legcord, but no one has been banned from using it or any of the client mods included.",
    accent: "blue",
  },
  {
    question: "Can I use this on anything other than AArch64?",
    answerText:
      "Yes! Legcord should work normally under Windows, macOS, and Linux as long as it has Electron support.",
    answerHtml:
      "Yes! Legcord should work normally under Windows, macOS, and Linux as long as it has Electron support.",
    accent: "blue",
  },
  {
    question: "How can I access the settings?",
    answerText:
      "There should be a Settings button in your Discord settings with Legcord settings. Alternatively you can open Legcord settings from the tray icon.",
    answerHtml:
      'There should be a <strong class="text-white">Settings</strong> button in your Discord settings with Legcord settings. Alternatively you can open Legcord settings from the tray icon.',
    accent: "blue",
  },
  {
    question: "How does this work?",
    answerText:
      "We utilize the official Discord web app and package it within Electron. While this approach may seem familiar, our focus is on delivering a truly customized and enhanced experience. Unlike many others, we provide seamless integration for loading themes and mods without the need for installers or injectors. You can easily enable transparency effects and adopt Windows' Fluent Design, offering a modern and sleek interface. Though it's fundamentally a web wrapper, we have implemented numerous optimizations and patches to ensure a smooth and tailored experience for you.",
    answerHtml:
      "We utilize the official Discord web app and package it within Electron. While this approach may seem familiar, our focus is on delivering a truly customized and enhanced experience. Unlike many others, we provide seamless integration for loading themes and mods without the need for installers or injectors. You can easily enable transparency effects and adopt Windows' Fluent Design, offering a modern and sleek interface. Though it's fundamentally a web wrapper, we have implemented numerous optimizations and patches to ensure a smooth and tailored experience for you.",
    accent: "blue",
  },
  {
    question: "Can Legcord block YouTube ads?",
    answerText: "Yes, Legcord by default blocks YouTube ads found in embeds and WatchTogether!",
    answerHtml:
      "Yes, Legcord by default blocks YouTube ads found in embeds and WatchTogether!",
    accent: "purple",
  },
  {
    question: "Can I stream screenshare audio with it?",
    answerText:
      "Legcord only supports screensharing audio on Windows and Linux. Linux requires you to have either PulseAudio installed or PipeWire.",
    answerHtml:
      'Legcord only supports screensharing audio on Windows and <strong class="text-white">Linux</strong>. Linux requires you to have either PulseAudio installed or PipeWire.',
    accent: "blue",
  },
  {
    question: "Where can I find the source code?",
    answerText: "The source code is on GitHub.",
    answerHtml:
      'The source code is on <a href="https://github.com/Legcord/Legcord/" class="text-blue-400 hover:text-blue-300 transition-colors hover:underline">GitHub</a>.',
    accent: "indigo",
  },
  {
    question: "Where can I translate this?",
    answerText: "Translations are done using our Weblate page.",
    answerHtml:
      'Translations are done using our <a href="https://hosted.weblate.org/projects/legcord/legcord/" class="text-blue-400 hover:text-blue-300 transition-colors hover:underline">Weblate page</a>.',
    accent: "purple",
  },
  {
    question: "Does Legcord have a privacy policy?",
    answerText: "You can view it here.",
    answerHtml:
      'You can view it <button type="button" id="privacy-btn" class="text-blue-400 hover:text-blue-300 transition-colors hover:underline cursor-pointer bg-transparent border-none p-0">here</button>.',
    accent: "blue",
  },
  {
    question: "How do I update Legcord?",
    answerText:
      "Legcord can check for updates automatically. You'll see a notification when a new version is available—click it to download and install. You can also grab the latest build from the download page or GitHub releases.",
    answerHtml:
      'Legcord can check for updates automatically. You\'ll see a notification when a new version is available—click it to download and install. You can also grab the latest build from the <a href="/download" class="text-blue-400 hover:text-blue-300 transition-colors hover:underline">download page</a> or <a href="https://github.com/Legcord/Legcord/releases" class="text-blue-400 hover:text-blue-300 transition-colors hover:underline">GitHub releases</a>.',
    accent: "purple",
  },
  {
    question: "How do I uninstall Legcord?",
    answerText:
      "Remove it like any other app: use your system's uninstaller (e.g. Settings → Apps on Windows, or drag to Trash on macOS). Your Discord account and data are unchanged—they're tied to your account, not the client.",
    answerHtml:
      "Remove it like any other app: use your system's uninstaller (e.g. Settings → Apps on Windows, or drag to Trash on macOS). Your Discord account and data are unchanged—they're tied to your account, not the client.",
    accent: "blue",
  },
  {
    question: "What's the difference between Shelter and Vencord?",
    answerText:
      "Both are client mods (plugins) you can use with Legcord. Shelter comes pre-installed with Legcord and is lightweight. Vencord is togglable in Legcord settings and offers a large plugin ecosystem. You can enable one or the other (or neither) in Legcord settings. See the Plugins page for links.",
    answerHtml:
      'Both are client mods (plugins) you can use with Legcord. <strong class="text-white">Shelter</strong> comes pre-installed with Legcord and is lightweight. <strong class="text-white">Vencord</strong> is togglable in Legcord settings and offers a large plugin ecosystem. You can enable one or the other (or neither) in Legcord settings. See the <a href="/plugins" class="text-blue-400 hover:text-blue-300 transition-colors hover:underline">Plugins page</a> for links.',
    accent: "indigo",
  },
  {
    question: "Does Legcord work on Steam Deck / Raspberry Pi?",
    answerText:
      "Legcord supports Linux on x64 and AArch64. On Steam Deck (Arch-based), you can install the Linux build if Electron is supported. On Raspberry Pi and other ARM devices, the AArch64 Linux build should work on compatible distros.",
    answerHtml:
      'Legcord supports Linux on x64 and AArch64. On <strong class="text-white">Steam Deck</strong> (Arch-based), you can install the Linux build if Electron is supported. On <strong class="text-white">Raspberry Pi</strong> and other ARM devices, the AArch64 Linux build should work on compatible distros.',
    accent: "purple",
  },
];
