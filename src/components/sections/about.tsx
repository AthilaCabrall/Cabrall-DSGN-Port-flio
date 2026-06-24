"use client";

import { useState, useEffect } from "react";
import { CheckCircle2 } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";

const ABOUT_IMAGES = [
  "/images/about/freepik__candid-relaxed-studio-portrait-of-a-young-man-with__18153.webp",
  "/images/about/freepik__photorealistic-overtheshoulder-shot-focused-intent__57241.webp",
  "/images/about/freepik__ultrarealistic-candid-portrait-of-a-young-man-with__57249.webp",
  "/images/about/freepik__ultrarealistic-studio-portrait-scene-with-a-clean-__57231.webp",
];

const highlights = [
  "Vibe coding: prototipo, codifico e publico rápido",
  "Inteligência artificial em todo o fluxo de trabalho",
  "Foco em conversão, performance e código limpo",
  "Da copy ao deploy — entrego a página inteira",
  "Cofundador da Cyno, hub criativo com meu irmão Henrique",
];

const timeline = [
  { year: "2019", label: "Início no design e na web" },
  { year: "2021", label: "Primeiros sites e clientes" },
  { year: "2023", label: "Foco em landing pages que convertem" },
  { year: "2024", label: "Vibe coding com IA no fluxo" },
  { year: "2025", label: "Lançamento da agência Cyno" },
];

export function About() {
  const [aboutImage, setAboutImage] = useState(ABOUT_IMAGES[0]);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const idx = Math.floor(Math.random() * ABOUT_IMAGES.length);
    setAboutImage(ABOUT_IMAGES[idx]);
  }, []);

  return (
    <section id="sobre" className="relative section-padding gradient-section-alt">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Photo side */}
          <AnimatedSection direction="left">
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Main photo */}
              <div className="aspect-[3/4] w-full rounded-2xl overflow-hidden border border-border/50 glow-cognac relative">
                <img
                  src={aboutImage}
                  alt="Athila Cabrall"
                  className="w-full h-full object-cover object-center"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C]/40 via-transparent to-transparent" />
              </div>

              {/* Decorative frame offset */}
              <div className="absolute -z-10 top-5 -left-5 w-full h-full rounded-2xl border border-cognac/10" />
              <div className="absolute -z-10 top-10 -left-10 w-full h-full rounded-2xl border border-cognac/5" />

              {/* Floating quote */}
              <motion.div
                className="absolute -bottom-6 -right-4 sm:right-0 glass-card rounded-xl px-5 py-4 max-w-[240px]"
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 20, scale: 0.9 }}
                whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <p className="font-humming text-sm text-cognac-light leading-relaxed">
                  &ldquo;Código é a ponte entre a ideia e a venda.&rdquo;
                </p>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Text side */}
          <div className="space-y-8">
            <AnimatedSection>
              <p className="text-xs uppercase tracking-[0.25em] text-cognac mb-4 font-poppins font-medium">
                Sobre
              </p>
              <h2 className="font-tusker text-3xl sm:text-4xl lg:text-5xl text-bone leading-[0.9]">
                Onde design encontra{" "}
                <span className="text-gradient">código e IA</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="space-y-4 text-bone/50 leading-relaxed border-l-2 border-cognac/30 pl-6 font-poppins font-light">
                <p>
                  Comecei no design e fui parar no{" "}
                  <span className="text-bone font-semibold">código</span>. Hoje sou{" "}
                  <span className="text-bone font-semibold">vibe coder</span> — uno
                  design estratégico, desenvolvimento e IA para criar landing pages
                  que vendem.
                </p>
                <p>
                  Uso <span className="text-cognac font-medium">inteligência artificial</span> em
                  todo o fluxo: do briefing ao deploy, entrego páginas rápidas e
                  bonitas em uma fração do tempo.
                </p>
                <p>
                  Junto com meu irmão{" "}
                  <span className="text-bone font-semibold">Henrique Bergami</span>, fundei a{" "}
                  <span className="text-cognac font-medium">Cyno</span> — um hub criativo com
                  prompts, templates de landing page e recursos para quem constrói na internet.
                </p>
              </div>
            </AnimatedSection>

            {/* Highlights */}
            <StaggerContainer className="space-y-2.5" staggerDelay={0.07}>
              {highlights.map((item) => (
                <StaggerItem key={item}>
                  <div className="flex items-start gap-3 group">
                    <CheckCircle2 className="h-4 w-4 text-cognac shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                    <span className="text-sm text-bone/60 font-poppins group-hover:text-bone/80 transition-colors">
                      {item}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Mini timeline */}
            <AnimatedSection delay={0.4}>
              <div className="pt-4">
                <p className="text-xs uppercase tracking-[0.2em] text-bone/30 mb-4 font-poppins">
                  Trajetória
                </p>
                <div className="flex items-start gap-0 overflow-x-auto pb-2">
                  {timeline.map((item, i) => (
                    <div key={item.year} className="flex items-start min-w-0">
                      <div className="flex flex-col items-center text-center min-w-[72px]">
                        <div className="w-2.5 h-2.5 rounded-full bg-cognac/40 border border-cognac/60 mb-2" />
                        <p className="text-xs font-tusker text-cognac">{item.year}</p>
                        <p className="text-[10px] text-bone/30 font-poppins mt-0.5 leading-tight px-1">
                          {item.label}
                        </p>
                      </div>
                      {i < timeline.length - 1 && (
                        <div className="w-8 h-px bg-cognac/20 mt-[5px] shrink-0" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Signature */}
            <AnimatedSection delay={0.5}>
              <div className="pt-4 border-t border-border/50">
                <p className="text-lg font-poppins font-bold text-bone">
                  Athila <span className="text-cognac">Cabrall</span>
                </p>
                <p className="text-xs text-bone/35 font-poppins tracking-wide">
                  Vibe Coder & Criador de Landing Pages · Cofundador da Cyno
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
