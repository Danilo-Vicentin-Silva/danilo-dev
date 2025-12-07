"use client"

import { Calendar, Briefcase, GraduationCap } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useApp } from "@/contexts/app-context"

export function Experience() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation()
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation()
  const { t, language } = useApp()

  const professionalExperience = [
    {
      title: language === "pt" ? "Estagiário em Inteligência de Mercado" : "Market Intelligence Intern",
      company: language === "pt" ? "Empresa" : "Company",
      period: language === "pt" ? "dez 2024 - Presente" : "Dec 2024 - Present",
      description:
        language === "pt"
          ? "Desenvolvimento de soluções com Power Apps, Power Automate e Power BI para automação de processos usando Microsoft Lists, SharePoint e ferramentas Microsoft 365."
          : "Development of solutions with Power Apps, Power Automate and Power BI for process automation using Microsoft Lists, SharePoint and Microsoft 365 tools.",
      current: true,
    },
  ]

  const academicEducation = [
    {
      title:
        language === "pt"
          ? "Gestão da Tecnologia da Informação"
          : "IT Management",
      institution: language === "pt" ? "Instituição" : "Institution",
      period: language === "pt" ? "fev 2024 - Presente" : "Feb 2024 - Present",
      description:
        language === "pt"
          ? "O curso aborda disciplinas das áreas de informática e gestão, que têm como base a matemática. Dentro de computação, o estudante aprende linguagem de programação, desenvolvimento de softwares e implementação de sistema de banco de dados, entre outros. Já no campo gerencial, estuda administração, contabilidade, finanças, economia, negócios, marketing, gestão de pessoas e gestão da produção, por exemplo."
          : "The course covers disciplines in the areas of computer science and management, which are based on mathematics. In computer science, the student learns programming languages, software development, and database system implementation, among others. In the management field, they study administration, accounting, finance, economics, business, marketing, people management, and production management, for example.",
      current: true,
    },
  ]

  return (
    <section id="experiencia" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">{t.experience.sectionTitle}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">{t.experience.title}</h2>
        </div>

        {/* Two columns */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Professional Experience */}
          <div
            ref={leftRef}
            className={`transition-all duration-700 ${
              leftVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-foreground font-semibold text-xl">{t.experience.professional.title}</h3>
            </div>

            <div className="space-y-6">
              {professionalExperience.map((exp, index) => (
                <div
                  key={index}
                  className={`bg-card/50 border border-border rounded-xl p-6 relative hover:border-primary/50 transition-all duration-500 hover:-translate-y-1 ${
                    leftVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  {exp.current && (
                    <span className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full animate-pulse">
                      {t.experience.professional.current}
                    </span>
                  )}
                  <h4 className="text-foreground font-semibold mb-1">{exp.title}</h4>
                  <p className="text-primary text-sm mb-2">{exp.company}</p>
                  <div className="flex items-center gap-2 text-foreground/40 text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </div>
                  <p className="text-foreground/60 text-sm">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Education */}
          <div
            ref={rightRef}
            className={`transition-all duration-700 ${
              rightVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-foreground font-semibold text-xl">{t.experience.academic.title}</h3>
            </div>

            <div className="space-y-6">
              {academicEducation.map((edu, index) => (
                <div
                  key={index}
                  className={`bg-card/50 border border-border rounded-xl p-6 relative hover:border-primary/50 transition-all duration-500 hover:-translate-y-1 ${
                    rightVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  {edu.current && (
                    <span className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full animate-pulse">
                      {t.experience.academic.current}
                    </span>
                  )}
                  <h4 className="text-foreground font-semibold mb-1">{edu.title}</h4>
                  <p className="text-primary text-sm mb-2">{edu.institution}</p>
                  <div className="flex items-center gap-2 text-foreground/40 text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    {edu.period}
                  </div>
                  <p className="text-foreground/60 text-sm">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
