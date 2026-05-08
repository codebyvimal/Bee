import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { brand } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden pt-16">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="container-shell relative z-10 text-center">
        <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-white/80">
          Pure • Raw • Uncompromised
        </p>
        <h1 className="mx-auto max-w-4xl text-5xl font-medium tracking-tight text-white sm:text-6xl md:text-7xl">
          The New Standard in <span className="italic">Honey</span>
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl">
          Experience the pure essence of raw honey and premium roasted nuts. Minimal ingredients, maximum impact.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg" className="w-full sm:w-auto bg-white text-black hover:bg-white/90">
            <a href="#product">
              Shop the Collection <ArrowRight className="ml-2 size-4" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white/10 hover:text-white">
            <a href="#why-hunnybi">Explore the Benefits</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
