"use client";

import { couple } from "@/data/wedding";
import { Flourish } from "./Ornaments";

export function Footer() {
  return (
    <footer
      className="relative border-t px-6 py-14 text-center"
      style={{ borderColor: "var(--line)" }}
    >
      <Flourish className="mb-6" />
      <p
        className="font-names text-4xl gold-text"
        style={{ lineHeight: 1.3 }}
      >
        Save the Date
      </p>
      <p
        className="mt-4 font-body text-sm tracking-[0.2em]"
        style={{ color: "var(--muted)" }}
      >
        With love &amp; gratitude · {couple.hashtag}
      </p>
      <p
        className="mt-6 font-body text-xs"
        style={{ color: "var(--muted)" }}
      >
        We can&apos;t wait to celebrate with you.
      </p>
    </footer>
  );
}
