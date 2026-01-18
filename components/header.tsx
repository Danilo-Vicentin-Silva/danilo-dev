"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageToggle } from "@/components/language-toggle"
import { ClientOnly } from "@/components/client-only"
import { useApp } from "@/contexts/app-context"
import Image from "next/image"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useApp()

  const navLinks = [
    { href: "#sobre", label: t.nav.about },
    { href: "#habilidades", label: t.nav.skills },
    { href: "#projetos", label: t.nav.projects },
    { href: "#experiencia", label: t.nav.experience },
    { href: "#contato", label: t.nav.contact },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Image src="/logo-D.png" alt="Logo" width={30} height={30} />

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-foreground text-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <ClientOnly>
              <LanguageToggle />
              <ThemeToggle />
            </ClientOnly>
            <div className="w-px h-5 bg-border mx-1" />
            <Link
              href="https://github.com/Danilo-Vicentin-Silva"
              target="_blank"
              className="text-foreground/80 hover:text-foreground p-2"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/danilo-vicentin-da-silva-16a84022b/"
              target="_blank"
              className="text-foreground/80 hover:text-foreground p-2"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <ClientOnly>
              <LanguageToggle />
              <ThemeToggle />
            </ClientOnly>
            <Button
              variant="ghost"
              size="icon"
              className="text-foreground"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <nav className="md:hidden pt-4 pb-2 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-foreground text-sm py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-3 pt-2 border-t border-border">
              <Link
                href="https://github.com"
                target="_blank"
                className="text-foreground/80 hover:text-foreground"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                className="text-foreground/80 hover:text-foreground"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
