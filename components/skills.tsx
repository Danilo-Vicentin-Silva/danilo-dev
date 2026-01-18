/**
 * Skills Component
 *
 * Renders a comprehensive showcase of technical skills organized by category.
 * Includes interactive hover effects, animations, and descriptive tooltips.
 *
 * Features:
 * - Multiple skill categories (Power Platform, Data, Tools, Programming, Studying)
 * - Real technology icons using react-icons
 * - Scroll animations with staggered timing
 * - Interactive tooltips on hover
 * - Responsive grid layout
 * - Support for multiple languages via AppContext
 */

"use client"

import type React from "react"

import { useState } from "react"
import {
  Workflow,
  Database,
  FileSpreadsheet,
  Github,
  BarChart3,
  AppWindow,
  Sheet,
} from "lucide-react"
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiPython,
  SiC,
} from "react-icons/si"
import { FaJava } from "react-icons/fa"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useApp } from "@/contexts/app-context"

/**
 * Renders the Skills section with all technology categories
 */
export function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()
  const { t } = useApp()

  const skillCategories = buildSkillCategories(t)

  return (
    <section id="habilidades" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader
          headerRef={headerRef}
          headerVisible={headerVisible}
          title={t.skills.title}
          description={t.skills.description}
        />

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

/**
 * Section header component with title and description
 */
function SectionHeader({
  headerRef,
  headerVisible,
  title,
  description,
}: {
  headerRef: React.RefObject<HTMLDivElement | null>
  headerVisible: boolean
  title: string
  description: string
}) {
  return (
    <div
      ref={headerRef}
      className={`text-center mb-16 transition-all duration-700 ${
        headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-foreground">
        {title}
      </h2>
      <p className="text-foreground/60 mt-4">{description}</p>
    </div>
  )
}

/**
 * Builds the skill categories array with icons and translations
 */
function buildSkillCategories(t: ReturnType<typeof useApp>["t"]) {
  return [
    {
      name: t.skills.categories.powerPlatform,
      color: "#325CD9",
      skills: [
        {
          name: t.skills.items.powerBI.name,
          icon: BarChart3,
          description: t.skills.items.powerBI.description,
        },
        {
          name: t.skills.items.powerApps.name,
          icon: AppWindow,
          description: t.skills.items.powerApps.description,
        },
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
        {
          name: t.skills.items.sql.name,
          icon: Database,
          description: t.skills.items.sql.description,
        },
        {
          name: t.skills.items.dax.name,
          icon: FileSpreadsheet,
          description: t.skills.items.dax.description,
        },
      ],
    },
    {
      name: t.skills.categories.tools,
      color: "#325CD9",
      skills: [
        {
          name: t.skills.items.excel.name,
          icon: Sheet,
          description: t.skills.items.excel.description,
        },
        {
          name: t.skills.items.github.name,
          icon: Github,
          description: t.skills.items.github.description,
        },
      ],
    },
    {
      name: t.skills.categories.programming,
      color: "#325CD9",
      skills: [
        {
          name: t.skills.items.javascript.name,
          icon: SiJavascript,
          description: t.skills.items.javascript.description,
        },
        {
          name: t.skills.items.typescript.name,
          icon: SiTypescript,
          description: t.skills.items.typescript.description,
        },
        {
          name: t.skills.items.nextjs.name,
          icon: SiNextdotjs,
          description: t.skills.items.nextjs.description,
        },
      ],
    },
    {
      name: t.skills.categories.studying,
      color: "#ef4444",
      skills: [
        {
          name: t.skills.items.python.name,
          icon: SiPython,
          description: t.skills.items.python.description,
        },
        {
          name: t.skills.items.java.name,
          icon: FaJava,
          description: t.skills.items.java.description,
        },
        {
          name: t.skills.items.c.name,
          icon: SiC,
          description: t.skills.items.c.description,
        },
      ],
    },
  ]
}

/**
 * Renders a skill category with its items in a responsive grid
 *
 * Props:
 * - category: Skill category with name, color, and skills array
 * - categoryIndex: Index for animation timing
 * - hoveredSkill: Currently hovered skill name
 * - setHoveredSkill: Function to update hovered skill
 */
function SkillCategory({
  category,
  categoryIndex,
  hoveredSkill,
  setHoveredSkill,
}: {
  category: {
    name: string
    color: string
    skills: {
      name: string
      icon: React.ComponentType<{ className?: string }>
      description: string
    }[]
  }
  categoryIndex: number
  hoveredSkill: string | null
  setHoveredSkill: (skill: string | null) => void
}) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${categoryIndex * 100}ms` }}
    >
      <CategoryHeader
        categoryName={category.name}
        categoryColor={category.color}
      />

      <SkillsGrid
        skills={category.skills}
        categoryIndex={categoryIndex}
        isVisible={isVisible}
        hoveredSkill={hoveredSkill}
        setHoveredSkill={setHoveredSkill}
        categoryColor={category.color}
      />
    </div>
  )
}

