"use client";

import { ArrowUpRight, CheckCircle2, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FORMS } from "@/lib/constants";

const FORM_BENEFITS = [
  "Conte seu projeto com calma, no seu tempo",
  "Recebo todas as informações organizadas",
  "Retorno com uma proposta sob medida",
];

export function LeadForm() {
  return (
    <div className="flex flex-col h-full space-y-6">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cognac/10 border border-cognac/15">
          <FileText className="h-5 w-5 text-cognac" strokeWidth={1.5} />
        </div>
        <div>
          <h3 className="font-poppins font-bold text-bone text-lg">
            Briefing do seu projeto
          </h3>
          <p className="text-sm text-bone/40 font-poppins font-light">
            Leva menos de 2 minutos para preencher
          </p>
        </div>
      </div>

      <p className="text-sm text-bone/50 font-poppins font-light leading-relaxed">
        Quer uma landing page que realmente converte? Preencha o formulário e me
        conte sobre seu projeto. É a forma mais rápida de eu entender o que você
        precisa e voltar com uma proposta certeira.
      </p>

      <ul className="space-y-3">
        {FORM_BENEFITS.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <CheckCircle2 className="h-4 w-4 text-cognac shrink-0 mt-0.5" />
            <span className="text-sm text-bone/60 font-poppins font-light">
              {item}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-2">
        <Button size="lg" className="w-full rounded-full group glow-cognac" asChild>
          <a href={FORMS.contact} target="_blank" rel="noopener noreferrer">
            Preencher o formulário
            <ArrowUpRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </Button>
        <p className="mt-3 text-center text-[11px] text-bone/30 font-poppins">
          Abre em uma nova aba no Google Forms
        </p>
      </div>
    </div>
  );
}
