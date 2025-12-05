"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect, useCallback } from "react"
import { type Language, getTranslation } from "@/lib/translations"

type Theme = "light" | "dark"

interface AppContextType {
  theme: Theme
  toggleTheme: () => void
  language: Language
  setLanguage: (lang: Language) => void
  t: ReturnType<typeof getTranslation>
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark")
  const [language, setLanguage] = useState<Language>("pt")
  const [mounted, setMounted] = useState(false)

  // Load preferences from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null
    const savedLanguage = localStorage.getItem("language") as Language | null

    if (savedTheme) {
      setTheme(savedTheme)
    }
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }
    setMounted(true)
  }, [])

  // Apply theme class to document
  useEffect(() => {
    if (mounted) {
      document.documentElement.classList.remove("light", "dark")
      document.documentElement.classList.add(theme)
      localStorage.setItem("theme", theme)
    }
  }, [theme, mounted])

  // Save language preference
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("language", language)
      document.documentElement.lang = language === "pt" ? "pt-BR" : "en"
    }
  }, [language, mounted])

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"))
  }, [])

  const t = getTranslation(language)

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <AppContext.Provider
        value={{
          theme: "dark",
          toggleTheme: () => {},
          language: "pt",
          setLanguage: () => {},
          t: getTranslation("pt"),
        }}
      >
        {children}
      </AppContext.Provider>
    )
  }

  return <AppContext.Provider value={{ theme, toggleTheme, language, setLanguage, t }}>{children}</AppContext.Provider>
}

export function useApp() {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error("useApp must be used within an AppProvider")
  }
  return context
}
