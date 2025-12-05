import { createProject } from "./actions"

export default function AdminPage() {
  return (
    <main className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Adicionar Novo Projeto</h1>

      <form action={createProject} className="space-y-4">
        {/* Dados Básicos */}
        <div className="grid grid-cols-2 gap-4">
          <input
            name="title"
            placeholder="Título do Projeto"
            required
            className="border p-2 rounded"
          />
          <input
            name="slug"
            placeholder="slug-do-url"
            required
            className="border p-2 rounded"
          />
        </div>

        <input
          type="file"
          name="image"
          required
          accept="image/*"
          className="border p-2 rounded w-full"
        />

        <textarea
          name="description"
          placeholder="Descrição Curta"
          required
          className="border p-2 rounded w-full h-24"
        />
        <textarea
          name="longDescription"
          placeholder="Descrição Longa/Detalhada"
          className="border p-2 rounded w-full h-32"
        />

        {/* Arrays */}
        <div className="grid grid-cols-2 gap-4">
          <input
            name="technologies"
            placeholder="Techs (separe por vírgula): React, SQL"
            className="border p-2 rounded"
          />
          <input
            name="categories"
            placeholder="Categorias: Web, Mobile"
            className="border p-2 rounded"
          />
        </div>

        {/* Configurações */}
        <div className="flex items-center gap-4">
          <label className="flex items-center gap-2">
            <input type="checkbox" name="featured" /> Destaque?
          </label>
          <input
            type="date"
            name="date"
            required
            className="border p-2 rounded"
          />
        </div>

        {/* Links */}
        <div className="grid grid-cols-3 gap-2">
          <input
            name="linkCode"
            placeholder="URL GitHub"
            className="border p-2 rounded"
          />
          <input
            name="linkDemo"
            placeholder="URL Youtube/Demo"
            className="border p-2 rounded"
          />
          <input
            name="linkWebsite"
            placeholder="URL Site Real"
            className="border p-2 rounded"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 w-full font-bold"
        >
          Salvar Projeto
        </button>
      </form>
    </main>
  )
}
