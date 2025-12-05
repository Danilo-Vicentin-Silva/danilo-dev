"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Github, ExternalLink, Play, Calendar, Folder } from "lucide-react"
import { Button } from "@/components/ui/button"
import { projects } from "@/lib/projects-data"
import { useApp } from "@/contexts/app-context"

export default function ProjectPage() {
  const params = useParams()
  const id = params.id as string
  const project = projects.find((p) => p.id === id)
  const { t } = useApp()

  if (!project) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Projeto não encontrado</h1>
          <Link href="/#projetos" className="text-primary hover:underline">
            Voltar aos projetos
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background pt-8 pb-24">
      <div className="max-w-4xl mx-auto px-4">
        {/* Back button */}
        <Link
          href="/#projetos"
          className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {t.projects.backToProjects}
        </Link>

        {/* Project image */}
        <div className="relative h-64 md:h-96 bg-primary/30 rounded-2xl overflow-hidden mb-8">
          <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" priority />
          <div className="absolute inset-0 flex items-center justify-center">
            <Folder className="w-16 h-16 text-primary/50" />
          </div>
        </div>

        {/* Project header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
          <div>
            {project.featured && (
              <span className="inline-block bg-primary/20 border border-primary text-primary text-xs px-3 py-1 rounded-full mb-4">
                {t.projects.featured}
              </span>
            )}
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">{project.title}</h1>
            <div className="flex items-center gap-2 text-foreground/60 text-sm">
              <Calendar className="w-4 h-4" />
              {t.projects.createdAt} {project.createdAt}
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-3">
            {project.links.code && (
              <Button
                asChild
                variant="outline"
                className="border-border text-foreground hover:bg-foreground/10 bg-transparent"
              >
                <Link href={project.links.code} target="_blank">
                  <Github className="w-4 h-4 mr-2" />
                  {t.projects.viewCode}
                </Link>
              </Button>
            )}
            {project.links.website && (
              <Button asChild className="bg-primary hover:bg-accent text-primary-foreground">
                <Link href={project.links.website} target="_blank">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  {t.projects.visitWebsite}
                </Link>
              </Button>
            )}
            {project.links.demo && (
              <Button
                asChild
                variant="outline"
                className="border-red-500/50 text-red-400 hover:bg-red-500/10 bg-transparent"
              >
                <Link href={project.links.demo} target="_blank">
                  <Play className="w-4 h-4 mr-2" />
                  {t.projects.watchDemo}
                </Link>
              </Button>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-foreground/70 text-lg leading-relaxed mb-8">{project.longDescription}</p>

        {/* Technologies */}
        <div>
          <h2 className="text-foreground font-semibold text-lg mb-4">{t.projects.technologiesUsed}</h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span key={tech} className="bg-card border border-border text-foreground px-4 py-2 rounded-lg">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
