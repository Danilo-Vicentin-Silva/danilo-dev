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

export const projects: Project[] = [
  {
    id: "dashboard-compras",
    title: "Dashboard de Compras",
    description: "Dashboard interativo desenvolvido em Power BI para análise de indicadores da área de compras.",
    longDescription:
      "Dashboard interativo desenvolvido em Power BI para análise de indicadores da área de compras, incluindo análise de fornecedores, custos e tendências de mercado.",
    image: "/power-bi-dashboard-compras-analytics.jpg",
    technologies: ["Power BI", "DAX", "SQL"],
    category: ["Todos", "Power BI"],
    featured: true,
    createdAt: "30 nov 2025",
    links: {
      code: "https://github.com",
      website: "https://example.com",
      demo: "https://youtube.com",
    },
  },
  {
    id: "automacao-processos",
    title: "Automação de Processos",
    description: "Fluxos automatizados com Power Automate para otimizar processos de aprovação e notificações.",
    longDescription:
      "Fluxos automatizados com Power Automate para otimizar processos de aprovação e notificações na área de compras.",
    image: "/power-automate-workflow-automation.jpg",
    technologies: ["Power Automate", "SharePoint", "Microsoft 365"],
    category: ["Todos", "Power Automate"],
    featured: false,
    createdAt: "15 out 2025",
    links: {
      code: "https://github.com",
    },
  },
  {
    id: "app-gestao",
    title: "App de Gestão",
    description: "Aplicativo desenvolvido com Power Apps para gestão de tarefas e acompanhamento de projetos.",
    longDescription:
      "Aplicativo desenvolvido com Power Apps para gestão de tarefas e acompanhamento de projetos internos.",
    image: "/power-apps-mobile-app-interface.jpg",
    technologies: ["Power Apps", "SharePoint", "Power Automate"],
    category: ["Todos", "Microsoft 365"],
    featured: false,
    createdAt: "20 set 2025",
    links: {
      demo: "https://youtube.com",
    },
  },
  {
    id: "analise-sql",
    title: "Análise de Dados SQL",
    description: "Projeto de análise de dados usando SQL para extração e transformação de informações.",
    longDescription: "Projeto de análise de dados usando SQL para extração e transformação de informações de negócio.",
    image: "/sql-database-analytics-query.jpg",
    technologies: ["SQL", "DAX"],
    category: ["Todos", "SQL"],
    featured: false,
    createdAt: "10 ago 2025",
    links: {
      code: "https://github.com",
    },
  },
]

export const categories = ["Destaque", "Todos", "Microsoft 365", "Power Automate", "Power BI", "SQL", "SharePoint"]
