import type { Language } from "./types"
import { nav } from "./nav"
import { hero } from "./hero"
import { about } from "./about"
import { skills } from "./skills"
import { projects } from "./projects"
import { experience } from "./experience"
import { contact } from "./contact"
import { footer } from "./footer"
import { theme } from "./theme"

export const translations = {
  pt: {
    nav: nav.pt,
    hero: hero.pt,
    about: about.pt,
    skills: skills.pt,
    projects: projects.pt,
    experience: experience.pt,
    contact: contact.pt,
    footer: footer.pt,
    theme: theme.pt,
  },
  en: {
    nav: nav.en,
    hero: hero.en,
    about: about.en,
    skills: skills.en,
    projects: projects.en,
    experience: experience.en,
    contact: contact.en,
    footer: footer.en,
    theme: theme.en,
  },
}

export function getTranslation(lang: Language) {
  return translations[lang]
}
