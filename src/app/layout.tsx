import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const tusker = localFont({
  src: [{ path: "../../public/fonts/TuskerGrotesk-3800Super.woff2", weight: "800", style: "normal" }],
  variable: "--font-tusker",
  display: "swap",
  fallback: ["Arial Black", "sans-serif"],
});

const humming = localFont({
  src: [{ path: "../../public/fonts/Humming.woff2", weight: "400", style: "normal" }],
  variable: "--font-humming",
  display: "swap",
  fallback: ["Georgia", "serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://athilacabrall.com"),
  title: "Athila Cabrall | Vibe Coder & Criador de Landing Pages",
  description:
    "Crio landing pages de alta conversão com vibe coding e IA — rápidas, bonitas e feitas para vender. Conheça também a Cyno, hub de prompts e templates.",
  keywords: [
    "vibe coder",
    "landing page",
    "criador de landing pages",
    "desenvolvedor",
    "programador",
    "landing page de alta conversão",
    "vibe coding",
    "inteligência artificial",
    "Cyno",
    "templates de landing page",
    "prompts",
    "Athila Cabrall",
  ],
  authors: [{ name: "Athila Cabrall" }],
  creator: "Athila Cabrall",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://athilacabrall.com",
    title: "Athila Cabrall | Vibe Coder & Criador de Landing Pages",
    description:
      "Landing pages de alta conversão com vibe coding e IA. Conheça também a Cyno, hub de prompts e templates de landing page.",
    siteName: "Athila Cabrall",
  },
  twitter: {
    card: "summary_large_image",
    title: "Athila Cabrall | Vibe Coder & Criador de Landing Pages",
    description:
      "Landing pages que convertem, feitas com vibe coding e IA. Conheça a Cyno.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#0F0F11" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Athila Cabrall — Vibe Coder & Criador de Landing Pages",
              description:
                "Criação de landing pages de alta conversão com vibe coding e IA. Cofundador da agência Cyno.",
              url: "https://athilacabrall.com",
              areaServed: "BR",
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Goiânia",
                addressRegion: "GO",
                addressCountry: "BR",
              },
              sameAs: [
                "https://github.com/AthilaCabrall",
                "https://instagram.com/athilacabrall",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${poppins.variable} ${tusker.variable} ${humming.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
