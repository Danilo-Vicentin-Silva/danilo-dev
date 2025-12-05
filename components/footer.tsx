"use client"

import { Heart } from "lucide-react"
import { useApp } from "@/contexts/app-context"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const { t } = useApp()

  return (
    <footer className="py-8 bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-foreground/60 text-sm">
            &copy; {currentYear} Danilo. {t.footer.rights}
          </p>
          <p className="text-foreground/60 text-sm flex items-center gap-1">
            {t.footer.madeWith} <Heart className="w-4 h-4 text-red-500 fill-current" /> {t.footer.andCode}
          </p>
        </div>
      </div>
    </footer>
  )
}
