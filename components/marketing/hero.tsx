
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";


export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden pt-24 sm:pt-32">
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
        {/* Dark overlay with a gradient for more depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </div>

      <div className="container-shell relative z-10 text-center">
        <p className="mb-6 text-sm font-body uppercase tracking-[0.3em] text-white/80">
          Pure • Raw • Uncompromised
        </p>
        <h1 className="mx-auto max-w-4xl font-heading text-5xl font-semibold tracking-tight text-white sm:text-7xl md:text-8xl lg:text-9xl">
          The New Standard in <span className="italic text-primary">Honey</span>
        </h1>
        <p className="mx-auto mt-8 max-w-2xl font-body text-lg leading-relaxed text-white/90 sm:text-xl md:text-2xl">
          Experience the pure essence of raw honey and premium roasted nuts. Minimal ingredients, maximum impact.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <Button
            asChild
            size="lg"
            className="group w-full bg-primary px-10 text-primary-foreground transition-all duration-300 hover:scale-[1.02] hover:bg-primary/90 active:scale-95 sm:w-auto sm:hover:scale-105"
          >
            <a href="#product">
              Shop Collection
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="w-full border-white/20 bg-white/10 px-10 text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:text-white active:scale-95 sm:w-auto"
          >
            <a href="#why-hunnybi">Explore Benefits</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
