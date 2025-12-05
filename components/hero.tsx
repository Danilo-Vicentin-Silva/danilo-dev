"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown, Sparkles } from "lucide-react"
import { useApp } from "@/contexts/app-context"

export function Hero() {
  const { t } = useApp()

  const badges = [
    { label: t.hero.badges.powerPlatform, icon: "⚡" },
    { label: t.hero.badges.dataAnalysis, icon: "📊" },
    { label: t.hero.badges.webDev, icon: "💻" },
  ]

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("sobre")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative bg-card pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-card via-card to-background" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Top badge */}
        <div className="inline-flex items-center gap-2 bg-background/50 border border-border rounded-full px-4 py-2 mb-8 animate-fade-in-down">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-foreground/80">{t.hero.available}</span>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 animate-fade-in-up animation-delay-200">
          {t.hero.greeting} <span className="text-primary">Danilo</span> 👋
        </h1>

        <p className="text-lg md:text-xl text-foreground/70 mb-8 animate-fade-in-up animation-delay-300">
          {t.hero.role}
        </p>

        {/* Skill badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-6 animate-fade-in-up animation-delay-400">
          {badges.map((badge) => (
            <span
              key={badge.label}
              className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 text-foreground text-sm px-4 py-2 rounded-full hover:bg-primary/30 transition-colors"
            >
              <span>{badge.icon}</span>
              {badge.label}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-foreground/60 text-sm md:text-base max-w-2xl mx-auto mb-10 animate-fade-in-up animation-delay-500">
          {t.hero.description} <span className="text-primary">{t.hero.skills.ai}</span>,{" "}
          <span className="text-primary">{t.hero.skills.dataAnalysis}</span> e{" "}
          <span className="text-primary">{t.hero.skills.automation}</span>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 animate-fade-in-up animation-delay-600">
          <Button asChild className="bg-primary hover:bg-accent text-primary-foreground px-8">
            <Link href="#projetos">{t.hero.cta.projects}</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-foreground/20 text-foreground hover:bg-foreground/10 bg-transparent"
          >
            <Link href="#contato">{t.hero.cta.contact}</Link>
          </Button>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToAbout}
          className="animate-bounce cursor-pointer hover:scale-110 transition-transform"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-6 h-6 text-foreground/40 mx-auto hover:text-foreground/60" />
        </button>
      </div>

      {/* Floating widget */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 right-8 hidden lg:flex items-center gap-2 bg-background border border-border rounded-lg px-4 py-2 animate-fade-in-left animation-delay-700 hover:border-primary/50 transition-colors cursor-pointer"
      >
        <div className="w-3 h-3 bg-primary rounded-full" />
        <span className="text-sm text-foreground/80">{t.hero.readMore}</span>
        <span className="text-primary">↓</span>
      </button>
    </section>
  )
}
