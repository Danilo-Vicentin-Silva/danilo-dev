// lib/get-projects.ts
import { sql } from "@neondatabase/serverless"

// Defina a interface aqui ou importe de um arquivo de types
export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  technologies: string[]
  category: string[]
  featured: boolean
  createdAt: string
  links: {
    code?: string
    demo?: string
    website?: string
  }
}

export async function getProjects(): Promise<Project[]> {
  // Adicionei no-store para garantir que sempre busque dados frescos se você adicionar um novo
  const { rows } = await sql`SELECT * FROM projects ORDER BY created_at DESC`

  return rows.map((row) => ({
    id: row.slug,
    title: row.title,
    description: row.description,
    longDescription: row.long_description,
    image: row.image_url,
    technologies: row.technologies,
    category: row.categories,
    featured: row.featured,
    createdAt: row.created_at.toString(),
    links: {
      code: row.link_code || undefined,
      demo: row.link_demo || undefined,
      website: row.link_website || undefined,
    },
  }))
}
