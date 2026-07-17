import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Pricing } from "@/components/sections/Pricing";
import { Payment } from "@/components/sections/Payment";
import { AiToolsRanking } from "@/components/sections/AiToolsRanking";
import { Blog } from "@/components/sections/Blog";
import { Faq } from "@/components/sections/Faq";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";
import { GiftPopup } from "@/components/ui/GiftPopup";
import { PromptPopup } from "@/components/ui/PromptPopup";

export default function Home() {
  return (
    <>
      <GiftPopup />
      <PromptPopup />
      <Header />
      <Hero />
      <Services />
      <Pricing />
      <Payment />
      <AiToolsRanking />
      <Blog />
      <Faq />
      <ContactSection />
      <Footer />
    </>
  );
}
