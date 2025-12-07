"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Search,
  Eye,
  ExternalLink,
  Github,
  ChevronDown,
  ChevronUp,
} from "lucide-react"
import { projects, categories } from "@/lib/projects-data"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useApp } from "@/contexts/app-context"

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("Todos")
  const [searchQuery, setSearchQuery] = useState("")
  const [displayCount, setDisplayCount] = useState(6)
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()
  const { ref: filtersRef, isVisible: filtersVisible } = useScrollAnimation()
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation()
  const { t, language } = useApp()

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      activeCategory === "Destaque" || activeCategory === "Featured"
        ? project.featured
        : activeCategory === "Todos" ||
          activeCategory === "All" ||
          project.category.includes(activeCategory)
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  // Reset displayCount quando filtros mudam
  useEffect(() => {
    setDisplayCount(6)
  }, [activeCategory, searchQuery])

  const translatedCategories = categories.map((cat) => {
    if (language === "en") {
      if (cat === "Destaque") return "Featured"
      if (cat === "Todos") return "All"
    }
    return cat
  })

  return (
    <section id="projetos" className="py-24 bg-background">
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
            {t.projects.sectionTitle}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            {t.projects.title}
          </h2>
          <p className="text-foreground/60 mt-4 max-w-2xl mx-auto">
            {t.projects.description}
          </p>
        </div>

        {/* Search bar */}
        <div
          ref={filtersRef}
          className={`transition-all duration-700 delay-100 ${
            filtersVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative max-w-md mx-auto mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
            <input
              type="text"
              placeholder={t.projects.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-card/50 border border-border rounded-full pl-12 pr-4 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {translatedCategories.map((category, index) => (
              <button
                key={category}
                onClick={() => setActiveCategory(categories[index])}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                  activeCategory === categories[index]
                    ? "bg-primary text-primary-foreground scale-105"
                    : "bg-card/50 text-foreground/60 hover:text-foreground border border-border hover:border-primary/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.slice(0, displayCount).map((project, index) => (
            <Link
              key={project.id}
              href={`/projeto/${project.id}`}
              className={`group bg-card/50 border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 ${
                gridVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Project image */}
              <div className="relative h-48 bg-primary/20 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                {project.featured && (
                  <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full">
                    {t.projects.featured}
                  </span>
                )}
              </div>

              {/* Project info */}
              <div className="p-6">
                <h3 className="text-foreground font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {t.projects.items[project.id as keyof typeof t.projects.items]
                    ?.title || project.title}
                </h3>
                <p className="text-foreground/60 text-sm mb-4 line-clamp-2">
                  {t.projects.items[project.id as keyof typeof t.projects.items]
                    ?.description || project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="bg-card border border-border text-foreground/80 text-xs px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 text-foreground/40 group-hover:text-foreground/60 transition-colors">
                  <Eye className="w-4 h-4" />
                  <ExternalLink className="w-4 h-4" />
                  <Github className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Load more button */}
        {filteredProjects.length > 6 && (
          <div className="flex justify-center gap-4 mt-12">
            {displayCount < filteredProjects.length && (
              <button
                onClick={() => setDisplayCount((prev) => prev + 6)}
                className="flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
              >
                <span>{language === "en" ? "Load More" : "Carregar Mais"}</span>
                <ChevronDown className="w-5 h-5" />
              </button>
            )}
            {displayCount > 6 && (
              <button
                onClick={() => setDisplayCount(6)}
                className="flex items-center gap-2 px-8 py-3 bg-card/50 text-foreground border border-border rounded-full font-medium hover:bg-card hover:border-primary/50 transition-all duration-300"
              >
                <span>{language === "en" ? "Collapse" : "Contrair"}</span>
                <ChevronUp className="w-5 h-5" />
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
