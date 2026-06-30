// =============================================================================
// THEME DEFINITIONS
// Each theme is a set of CSS-variable values applied to the page wrapper.
// Components never hard-code colours — they read these variables (see globals.css).
// To keep one theme after the user chooses: delete the others from `themes`
// and set `defaultThemeId` accordingly, then remove <ThemePicker />.
// =============================================================================

export type MotifKind = "floral" | "ornament" | "dots" | "shimmer";

export type Theme = {
  id: string;
  name: string;
  /** true for dark backgrounds — used to tint a few accents. */
  dark: boolean;
  motif: MotifKind;
  /** Small colour set used by the ThemePicker swatch preview. */
  swatch: { bg: string; primary: string; accent: string };
  /** CSS custom properties written onto the theme wrapper element. */
  tokens: Record<string, string>;
};

// Font CSS variables are declared in app/layout.tsx via next/font.
const FONT = {
  playfair: "var(--font-playfair)",
  cormorant: "var(--font-cormorant)",
  script: "var(--font-script)",
  jost: "var(--font-jost)",
  garamond: "var(--font-garamond)",
};

export const themes: Theme[] = [
  {
    id: "blush",
    name: "Blush & Gold",
    dark: false,
    motif: "floral",
    swatch: { bg: "#fbf4ef", primary: "#c06b73", accent: "#bd932f" },
    tokens: {
      "--bg": "#fbf4ef",
      "--bg-2": "#f2e1d6",
      "--surface": "#fffdfb",
      "--primary": "#c06b73",
      "--primary-soft": "#eccacd",
      "--accent": "#bd932f",
      "--text": "#5a4a48",
      "--heading": "#7a4f52",
      "--muted": "#9a8884",
      "--line": "#ead9cf",
      "--font-display": FONT.cormorant,
      "--font-script": FONT.script,
      "--font-body": FONT.jost,
    },
  },
  {
    id: "emerald",
    name: "Ivory & Emerald",
    dark: false,
    motif: "ornament",
    swatch: { bg: "#f5f4ec", primary: "#2f6e57", accent: "#b08d3f" },
    tokens: {
      "--bg": "#f5f4ec",
      "--bg-2": "#e6e9da",
      "--surface": "#ffffff",
      "--primary": "#2f6e57",
      "--primary-soft": "#cfe0d5",
      "--accent": "#b08d3f",
      "--text": "#3f4a42",
      "--heading": "#2c4a3b",
      "--muted": "#7d877e",
      "--line": "#dde2d4",
      "--font-display": FONT.cormorant,
      "--font-script": FONT.script,
      "--font-body": FONT.garamond,
    },
  },
  {
    id: "maroon",
    name: "Royal Maroon",
    dark: true,
    motif: "ornament",
    swatch: { bg: "#2a0e15", primary: "#e3b23c", accent: "#f0cf6b" },
    tokens: {
      "--bg": "#2a0e15",
      "--bg-2": "#1d080f",
      "--surface": "#3a1620",
      "--primary": "#e3b23c",
      "--primary-soft": "#5a2733",
      "--accent": "#f0cf6b",
      "--text": "#f0d9c9",
      "--heading": "#f7e6d3",
      "--muted": "#c9a9a6",
      "--line": "#4d2230",
      "--font-display": FONT.playfair,
      "--font-script": FONT.script,
      "--font-body": FONT.garamond,
    },
  },
  {
    id: "midnight",
    name: "Midnight & Rose Gold",
    dark: true,
    motif: "shimmer",
    swatch: { bg: "#121524", primary: "#e3b7a0", accent: "#d9a273" },
    tokens: {
      "--bg": "#121524",
      "--bg-2": "#0d1019",
      "--surface": "#1b2032",
      "--primary": "#e3b7a0",
      "--primary-soft": "#3a3346",
      "--accent": "#d9a273",
      "--text": "#e4ddea",
      "--heading": "#f2ecf3",
      "--muted": "#9fa3b8",
      "--line": "#2a3047",
      "--font-display": FONT.playfair,
      "--font-script": FONT.script,
      "--font-body": FONT.jost,
    },
  },
];

export const defaultThemeId = "blush";

export function getTheme(id: string): Theme {
  return themes.find((t) => t.id === id) ?? themes[0];
}
