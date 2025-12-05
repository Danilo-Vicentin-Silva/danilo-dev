"use client"

import type React from "react"

import { useState } from "react"
import {
  BarChart3,
  Layers,
  Workflow,
  Database,
  FileSpreadsheet,
  Github,
  Code2,
  FileCode,
  Braces,
  Terminal,
} from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useApp } from "@/contexts/app-context"

export function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()
  const { t } = useApp()

  const skillCategories = [
    {
      name: t.skills.categories.powerPlatform,
      color: "#325CD9",
      skills: [
        { name: t.skills.items.powerBI.name, icon: BarChart3, description: t.skills.items.powerBI.description },
        { name: t.skills.items.powerApps.name, icon: Layers, description: t.skills.items.powerApps.description },
        {
          name: t.skills.items.powerAutomate.name,
          icon: Workflow,
          description: t.skills.items.powerAutomate.description,
        },
      ],
    },
    {
      name: t.skills.categories.data,
      color: "#325CD9",
      skills: [
        { name: t.skills.items.sql.name, icon: Database, description: t.skills.items.sql.description },
        { name: t.skills.items.dax.name, icon: FileSpreadsheet, description: t.skills.items.dax.description },
      ],
    },
    {
      name: t.skills.categories.tools,
      color: "#325CD9",
      skills: [
        { name: t.skills.items.excel.name, icon: FileSpreadsheet, description: t.skills.items.excel.description },
        { name: t.skills.items.github.name, icon: Github, description: t.skills.items.github.description },
      ],
    },
    {
      name: t.skills.categories.programming,
      color: "#325CD9",
      skills: [
        { name: t.skills.items.javascript.name, icon: Braces, description: t.skills.items.javascript.description },
        { name: t.skills.items.typescript.name, icon: FileCode, description: t.skills.items.typescript.description },
        { name: t.skills.items.nextjs.name, icon: Code2, description: t.skills.items.nextjs.description },
      ],
    },
    {
      name: t.skills.categories.studying,
      color: "#ef4444",
      skills: [
        { name: t.skills.items.python.name, icon: Terminal, description: t.skills.items.python.description },
        { name: t.skills.items.java.name, icon: Code2, description: t.skills.items.java.description },
        { name: t.skills.items.c.name, icon: Terminal, description: t.skills.items.c.description },
      ],
    },
  ]

  return (
    <section id="habilidades" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">{t.skills.title}</h2>
          <p className="text-foreground/60 mt-4">{t.skills.description}</p>
        </div>

        {/* Skill categories */}
        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <SkillCategory
              key={category.name}
              category={category}
              categoryIndex={categoryIndex}
              hoveredSkill={hoveredSkill}
              setHoveredSkill={setHoveredSkill}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillCategory({
  category,
  categoryIndex,
  hoveredSkill,
  setHoveredSkill,
}: {
  category: {
    name: string
    color: string
    skills: { name: string; icon: React.ComponentType<{ className?: string }>; description: string }[]
  }
  categoryIndex: number
  hoveredSkill: string | null
  setHoveredSkill: (skill: string | null) => void
}) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${categoryIndex * 100}ms` }}
    >
      {/* Category header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: category.color }} />
        <h3 className="text-foreground font-semibold text-lg">{category.name}</h3>
      </div>

      {/* Skills grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {category.skills.map((skill, skillIndex) => (
          <div
            key={skill.name}
            className={`relative group transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: `${categoryIndex * 100 + skillIndex * 50}ms` }}
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <div className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary transition-all cursor-pointer hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-3">
                <skill.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-foreground text-sm font-medium">{skill.name}</span>
              {/* Progress bar */}
              <div className="mt-3 h-1 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: hoveredSkill === skill.name ? "100%" : "70%",
                    backgroundColor: category.color,
                  }}
                />
              </div>
            </div>

            {/* Tooltip */}
            {hoveredSkill === skill.name && (
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-20 w-64 animate-fade-in-up">
                <div className="bg-card border border-border rounded-lg p-4 shadow-xl">
                  <h4 className="text-foreground font-semibold mb-1">{skill.name}</h4>
                  <p className="text-foreground/60 text-sm">{skill.description}</p>
                </div>
                <div className="w-3 h-3 bg-card border-r border-b border-border rotate-45 absolute left-1/2 -translate-x-1/2 -bottom-1.5" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
