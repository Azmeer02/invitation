"use client";

type IconProps = { size?: number; className?: string };

const base = (size: number, className: string) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className,
  "aria-hidden": true,
});

// --- Event emblems ---------------------------------------------------------

export function MehndiIcon({ size = 26, className = "" }: IconProps) {
  // A paisley / henna leaf
  return (
    <svg {...base(size, className)}>
      <path d="M12 3c5 2 7 6 7 10a7 7 0 0 1-14 0c0-2 1-3 2.5-3S10 11 10 12.5" />
      <path d="M12 8c2 1 3 2.5 3 4.5a3 3 0 0 1-3 3" />
      <circle cx="12" cy="12.5" r="0.6" fill="currentColor" />
    </svg>
  );
}

export function BaraatIcon({ size = 26, className = "" }: IconProps) {
  // A crown
  return (
    <svg {...base(size, className)}>
      <path d="M4 17h16M5 17l-1.2-8 4.7 3.5L12 6l3.5 6.5L20.2 9 19 17" />
      <circle cx="3.8" cy="9" r="0.8" fill="currentColor" />
      <circle cx="20.2" cy="9" r="0.8" fill="currentColor" />
      <circle cx="12" cy="6" r="0.8" fill="currentColor" />
    </svg>
  );
}

export function ReceptionIcon({ size = 26, className = "" }: IconProps) {
  // Two toasting glasses
  return (
    <svg {...base(size, className)}>
      <path d="M7 3l2 6c.3 1-.4 2-1.5 2.2L6 11.5 4.5 11C3.4 10.8 2.9 9.7 3.3 8.7L5.5 3" />
      <path d="M6 11.5V20M3.5 20h5" />
      <path d="M17 3l-2 6c-.3 1 .4 2 1.5 2.2l1.5.3 1.5-.5c1.1-.2 1.6-1.3 1.2-2.3L18.5 3" />
      <path d="M18 11.5V20M15.5 20h5" />
    </svg>
  );
}

export function RingIcon({ size = 26, className = "" }: IconProps) {
  return (
    <svg {...base(size, className)}>
      <circle cx="9" cy="15" r="5" />
      <circle cx="15" cy="15" r="5" />
      <path d="M9 4l1.5 2h3L15 4l-1.5-1h-3z" />
    </svg>
  );
}

const EVENT_ICONS = {
  mehndi: MehndiIcon,
  baraat: BaraatIcon,
  reception: ReceptionIcon,
  ring: RingIcon,
};

export function EventEmblem({
  name,
  size,
  className,
}: {
  name: keyof typeof EVENT_ICONS;
  size?: number;
  className?: string;
}) {
  const Cmp = EVENT_ICONS[name] ?? RingIcon;
  return <Cmp size={size} className={className} />;
}

// --- Detail card icons -----------------------------------------------------

export function DressIcon({ size = 24, className = "" }: IconProps) {
  return (
    <svg {...base(size, className)}>
      <path d="M10 3l2 2 2-2M9 5l-1 4 4 2 4-2-1-4" />
      <path d="M8 9l-2 9h12l-2-9" />
    </svg>
  );
}

export function GiftIcon({ size = 24, className = "" }: IconProps) {
  return (
    <svg {...base(size, className)}>
      <path d="M4 11h16v9H4zM4 8h16v3H4zM12 8v12" />
      <path d="M12 8S10.5 4 8.5 4 6 7 12 8c6 1 3.5-4 1.5-4S12 8 12 8z" />
    </svg>
  );
}

export function ClockIcon({ size = 24, className = "" }: IconProps) {
  return (
    <svg {...base(size, className)}>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4l3 2" />
    </svg>
  );
}

export function CarIcon({ size = 24, className = "" }: IconProps) {
  return (
    <svg {...base(size, className)}>
      <path d="M3 13l2-5h14l2 5M3 13h18v4H3zM6 17v2M18 17v2" />
      <circle cx="7" cy="15" r="1" fill="currentColor" stroke="none" />
      <circle cx="17" cy="15" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function CalendarIcon({ size = 16, className = "" }: IconProps) {
  return (
    <svg {...base(size, className)}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 9h18M8 3v4M16 3v4" />
    </svg>
  );
}

const DETAIL_ICONS = {
  dress: DressIcon,
  gift: GiftIcon,
  clock: ClockIcon,
  car: CarIcon,
};

export function DetailIcon({
  name,
  size,
  className,
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const Cmp = DETAIL_ICONS[name as keyof typeof DETAIL_ICONS] ?? GiftIcon;
  return <Cmp size={size} className={className} />;
}
