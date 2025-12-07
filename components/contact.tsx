"use client"

import Link from "next/link"
import { Linkedin, Github, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useApp } from "@/contexts/app-context"

export function Contact() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation()
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation()
  const { t } = useApp()

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/danilo-vicentin-da-silva-16a84022b/",
      icon: Linkedin,
      username: "@danilo",
      color: "#0077b5",
    },
    {
      name: "GitHub",
      url: "https://github.com/Danilo-Vicentin-Silva",
      icon: Github,
      username: "@danilo",
      color: "#006ba4",
    },
    {
      name: t.nav.about === "Sobre" ? "Portfólio" : "Portfolio",
      url: "/",
      icon: Globe,
      username: "danilo.dev",
      color: "#325CD9",
    },
  ]

  return (
    <section id="contato" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section header */}
        <div
          ref={headerRef}
          className={`text-center mb-12 transition-all duration-700 ${
            headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            {t.contact.sectionTitle}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            {t.contact.title}
          </h2>
          <p className="text-foreground/60 mt-4 max-w-xl mx-auto">
            {t.contact.description}
          </p>
        </div>

        {/* Social links */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-16"
        >
          {socialLinks.map((social, index) => (
            <Link
              key={social.name}
              href={social.url}
              target={social.url.startsWith("http") ? "_blank" : undefined}
              className={`bg-card/50 border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-all duration-500 group hover:-translate-y-2 hover:shadow-lg ${
                cardsVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 transition-transform group-hover:scale-110"
                style={{ backgroundColor: `${social.color}20` }}
              >
                <social.icon
                  className="w-6 h-6"
                  style={{ color: social.color }}
                />
              </div>
              <h3 className="text-foreground font-semibold mb-1">
                {social.name}
              </h3>
              <p className="text-foreground/60 text-sm">{social.username}</p>
            </Link>
          ))}
        </div>

        {/* CTA Card */}
        <div
          ref={ctaRef}
          className={`bg-primary rounded-2xl p-8 md:p-12 text-center transition-all duration-700 ${
            ctaVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="w-16 h-16 bg-primary-foreground/20 rounded-2xl flex items-center justify-center mx-auto mb-6 animate-bounce">
            <span className="text-3xl">🚀</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            {t.contact.cta.title}
          </h3>
          <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
            {t.contact.cta.description}
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 hover:scale-105 transition-transform"
          >
            <Link
              href="https://www.linkedin.com/in/danilo-vicentin-da-silva-16a84022b/?skipRedirect=true"
              target="_blank"
            >
              {t.contact.cta.button}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
