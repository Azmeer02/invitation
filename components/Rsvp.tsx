"use client";

import { rsvp, type RsvpContact } from "@/data/wedding";
import { Reveal } from "./Reveal";
import { Flourish } from "./Ornaments";

export function Rsvp() {
  return (
    <section id="rsvp" className="px-6 py-16 sm:py-24">
      <Reveal
        className="mx-auto max-w-2xl rounded-3xl border px-6 py-12 text-center sm:px-12"
        style={{ background: "var(--surface)", borderColor: "var(--line)" }}
      >
        <p
          className="font-body text-[11px] uppercase tracking-[0.3em]"
          style={{ color: "var(--muted)" }}
        >
          We hope to see you
        </p>
        <h2
          className="mt-3 font-display text-4xl sm:text-5xl"
          style={{ color: "var(--heading)" }}
        >
          {rsvp.heading}
        </h2>
        <Flourish className="mt-5" />
        <p
          className="mx-auto mt-5 max-w-md font-body text-base leading-relaxed"
          style={{ color: "var(--muted)" }}
        >
          {rsvp.note}
        </p>

        <ul className="mt-9 grid gap-4 sm:grid-cols-2">
          {rsvp.contacts.map((contact, i) => (
            <ContactCard key={i} contact={contact} />
          ))}
        </ul>
      </Reveal>
    </section>
  );
}

function ContactCard({ contact }: { contact: RsvpContact }) {
  const telHref = `tel:${contact.phone.replace(/\s+/g, "")}`;
  const waHref = `https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, "")}`;

  return (
    <li
      className="flex flex-col items-center gap-3 rounded-2xl border px-5 py-6"
      style={{
        borderColor: "var(--line)",
        background: "color-mix(in srgb, var(--bg-2) 40%, transparent)",
      }}
    >
      <p
        className="font-display text-xl"
        style={{ color: "var(--heading)" }}
      >
        {contact.name}
      </p>
      <p className="font-body text-base" style={{ color: "var(--muted)" }}>
        {contact.phone}
      </p>
      <div className="mt-1 flex gap-2">
        <a
          href={telHref}
          className="inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-2 font-body text-xs font-medium transition-transform hover:scale-[1.04]"
          style={{ background: "var(--primary)", color: "var(--surface)" }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .5 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.5-1 1-1h3.4c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.3 1l-2.1 2.3Z" />
          </svg>
          Call
        </a>
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1.5 rounded-full border px-4 py-2 font-body text-xs font-medium transition-transform hover:scale-[1.04]"
          style={{ borderColor: "var(--primary)", color: "var(--primary)" }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .1-1.7-.1-.4-.1-.9-.3-1.6-.6-2.8-1.2-4.6-4-4.7-4.2-.2-.2-1.2-1.6-1.2-3 0-1.4.7-2.1 1-2.4.2-.3.5-.4.7-.4h.5c.2 0 .4 0 .6.5l.8 1.9c.1.2.1.4 0 .5l-.4.6c-.2.2-.3.4-.1.7.2.3.9 1.4 1.9 2.3 1.3 1.1 2.3 1.4 2.6 1.6.3.1.5.1.7-.1l.7-.9c.2-.3.4-.2.7-.1l1.8.9c.2.1.4.2.5.3.1.2.1.7-.1 1.4Z" />
          </svg>
          WhatsApp
        </a>
      </div>
    </li>
  );
}
