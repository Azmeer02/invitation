// =============================================================================
// WEDDING CONTENT — single source of truth.
// Edit the values below to personalise the whole website. Nothing else needs
// to change. Placeholders are wrapped in clear brackets so they are easy to spot.
// =============================================================================

export type EventIcon = "mehndi" | "baraat" | "reception" | "ring";

export type WeddingEvent = {
  id: string;
  title: string;
  subtitle?: string;
  /** ISO date — `YYYY-MM-DD`. */
  date: string;
  /** Display strings, e.g. "4:00 PM". */
  startTime: string;
  endTime: string;
  venueName: string;
  /** Free-text query used to build the Google Maps embed + directions link. */
  mapQuery: string;
  /** Emblem shown on the card + timeline. */
  icon: EventIcon;
  /** Optional dress code / colour theme for this function. */
  dress?: string;
};

export type RsvpContact = {
  name: string;
  /** Use full international format for best results, e.g. +923212304365 */
  phone: string;
  whatsapp: string;
};

export const couple = {
  groom: "Syed Bazil Haider", // the elder brother
  groomFather: "S/o Syed Tariq Haider", // the elder brother's father
  bride: "Rimsha Naz",
  brideFather: "D/o Syed Zahid Sultan Shah", // the bride's father
  /** Shown small above the names in the hero. */
  intro: "Together with their families, request the honour of your presence at the wedding of",
  hashtag: "#BazilWedsRimsha",
};

/** Opening invocation / formal invitation line (common on the invite). */
export const invocation = {
  enabled: true,
  arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
  translation: "In the name of Allah, the Most Gracious, the Most Merciful",
  message:
    "With profound joy and gratitude, we invite you to share in the blessings " +
    "and celebrations as two souls and two families are united in marriage.",
};

export const story = {
  enabled: true,
  heading: "A New Beginning",
  body:
    "Two families, one beautiful journey. We would be honoured to have you " +
    "share in the joy and blessings of these special days as we begin our " +
    "life together. Your presence is the greatest gift of all.",
};

export const events: WeddingEvent[] = [
  {
    id: "nikkah-mehndi",
    title: "Nikkah & Mehndi",
    subtitle: "The sacred vows & the night of colour",
    date: "2027-01-13",
    startTime: "4:00 PM",
    endTime: "11:00 PM",
    venueName: "Mehran Farmhouse",
    mapQuery: "Mehran Farmhouse, Karachi",
    icon: "mehndi",
    dress: "Festive yellows & greens",
  },
  {
    id: "baraat",
    title: "Baraat",
    subtitle: "The grand wedding procession",
    date: "2027-01-15",
    startTime: "9:00 PM",
    endTime: "11:30 PM",
    venueName: "[Venue Name]",
    mapQuery: "[Venue Name, City]",
    icon: "baraat",
    dress: "Traditional formal attire",
  },
  {
    id: "reception",
    title: "Reception",
    subtitle: "A celebration luncheon",
    date: "2027-01-17",
    startTime: "1:00 PM",
    endTime: "4:00 PM",
    venueName: "Parsa Banquet",
    mapQuery: "Parsa Banquet, Karachi",
    icon: "reception",
    dress: "Elegant formal wear",
  },
];

/** The hero countdown ticks down to this moment (first event by default). */
export const countdownTargetISO = "2027-01-13T16:00:00";

/** "Good to know" cards. Toggle the whole section or edit/remove any card. */
export const details = {
  enabled: true,
  heading: "Good to Know",
  note: "A few details to help you plan for the celebrations.",
  cards: [
    {
      icon: "dress",
      title: "Dress Code",
      body: "Traditional & formal attire. Each function has its own colour theme — feel free to dress festively.",
    },
    {
      icon: "gift",
      title: "Your Blessings",
      body: "Your presence and prayers are the greatest gift. No gifts are expected.",
    },
    {
      icon: "clock",
      title: "Timings",
      body: "Kindly arrive on time so you don't miss any of the special moments and rituals.",
    },
    {
      icon: "car",
      title: "Parking",
      body: "Parking is available at each venue. Carpooling with family is encouraged.",
    },
  ],
};

/** Closing blessing shown just before the footer. */
export const closing = {
  enabled: true,
  quote:
    "“And among His signs is that He created for you mates from among yourselves, " +
    "that you may dwell in tranquillity with them, and He has put love and mercy " +
    "between your hearts.”",
  source: "— Surah Ar-Rum (30:21)",
};

export const rsvp = {
  heading: "Kindly RSVP",
  note: "Your blessings and presence mean the world to us. Please let us know if you can make it.",
  contacts: [
    {
      name: "Syed Azmeer Haider",
      phone: "0321-2304365",
      whatsapp: "0321-2304365",
    },
    {
      name: "Syed Tariq Haider",
      phone: "0335-2434457",
      whatsapp: "0335-2434457",
    },
  ] as RsvpContact[],
};

export const site = {
  title: "Syed Bazil Haider & Rimsha Naz — Wedding Invitation",
  description:
    "You are cordially invited to celebrate the wedding of Syed Bazil Haider & Rimsha Naz, January 2027.",
};
