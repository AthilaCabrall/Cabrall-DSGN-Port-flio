"use client";

import { useState } from "react";
import {
  Sparkles,
  X,
  ChevronLeft,
  ChevronRight,
  ShoppingBag,
  LayoutTemplate,
  Wand2,
  ArrowUpRight,
} from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { WHATSAPP, CYNO } from "@/lib/constants";

const AI_PORTRAITS = [
  "/images/ai-portraits/freepik__candid-lifestyle-indoor-shot-of-a-young-man-with-s__57278.webp",
  "/images/ai-portraits/freepik__cozy-cinematic-portrait-of-a-young-man-with-curly-__18146.webp",
  "/images/ai-portraits/freepik__macro-photorealistic-candid-portrait-of-a-young-ma__57280.webp",
  "/images/ai-portraits/freepik__moody-cinematic-car-interior-shot-a-young-man-with__57282.webp",
  "/images/ai-portraits/freepik__sophisticated-professional-portrait-of-a-young-man__18151.webp",
  "/images/ai-portraits/freepik__retro-cyberpunk-aesthetic-candid-portrait-a-young-__66244.webp",
  "/images/ai-portraits/freepik__vintage-aesthetic-lifestyle-portrait-of-a-young-ma__18148.webp",
  "/images/ai-portraits/freepik__gritty-cinematic-fitness-lifestyle-shot-a-young-ma__57283.webp",
];

const CYNO_FEATURES = [
  {
    icon: Wand2,
    title: "Venda de Prompts",
    description: "Prompts testados para você gerar copy, design e código com IA sem ficar no escuro.",
  },
  {
    icon: LayoutTemplate,
    title: "Templates de Landing Page",
    description: "Modelos prontos de alta conversão para lançar sua página em minutos, não em semanas.",
  },
  {
    icon: ShoppingBag,
    title: "Hub Completo & Muito Mais",
    description: "Recursos, ferramentas e materiais para quem constrói, vende e cresce na internet.",
  },
];

