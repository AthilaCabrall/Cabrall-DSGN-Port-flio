// ============================================
// ATHILA CABRALL — CONSTANTS
// Vibe Coder & Criador de Landing Pages
// ============================================

export const SITE = {
  name: "Athila Cabrall",
  title: "Athila Cabrall | Vibe Coder & Criador de Landing Pages",
  description:
    "Crio landing pages de alta conversão com vibe coding e IA — rápidas, bonitas e feitas para vender. Páginas, sites e produtos digitais que transformam visitantes em clientes.",
  url: "https://athilacabrall.com",
  ogImage: "/og-image.png",
  locale: "pt_BR",
} as const;

// ⚠️ SUBSTITUA pelo link real do seu Google Forms (ex: https://forms.gle/xxxxxxxx)
export const FORMS = {
  contact: "https://forms.gle/SEU-FORMULARIO-AQUI",
} as const;

// ⚠️ SUBSTITUA pelo link real do hub da Cyno
export const CYNO = {
  name: "Cyno",
  tagline: "O hub criativo de quem constrói na internet",
  founders: "Athila Cabrall & Henrique Bergami",
  description:
    "A agência que eu e meu irmão Henrique Bergami criamos. Um hub completo com venda de prompts, templates de landing page, recursos e ferramentas para você construir mais rápido e vender mais.",
  hubLink: "https://cyno.com.br", // ⚠️ troque pelo link real do hub
  instagram: "https://instagram.com/cyno",
} as const;

export const WHATSAPP = {
  number: "5562993688127",
  defaultMessage:
    "Olá! Vim pelo seu site e gostaria de saber mais sobre suas landing pages.",
  get link() {
    return `https://wa.me/${this.number}?text=${encodeURIComponent(this.defaultMessage)}`;
  },
  buildLink(name: string, projectType: string) {
    const message = `Olá, Athila! Meu nome é ${name} e tenho interesse em ${projectType}. Vim pelo seu site e gostaria de conversar sobre meu projeto.`;
    return `https://wa.me/${this.number}?text=${encodeURIComponent(message)}`;
  },
  landingLink() {
    const message = "Olá, Athila! Quero uma landing page de alta conversão. Vim pelo seu site.";
    return `https://wa.me/${this.number}?text=${encodeURIComponent(message)}`;
  },
  cynoLink() {
    const message = "Olá! Vim pelo site e quero conhecer melhor o hub da Cyno (prompts e templates).";
    return `https://wa.me/${this.number}?text=${encodeURIComponent(message)}`;
  },
} as const;

export const SOCIAL = {
  github: "https://github.com/AthilaCabrall",
  whatsapp: WHATSAPP.link,
  instagram: "https://instagram.com/athilacabrall",
  cyno: CYNO.hubLink,
} as const;

export const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Projetos", href: "#portfolio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Cyno", href: "#cyno" },
  { label: "Contato", href: "#contato" },
] as const;

export const STATS = [
  { value: "80+", label: "Landing Pages" },
  { value: "6+", label: "Anos de Código" },
  { value: "40+", label: "Clientes" },
] as const;

export const SERVICES = [
  {
    icon: "Rocket" as const,
    title: "Landing Pages de Alta Conversão",
    description:
      "Páginas rápidas, responsivas e otimizadas para transformar visitantes em clientes — do conceito ao deploy.",
  },
  {
    icon: "Sparkles" as const,
    title: "Vibe Coding com IA",
    description:
      "Desenvolvimento acelerado por inteligência artificial: prototipo, codifico e publico em tempo recorde sem perder qualidade.",
  },
  {
    icon: "Target" as const,
    title: "Copy & Design que Convertem",
    description:
      "Estrutura de persuasão, design estratégico e CTAs pensados para gerar cliques, leads e vendas reais.",
  },
  {
    icon: "Code" as const,
    title: "Sites & Produtos Digitais",
    description:
      "Sites institucionais, web apps e integrações (forms, pagamentos, analytics) com código limpo e escalável.",
  },
] as const;

export const PORTFOLIO_PROJECTS = [
  {
    title: "Campanha de Lançamento",
    category: "Landing Page",
    folder: "projeto-1",
  },
  {
    title: "Identidade & Site Completo",
    category: "Site Institucional",
    folder: "projeto-2",
  },
  {
    title: "Material Educacional",
    category: "Landing de Curso",
    folder: "projeto-3",
  },
  {
    title: "Campanha Solidária",
    category: "Página de Captação",
    folder: "projeto-4",
  },
  {
    title: "Redesign de Marca",
    category: "Branding + Web",
    folder: "projeto-5",
  },
  {
    title: "Conteúdo para Redes",
    category: "Criativos & Social",
    folder: "projeto-6",
  },
] as const;
