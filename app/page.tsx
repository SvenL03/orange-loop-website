import VideoHero from "@/components/VideoHero";
import Ticker from "@/components/Ticker";
import GuiltSection from "@/components/GuiltSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialSection from "@/components/TestimonialSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <VideoHero />
      <Ticker />
      <GuiltSection />
      <ProcessSection />
      <TestimonialSection />
      <CTASection />
      <Footer />
    </main>
  );
}
