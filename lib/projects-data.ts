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
    id: "guarabyte-protocolo-ods",
    title: "GuaraByte-Protocolo-ODS",
    description:
      "Projeto desenvolvido em Python para a GameJam 2025 focado em ODS.",
    longDescription:
      "Jogo ou aplicação desenvolvida utilizando Python durante a GameJam 2025, abordando o tema Protocolo ODS.",
    image: "/images/guarabyte.webp",
    technologies: ["Python"],
    category: ["Todos", "Python", "Game Dev"],
    featured: true,
    createdAt: "2025",
    links: {
      code: "https://github.com/Danilo-Vicentin-Silva/GameJam2025-GuaraByte-Protocolo-ODS.git",
      website:
        "https://github.com/Danilo-Vicentin-Silva/GameJam2025-GuaraByte-Protocolo-ODS.git",
      demo: "https://www.youtube.com/embed/zm2dgu9QdHI?si=3skdUJDbC2yH7sm9",
    },
  },
  {
    id: "os-7-pilares-wiki",
    title: "Os 7 Pilares - Wiki",
    description: "Wiki interativa desenvolvida com ecossistema React e Vite.",
    longDescription:
      "Plataforma de documentação e conhecimento (Wiki) construída com alta performance usando Vite, Typescript e React.",
    image: "/images/seven-pilars-wiki.webp",
    technologies: ["Vite", "Typescript", "React"],
    category: ["Todos", "React", "Front-end"],
    featured: true,
    createdAt: "2025",
    links: {
      code: "https://github.com/Danilo-Vicentin-Silva/os-7-pilares-wiki",
      website: "https://os-7-pilares-wiki.vercel.app",
      demo: "https://www.youtube.com/embed/W_6QjdD7cEk?si=Ns4H4zBQPI7KR10N",
    },
  },
  {
    id: "os-7-pilares",
    title: "Os 7 Pilares",
    description: "Projeto web fundamental focado em design e estruturação.",
    longDescription:
      "Website desenvolvido com tecnologias fundamentais da web (HTML, CSS, JS) com layout projetado no Figma.",
    image: "/images/seven-pilars.webp",
    technologies: ["HTML", "CSS", "Javascript", "Figma"],
    category: ["Todos", "Front-end"],
    featured: false,
    createdAt: "2024",
    links: {
      code: "https://github.com/Danilo-Vicentin-Silva/os-7-pilares",
      website: "https://danilo-vicentin-silva.github.io/os-7-pilares/",
      demo: "https://www.youtube.com/embed/OOz8Jw_XxC8?si=K0yk4iEDbBkZeWvD",
    },
  },
  {
    id: "landing-page-wine",
    title: "Landing Page Wine",
    description:
      "Landing page moderna e responsiva utilizando Next.js e Tailwind.",
    longDescription:
      "Exemplo de Landing Page de alta conversão desenvolvida com Next.js, tipagem estática com Typescript e estilização via Tailwind CSS.",
    image: "/images/landing-page-example.webp",
    technologies: ["Next.js", "Typescript", "Tailwind", "Figma"],
    category: ["Todos", "Next.js", "Front-end"],
    featured: true,
    createdAt: "2025",
    links: {
      code: "https://github.com/Danilo-Vicentin-Silva/landing-page-example",
      website: "https://landing-page-example-wine.vercel.app/",
      demo: "https://www.youtube.com/embed/BjVJaCdmPxg?si=1c_YwTDIGx4BDB-z",
    },
  },
  {
    id: "data-galaxy",
    title: "Data Galaxy",
    description: "Aplicação front-end desenvolvida com Next.js e React.",
    longDescription:
      "Projeto explorando recursos do Next.js e React para manipulação e visualização de dados.",
    image: "/images/data-galaxy.webp",
    technologies: ["Next.js", "Typescript", "React"],
    category: ["Todos", "Next.js", "React"],
    featured: false,
    createdAt: "2024",
    links: {
      code: "https://github.com/Danilo-Vicentin-Silva/Data-Galaxy",
      website: "https://data-galaxy.vercel.app/",
      demo: "https://www.youtube.com/embed/1pd2czSTis8?si=7ImOVcTt51DAvm0r",
    },
  },
  {
    id: "racing-f1",
    title: "Racing F1",
    description: "Projeto temático de Fórmula 1 utilizando JavaScript Vanilla.",
    longDescription:
      "Aplicação interativa sobre Fórmula 1, demonstrando manipulação de DOM e lógica com JavaScript puro.",
    image: "/images/racing-f1.webp",
    technologies: ["JavaScript", "HTML", "CSS"],
    category: ["Todos", "Front-end", "JavaScript"],
    featured: false,
    createdAt: "2024",
    links: {
      code: "https://github.com/Danilo-Vicentin-Silva/RacingF1",
      website: "https://danilo-vicentin-silva.github.io/RacingF1/",
      demo: "https://www.youtube.com/embed/d0Xqo_2e2Gg?si=E5iUKBdU2VI3AK1i",
    },
  },
  {
    id: "task-list",
    title: "Task List",
    description: "Gerenciador de tarefas construído com React e Typescript.",
    longDescription:
      "Aplicação clássica de To-Do List para gerenciamento de produtividade pessoal.",
    image: "/images/task-list.webp",
    technologies: ["React", "Typescript"],
    category: ["Todos", "React", "Front-end"],
    featured: false,
    createdAt: "2024",
    links: {
      code: "https://github.com/Danilo-Vicentin-Silva/Task-list",
      website: "https://danilotasklist.netlify.app/",
      demo: "https://www.youtube.com/embed/yHyDs4zM680?si=7r9V6ssbnnJxvW7P",
    },
  },
  {
    id: "login-screen",
    title: "Tela de Login",
    description: "Interface de autenticação focada em HTML e CSS.",
    longDescription:
      "Desenvolvimento de interface de usuário para telas de login com foco em responsividade e design.",
    image: "/images/login-screen.webp",
    technologies: ["HTML", "CSS"],
    category: ["Todos", "Front-end"],
    featured: false,
    createdAt: "2024",
    links: {
      code: "https://github.com/Danilo-Vicentin-Silva/landing-page-example",
      website: "https://landing-page-example-wine.vercel.app/",
      demo: "https://www.youtube.com/embed/-7OX4wTwnnE?si=E0uC2b10axNUWN4E",
    },
  },
  {
    id: "cordel-moderno",
    title: "Cordel Moderno",
    description:
      "Site cultural estilizado com CSS para representar a literatura de cordel.",
    longDescription:
      "Projeto de estudo focado na estilização CSS para criar uma experiência visual baseada na literatura de cordel brasileira.",
    image: "/images/modern-cordel.webp",
    technologies: ["HTML", "CSS"],
    category: ["Todos", "Front-end"],
    featured: false,
    createdAt: "2024",
    links: {
      code: "https://github.com/Danilo-Vicentin-Silva/Cordel-Moderno",
      website: "https://danilo-vicentin-silva.github.io/Cordel-Moderno/",
      demo: "https://www.youtube.com/embed/nwvz4tZiZkg?si=DGQple8VULWn_uf0",
    },
  },
  {
    id: "site-android",
    title: "Site Android",
    description: "Réplica ou site temático sobre o mascote Android.",
    longDescription:
      "Projeto desenvolvido para praticar HTML e CSS, criando um site temático sobre a história do Android.",
    image: "/images/android-site.webp",
    technologies: ["HTML", "CSS"],
    category: ["Todos", "Front-end"],
    featured: false,
    createdAt: "2024",
    links: {
      code: "https://github.com/Danilo-Vicentin-Silva/Site-Android",
      website: "https://danilo-vicentin-silva.github.io/Site-Android/",
      demo: "https://www.youtube.com/embed/Riixv2Zz16Y?si=HSY4xcRdPa3zaLWz",
    },
  },
]

export const categories = [
  "Todos",
  "Destaque",
  "React",
  "Next.js",
  "Front-end",
  "Python",
  "JavaScript",
  "Game Dev",
]
