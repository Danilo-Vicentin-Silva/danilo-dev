import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { AppProvider } from "@/contexts/app-context"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], display: "swap" })

export const metadata: Metadata = {
  title: {
    default: "Danilo | Portfólio - Desenvolvedor & Analista de Dados",
    template: "%s | Danilo",
  },
  description:
    "Estagiário em Inteligência de Mercado especializado em Power Platform, Power BI, Power Apps, Power Automate, análise de dados e desenvolvimento web. Portfólio de projetos e habilidades.",
  keywords: [
    "Danilo",
    "Portfólio",
    "Power BI",
    "Power Apps",
    "Power Automate",
    "Power Platform",
    "Análise de Dados",
    "Data Analysis",
    "Desenvolvedor Web",
    "Web Developer",
    "Microsoft 365",
    "SQL",
    "DAX",
    "Next.js",
    "React",
    "TypeScript",
    "Inteligência de Mercado",
    "Business Intelligence",
  ],
  authors: [{ name: "Danilo" }],
  creator: "Danilo",
  publisher: "Danilo",
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
  icons: {
    icon: [
      { url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/favicons/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/favicons/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    alternateLocale: "en_US",
    title: "Danilo | Portfólio - Desenvolvedor & Analista de Dados",
    description:
      "Estagiário em Inteligência de Mercado especializado em Power Platform, análise de dados e desenvolvimento web.",
    siteName: "Danilo Portfólio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Danilo | Portfólio",
    description: "Power Platform | Análise de Dados | Desenvolvimento Web",
  },
  metadataBase: new URL("https://danilo.dev"),
  generator: "v0.app",
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#363540" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Danilo",
              jobTitle: "Estagiário em Inteligência de Mercado",
              description: "Desenvolvedor e Analista de Dados especializado em Power Platform",
              knowsAbout: ["Power BI", "Power Apps", "Power Automate", "SQL", "DAX", "Next.js", "TypeScript"],
              sameAs: ["https://linkedin.com/in/danilo", "https://github.com/danilo"],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <AppProvider>{children}</AppProvider>
        <Analytics />
      </body>
    </html>
  )
}