/**
 * Renders the category header with colored indicator
 */
function CategoryHeader({
  categoryName,
  categoryColor,
}: {
  categoryName: string
  categoryColor: string
}) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div
        className="w-3 h-3 rounded-full"
        style={{ backgroundColor: categoryColor }}
        aria-hidden="true"
      />
      <h3 className="text-foreground font-semibold text-lg">{categoryName}</h3>
    </div>
  )
}

/**
 * Renders the grid of skills with hover interactions
 */
function SkillsGrid({
  skills,
  categoryIndex,
  isVisible,
  hoveredSkill,
  setHoveredSkill,
  categoryColor,
}: {
  skills: {
    name: string
    icon: React.ComponentType<{ className?: string }>
    description: string
  }[]
  categoryIndex: number
  isVisible: boolean
  hoveredSkill: string | null
  setHoveredSkill: (skill: string | null) => void
  categoryColor: string
}) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {skills.map((skill, skillIndex) => (
        <SkillCard
          key={skill.name}
          skill={skill}
          skillIndex={skillIndex}
          categoryIndex={categoryIndex}
          isVisible={isVisible}
          isHovered={hoveredSkill === skill.name}
          onHover={setHoveredSkill}
          categoryColor={categoryColor}
        />
      ))}
    </div>
  )
}

/**
 * Renders individual skill card with icon, name, and interactive tooltip
 */
function SkillCard({
  skill,
  skillIndex,
  categoryIndex,
  isVisible,
  isHovered,
  onHover,
  categoryColor,
}: {
  skill: {
    name: string
    icon: React.ComponentType<{ className?: string }>
    description: string
  }
  skillIndex: number
  categoryIndex: number
  isVisible: boolean
  isHovered: boolean
  onHover: (skill: string | null) => void
  categoryColor: string
}) {
  return (
    <div
      className={`relative group transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{
        transitionDelay: `${categoryIndex * 100 + skillIndex * 50}ms`,
      }}
      onMouseEnter={() => onHover(skill.name)}
      onMouseLeave={() => onHover(null)}
    >
      <SkillCardContent
        skill={skill}
        isHovered={isHovered}
        categoryColor={categoryColor}
      />

      {isHovered && <SkillTooltip skill={skill} />}
    </div>
  )
}

/**
 * Renders the skill card content with icon and progress bar
 */
function SkillCardContent({
  skill,
  isHovered,
  categoryColor,
}: {
  skill: {
    name: string
    icon: React.ComponentType<{ className?: string }>
    description: string
  }
  isHovered: boolean
  categoryColor: string
}) {
  const IconComponent = skill.icon

  return (
    <div className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary transition-all cursor-pointer hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10">
      <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-3">
        <IconComponent className="w-6 h-6 text-primary-foreground" />
      </div>
      <span className="text-foreground text-sm font-medium">{skill.name}</span>
      <div className="mt-3 h-1 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{
            width: isHovered ? "100%" : "70%",
            backgroundColor: categoryColor,
          }}
          aria-hidden="true"
        />
      </div>
    </div>
  )
}

/**
 * Renders the tooltip that appears on skill hover
 */
function SkillTooltip({
  skill,
}: {
  skill: {
    name: string
    description: string
  }
}) {
  return (
    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-20 w-64 animate-fade-in-up">
      <div className="bg-card border border-border rounded-lg p-4 shadow-xl">
        <h4 className="text-foreground font-semibold mb-1">{skill.name}</h4>
        <p className="text-foreground/60 text-sm">{skill.description}</p>
      </div>
      <div
        className="w-3 h-3 bg-card border-r border-b border-border rotate-45 absolute left-1/2 -translate-x-1/2 -bottom-1.5"
        aria-hidden="true"
      />
    </div>
  )
}
