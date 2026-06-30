"use client";

import { useState } from "react";
import { useTheme } from "./ThemeProvider";

/**
 * Floating theme switcher so the themes can be previewed live. Once a theme is
 * chosen, this component can be removed and the others pruned from lib/themes.ts.
 */
export function ThemePicker() {
  const { themes, themeId, setThemeId } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 font-body">
      {open && (
        <div
          className="w-60 rounded-2xl border p-3 shadow-xl backdrop-blur"
          style={{
            background: "color-mix(in srgb, var(--surface) 92%, transparent)",
            borderColor: "var(--line)",
          }}
        >
          <p
            className="mb-2 px-1 text-[11px] uppercase tracking-[0.18em]"
            style={{ color: "var(--muted)" }}
          >
            Preview a theme
          </p>
          <ul className="flex flex-col gap-1">
            {themes.map((t) => {
              const active = t.id === themeId;
              return (
                <li key={t.id}>
                  <button
                    type="button"
                    onClick={() => setThemeId(t.id)}
                    className="flex w-full items-center gap-3 rounded-xl px-2.5 py-2 text-left text-sm transition-colors"
                    style={{
                      background: active ? "var(--primary-soft)" : "transparent",
                      color: "var(--text)",
                    }}
                  >
                    <span
                      className="flex h-6 w-6 shrink-0 overflow-hidden rounded-full border"
                      style={{ borderColor: "var(--line)" }}
                      aria-hidden
                    >
                      <span style={{ background: t.swatch.bg, width: "33%" }} />
                      <span style={{ background: t.swatch.primary, width: "34%" }} />
                      <span style={{ background: t.swatch.accent, width: "33%" }} />
                    </span>
                    <span className="flex-1">{t.name}</span>
                    {active && (
                      <span style={{ color: "var(--primary)" }} aria-hidden>
                        ✓
                      </span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label="Change theme"
        className="flex h-12 w-12 items-center justify-center rounded-full border shadow-lg transition-transform hover:scale-105"
        style={{
          background: "var(--surface)",
          borderColor: "var(--line)",
          color: "var(--primary)",
        }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M12 3a9 9 0 1 0 0 18c1.2 0 2-.9 2-1.9 0-.6-.3-1-.6-1.4-.3-.4-.5-.7-.5-1.2 0-.8.7-1.5 1.6-1.5H16a5 5 0 0 0 5-5C21 6.6 17 3 12 3Z"
            stroke="currentColor"
            strokeWidth="1.4"
          />
          <circle cx="7.5" cy="12" r="1.1" fill="currentColor" />
          <circle cx="10" cy="8" r="1.1" fill="currentColor" />
          <circle cx="15" cy="8" r="1.1" fill="currentColor" />
        </svg>
      </button>
    </div>
  );
}
