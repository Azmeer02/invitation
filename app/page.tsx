import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemePicker } from "@/components/ThemePicker";
import { EnvelopeIntro } from "@/components/EnvelopeIntro";
import { Hero } from "@/components/Hero";
import { Invocation } from "@/components/Invocation";
import { Countdown } from "@/components/Countdown";
import { Story } from "@/components/Story";
import { EventSchedule } from "@/components/EventSchedule";
import { Rsvp } from "@/components/Rsvp";
import { Closing } from "@/components/Closing";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <ThemeProvider>
      <main>
        <Hero />
        <Invocation />
        <Countdown />
        <Story />
        <EventSchedule />
        <Rsvp />
        <Closing />
        <Footer />
      </main>
      <ThemePicker />
      <EnvelopeIntro />
    </ThemeProvider>
  );
}