export function AiPortraits() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      {/* ========== AI PORTRAITS SECTION ========== */}
      <section id="ensaios-ia" className="relative section-padding gradient-section">
        <div className="section-container">
          <AnimatedSection className="text-center mb-12 lg:mb-16">
            <Badge
              variant="outline"
              className="mb-4 text-xs bg-cognac/10 text-cognac border-cognac/20 px-4 py-1.5 rounded-full"
            >
              <Sparkles className="mr-1.5 h-3 w-3" />
              Criação com IA
            </Badge>
            <h2 className="font-tusker text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-bone leading-[0.9]">
              Imagens & Branding com{" "}
              <span className="text-gradient-gold">Inteligência Artificial</span>
            </h2>
            <p className="mt-6 text-base sm:text-lg text-bone/40 max-w-2xl mx-auto font-poppins font-light">
              IA também faz parte do meu fluxo visual: retratos e imagens de marca
              que parecem fotos reais de estúdio — perfeitos para a sua landing page,
              perfis e branding pessoal.
            </p>
          </AnimatedSection>

          {/* Gallery grid */}
          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4 mb-10">
            {AI_PORTRAITS.map((image, i) => (
              <StaggerItem key={image}>
                <motion.button
                  type="button"
                  onClick={() => setLightboxIndex(i)}
                  className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-border/50 hover:border-cognac/30 transition-all duration-500 cursor-zoom-in group"
                  whileHover={shouldReduceMotion ? {} : { y: -3, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  <img
                    src={image}
                    alt={`Ensaio IA — exemplo ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.button>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedSection className="text-center">
            <Button size="lg" className="rounded-full group glow-cognac" asChild>
              <a href={WHATSAPP.landingLink()} target="_blank" rel="noopener noreferrer">
                Quero imagens assim no meu projeto
                <Sparkles className="ml-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
              </a>
            </Button>
          </AnimatedSection>
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              className="fixed inset-0 z-[90] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
              onClick={() => setLightboxIndex(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div
                className="relative max-w-3xl w-full flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.img
                  key={lightboxIndex}
                  src={AI_PORTRAITS[lightboxIndex]}
                  alt="Ensaio IA ampliado"
                  className="max-h-[88vh] w-auto max-w-full rounded-2xl border border-border/50 object-contain"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-2 rounded-full"
                  onClick={() =>
                    setLightboxIndex(
                      (lightboxIndex - 1 + AI_PORTRAITS.length) % AI_PORTRAITS.length
                    )
                  }
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-2 rounded-full"
                  onClick={() =>
                    setLightboxIndex((lightboxIndex + 1) % AI_PORTRAITS.length)
                  }
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute top-2 right-2 rounded-full"
                  onClick={() => setLightboxIndex(null)}
                >
                  <X className="h-4 w-4" />
                </Button>
                <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-bone/40 font-poppins bg-black/50 px-3 py-1 rounded-full">
                  {lightboxIndex + 1} / {AI_PORTRAITS.length}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* ========== CYNO AGENCY SECTION ========== */}
      <section id="cyno" className="relative section-padding gradient-section-alt">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left — Info */}
            <AnimatedSection className="lg:col-span-7 space-y-8">
              <div>
                <Badge
                  variant="outline"
                  className="mb-4 text-xs bg-cognac/10 text-cognac border-cognac/20 px-4 py-1.5 rounded-full"
                >
                  <Sparkles className="mr-1.5 h-3 w-3" />
                  Nossa agência
                </Badge>
                <h2 className="font-tusker text-3xl sm:text-4xl lg:text-5xl text-bone leading-[0.9]">
                  Conheça a{" "}
                  <span className="text-gradient">Cyno</span>
                </h2>
                <p className="mt-3 font-humming text-lg sm:text-xl text-cognac-light">
                  {CYNO.tagline}
                </p>
                <p className="mt-6 text-base sm:text-lg text-bone/40 font-poppins font-light max-w-xl">
                  A agência que eu e meu irmão{" "}
                  <span className="text-bone font-medium">Henrique Bergami</span> criamos.
                  Um hub completo para quem constrói na internet — venha conhecer nossa
                  venda de prompts, templates de landing page e muito mais.
                </p>
              </div>

              <StaggerContainer className="space-y-4" staggerDelay={0.1}>
                {CYNO_FEATURES.map((feature) => (
                  <StaggerItem key={feature.title}>
                    <div className="glass-card-hover rounded-xl p-5 flex items-start gap-4 group">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cognac/10 border border-cognac/15 group-hover:border-cognac/30 transition-colors">
                        <feature.icon
                          className="h-5 w-5 text-cognac"
                          strokeWidth={1.5}
                        />
                      </div>
                      <div>
                        <h3 className="font-poppins font-bold text-bone text-sm uppercase tracking-wide mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-bone/40 font-poppins font-light leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </AnimatedSection>

            {/* Right — CTA Card */}
            <AnimatedSection className="lg:col-span-5" direction="right">
              <div className="glass-card rounded-2xl p-8 sm:p-10 text-center space-y-6 glow-cognac relative overflow-hidden">
                {/* Decorative gradient blob */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-cognac/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative">
                  <p className="font-tusker text-4xl sm:text-5xl text-gradient mb-2">
                    CYNO
                  </p>
                  <p className="text-xs text-bone/35 font-poppins uppercase tracking-[0.2em] mb-4">
                    {CYNO.founders}
                  </p>
                  <p className="text-sm text-bone/40 font-poppins font-light leading-relaxed mb-8">
                    Prompts, templates de landing page e recursos para você
                    construir mais rápido e vender mais. Tudo em um só lugar.
                  </p>
                  <Button size="lg" className="w-full rounded-full glow-pulse group" asChild>
                    <a href={CYNO.hubLink} target="_blank" rel="noopener noreferrer">
                      Conhecer o hub da Cyno
                      <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full rounded-full group mt-3"
                    asChild
                  >
                    <a href={WHATSAPP.cynoLink()} target="_blank" rel="noopener noreferrer">
                      Falar sobre a Cyno
                    </a>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
