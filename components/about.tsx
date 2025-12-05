"use client"

import { GraduationCap, Briefcase, Target, Zap } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useApp } from "@/contexts/app-context"

export function About() {
  const { t } = useApp()
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation()
  const { ref: quoteRef, isVisible: quoteVisible } = useScrollAnimation()

  const cards = [
    {
      icon: GraduationCap,
      title: t.about.cards.education.title,
      description: t.about.cards.education.description,
    },
    {
      icon: Briefcase,
      title: t.about.cards.role.title,
      description: t.about.cards.role.description,
    },
    {
      icon: Target,
      title: t.about.cards.focus.title,
      description: t.about.cards.focus.description,
    },
    {
      icon: Zap,
      title: t.about.cards.specialty.title,
      description: t.about.cards.specialty.description,
    },
  ]

  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">{t.about.sectionTitle}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">{t.about.title}</h2>
          <p className="text-foreground/60 mt-4 max-w-2xl mx-auto">
            {t.about.description} <span className="text-primary">{t.about.highlights.technology}</span>,{" "}
            <span className="text-primary">{t.about.highlights.analysis}</span> e{" "}
            <span className="text-primary">{t.about.highlights.strategy}</span> {t.about.toGenerateValue}
          </p>
        </div>

        {/* Info cards */}
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {cards.map((card, index) => (
            <div
              key={card.title}
              className={`bg-card/50 border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-all duration-500 hover:-translate-y-1 ${
                cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <card.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-foreground font-semibold mb-2">{card.title}</h3>
              <p className="text-foreground/60 text-sm">{card.description}</p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <p
          ref={quoteRef}
          className={`text-center text-foreground/60 italic transition-all duration-700 delay-300 ${
            quoteVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          &ldquo;{t.about.quote} <span className="text-primary">{t.about.quoteHighlight}</span> {t.about.quoteEnd}
          &rdquo;
        </p>
      </div>
    </section>
  )
}
