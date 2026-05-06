import { Hero } from "@/components/marketing/hero";
import { ProductShowcase } from "@/components/marketing/product-showcase";
import { WhyHunnybi } from "@/components/marketing/why-hunnybi";
import { DeliveryPolicy } from "@/components/marketing/delivery-policy";
import { FAQ } from "@/components/marketing/faq";
import { WholesaleCTA } from "@/components/marketing/wholesale-cta";

export const metadata = {
  title: "Hunnybi | Premium Honey & Nut Collections",
  description:
    "Experience the perfect harmony of raw honey and premium nuts. Carefully curated for natural energy and luxury gifting.",
  openGraph: {
    title: "Hunnybi | Premium Honey & Nut Collections",
    description:
      "Experience the perfect harmony of raw honey and premium nuts. Carefully curated for natural energy and luxury gifting.",
    type: "website"
  }
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProductShowcase />
      <WhyHunnybi />
      <DeliveryPolicy />
      <FAQ />
      <WholesaleCTA />
    </>
  );
}
