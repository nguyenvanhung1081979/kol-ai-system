import { Suspense } from "react";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { QuickProductLinks } from "@/components/sections/QuickProductLinks";
import { BrandMarquee } from "@/components/sections/BrandMarquee";
import { Services } from "@/components/sections/Services";
import { Products } from "@/components/sections/Products";
import { Pricing } from "@/components/sections/Pricing";
import { Payment } from "@/components/sections/Payment";
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
      <QuickProductLinks />
      <BrandMarquee />
      <Services />
      <Products />
      <Pricing />
      <Payment />
      <Blog />
      <Faq />
      <Suspense fallback={null}>
        <ContactSection />
      </Suspense>
      <Footer />
    </>
  );
}
