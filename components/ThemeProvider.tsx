"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { defaultThemeId, getTheme, themes, type Theme } from "@/lib/themes";
import { SiteBackground } from "./SiteBackground";

// Fixed appearance choices (background = floral pattern, names = Parisienne).
const NAME_FONT = "var(--font-parisienne)";

type ThemeContextValue = {
  theme: Theme;
  themeId: string;
  setThemeId: (id: string) => void;
  themes: Theme[];
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

const STORAGE_KEY = "wedding-theme";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [themeId, setThemeIdState] = useState(defaultThemeId);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved && themes.some((t) => t.id === saved)) {
      setThemeIdState(saved);
    }
  }, []);

  const setThemeId = useCallback((id: string) => {
    setThemeIdState(id);
    try {
      window.localStorage.setItem(STORAGE_KEY, id);
    } catch {
      // ignore (e.g. storage disabled)
    }
  }, []);

  const theme = useMemo(() => getTheme(themeId), [themeId]);

  const style = useMemo(
    () =>
      ({
        ...theme.tokens,
        "--font-names": NAME_FONT,
      }) as React.CSSProperties,
    [theme]
  );

  const value = useMemo(
    () => ({ theme, themeId, setThemeId, themes }),
    [theme, themeId, setThemeId]
  );

  return (
    <ThemeContext.Provider value={value}>
      <div
        className="theme-root"
        data-theme={theme.id}
        data-motif={theme.motif}
        data-namefont="parisienne"
        style={style}
      >
        <SiteBackground />
        <div className="relative z-10">{children}</div>
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
