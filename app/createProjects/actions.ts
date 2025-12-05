"use server"

import { sql } from "@vercel/postgres"
import { put } from "@vercel/blob"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function createProject(formData: FormData) {
  // 1. Upload da Imagem para o Vercel Blob
  const imageFile = formData.get("image") as File
  let imageUrl = ""

  if (imageFile && imageFile.size > 0) {
    const blob = await put(imageFile.name, imageFile, {
      access: "public",
    })
    imageUrl = blob.url
  }

  // 2. Tratar os dados do Form
  const title = formData.get("title") as string
  const slug = formData.get("slug") as string
  const description = formData.get("description") as string
  const longDescription = formData.get("longDescription") as string

  // Converter string separada por vírgula em Array
  const technologies = (formData.get("technologies") as string)
    .split(",")
    .map((t) => t.trim())
  const categories = (formData.get("categories") as string)
    .split(",")
    .map((c) => c.trim())

  const featured = formData.get("featured") === "on"
  const date = formData.get("date") as string // YYYY-MM-DD

  const linkCode = formData.get("linkCode") as string
  const linkDemo = formData.get("linkDemo") as string
  const linkWebsite = formData.get("linkWebsite") as string

  // 3. Inserir no Banco de Dados (Neon)
  await sql`
    INSERT INTO projects (
      slug, title, description, long_description, image_url, 
      technologies, categories, featured, created_at, 
      link_code, link_demo, link_website
    ) VALUES (
      ${slug}, ${title}, ${description}, ${longDescription}, ${imageUrl},
      ${technologies as any}, ${categories as any}, ${featured}, ${date},
      ${linkCode || null}, ${linkDemo || null}, ${linkWebsite || null}
    )
  `

  // 4. Limpar o Cache para o projeto aparecer na hora
  revalidatePath("/")
  revalidatePath("/projects")

  redirect("/")
}
