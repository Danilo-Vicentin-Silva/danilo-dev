# 📚 Documentação Completa - Portfólio Danilo

Bem-vindo! Este documento detalha toda a estrutura, funcionalidades e tecnologias utilizadas neste projeto de portfólio.

---

## 📋 Índice

1. [Visão Geral](#visão-geral)
2. [Estrutura do Projeto](#estrutura-do-projeto)
3. [Stack Tecnológico](#stack-tecnológico)
4. [Componentes Principais](#componentes-principais)
5. [Sistema de Tradução](#sistema-de-tradução)
6. [Tema e Personalização](#tema-e-personalização)
7. [Hooks Customizados](#hooks-customizados)
8. [Instalação e Setup](#instalação-e-setup)
9. [Scripts Disponíveis](#scripts-disponíveis)
10. [Padrões de Código (Clean Code)](#padrões-de-código-clean-code)
11. [Estrutura de Dados](#estrutura-de-dados)
12. [Contribuindo](#contribuindo)

---

## 🎯 Visão Geral

Este é um **portfólio pessoal moderno e responsivo** desenvolvido em **Next.js** com **TypeScript**. O projeto apresenta:

- ✨ **Design moderno e responsivo** com animações suaves
- 🌙 **Tema claro/escuro** com persistência em localStorage
- 🌍 **Suporte multilíngue** (Português e Inglês)
- 📱 **Mobile-first responsive** com Tailwind CSS
- ⚡ **Performance otimizada** com Next.js 13+ App Router
- ♿ **Acessibilidade** com ARIA labels e semântica HTML
- 🎨 **UI Components** reutilizáveis baseados em Radix UI

**Autor**: Danilo Vicentin Silva  
**Especialidade**: Power Platform, Análise de Dados, Desenvolvimento Web  
**Deploy**: Vercel

---

## 🏗️ Estrutura do Projeto

```
danilo-dev/
├── app/                          # App Router do Next.js
│   ├── layout.tsx               # Layout raiz com metadados
│   ├── page.tsx                 # Página principal (home)
│   ├── globals.css              # Estilos globais
│   └── projeto/
│       └── [id]/
│           └── page.tsx         # Página de detalhes do projeto
│
├── components/                   # Componentes React reutilizáveis
│   ├── about.tsx                # Seção Sobre
│   ├── back-to-top.tsx          # Botão voltar ao topo
│   ├── contact.tsx              # Seção Contato
│   ├── experience.tsx           # Seção Experiência
│   ├── footer.tsx               # Rodapé
│   ├── header.tsx               # Cabeçalho/Navegação
│   ├── hero.tsx                 # Seção Hero (topo)
│   ├── language-toggle.tsx      # Seletor de idioma
│   ├── projects.tsx             # Seção Projetos
│   ├── skills.tsx               # Seção Habilidades ⭐
│   ├── theme-provider.tsx       # Provider de tema
│   ├── theme-toggle.tsx         # Seletor de tema
│   ├── icons/                   # Ícones customizados
│   └── ui/                      # Componentes de UI (Radix + Shadcn)
│       ├── button.tsx
│       ├── card.tsx
│       ├── accordion.tsx
│       ├── tabs.tsx
│       └── ... (mais 40+ componentes)
│
├── contexts/                     # Context API
│   └── app-context.tsx          # Contexto global (tema, idioma)
│
├── hooks/                        # Custom React Hooks
│   ├── use-mobile.ts            # Detecta viewport mobile
│   ├── use-scroll-animation.tsx # Animações ao scroll
│   └── use-toast.ts             # Sistema de notificações
│
├── lib/                          # Utilitários e funções auxiliares
│   ├── utils.ts                 # Funções genéricas
│   ├── get-projects.ts          # Fetch de projetos
│   ├── projects-data.ts         # Dados dos projetos
│   ├── translations.ts          # (deprecated) Ver translations/
│   └── translations/            # Sistema de tradução
│       ├── index.ts             # Função getTranslation()
│       ├── types.ts             # Tipos de idioma
│       ├── about.ts
│       ├── contact.ts
│       ├── experience.ts
│       ├── footer.ts
│       ├── hero.ts
│       ├── nav.ts
│       ├── projects.ts
│       ├── skills.ts
│       └── theme.ts
│
├── types/                        # Tipos TypeScript globais
│   └── react-icons.d.ts         # Tipos para react-icons
│
├── public/                       # Arquivos estáticos
│   ├── favicons/                # Ícones do navegador
│   ├── images/                  # Imagens do portfólio
│   └── ...
│
├── styles/                       # Estilos adicionais
│   └── globals.css
│
├── middleware.ts                # Middleware do Next.js
├── next.config.mjs              # Configuração do Next.js
├── tsconfig.json                # Configuração TypeScript
├── tailwind.config.ts           # Configuração Tailwind CSS
├── postcss.config.mjs           # Configuração PostCSS
├── components.json              # Configuração Shadcn/ui
├── package.json                 # Dependências do projeto
└── README.md                    # Readme original
```

---

## 🛠️ Stack Tecnológico

### Core

- **Next.js 14+** - Framework React com SSR/SSG
- **React 18+** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **Node.js/Pnpm** - Gerenciador de pacotes

### Estilização

- **Tailwind CSS** - Framework CSS utilitário
- **PostCSS** - Processador CSS
- **Class Variance Authority** - Variações de componentes
- **clsx** - Utilidade para className condicional

### Componentes & Ícones

- **Radix UI** - Componentes acessíveis sem estilos
- **Shadcn/ui** - Componentes Radix pré-estilizados
- **react-icons** - Biblioteca de ícones (Font Awesome, Simple Icons)
- **lucide-react** - Ícones modernos

### Animações & Transições

- **CSS Transitions** - Animações CSS nativas
- **Tailwind Animation** - Animações do Tailwind

### Formulários & Validação

- **React Hook Form** - Gerenciamento de formulários
- **Zod** - Validação de schemas

### Utilidades

- **date-fns** - Manipulação de datas
- **embla-carousel-react** - Carrossel de imagens
- **sonner** - Toast notifications
- **cmdk** - Comando/palette

### Deploy & Analytics

- **Vercel** - Hospedagem
- **Vercel Analytics** - Análise de performance
- **Vercel Blob** - Armazenamento de arquivos

---

## 🎨 Componentes Principais

### 1. **Skills.tsx** ⭐ (Recentemente Refatorado)

**Propósito**: Exibe todas as habilidades técnicas organizadas por categoria.

**Componentes Sub**:

- `Skills()` - Componente principal
- `SectionHeader()` - Cabeçalho com animação
- `buildSkillCategories()` - Constrói array de categorias
- `SkillCategory()` - Renderiza uma categoria inteira
- `CategoryHeader()` - Indicador colorido + nome
- `SkillsGrid()` - Grid responsivo de habilidades
- `SkillCard()` - Card individual com hover
- `SkillCardContent()` - Ícone + progresso
- `SkillTooltip()` - Tooltip com descrição

**Categorias**:

1. **Power Platform** (Power BI, Power Apps, Power Automate)
2. **Dados** (SQL, DAX)
3. **Ferramentas** (Excel, GitHub)
4. **Programação** (JavaScript, TypeScript, Next.js)
5. **Estudando** (Python, Java, C)

**Recursos**:

- ✅ Ícones reais de cada tecnologia
- ✅ Animações ao scroll com stagger
- ✅ Hover interativo com progresso dinâmico
- ✅ Tooltip descritivo
- ✅ Responsivo (2-6 colunas)
- ✅ Suporte a múltiplos idiomas

### 2. **Header/Navigation**

**Propósito**: Navegação principal com seletor de idioma e tema.

**Funcionalidades**:

- Menu responsivo
- Links para seções (Sobre, Habilidades, Projetos, Contato)
- Toggle de tema (claro/escuro)
- Toggle de idioma (PT/EN)
- Logo/branding

### 3. **Hero.tsx**

**Propósito**: Seção inicial de apresentação.

**Conteúdo**:

- Saudação personalizada
- Descrição profissional
- CTA (Call To Action)
- Animações de entrada

### 4. **Projects.tsx**

**Propósito**: Galeria de projetos com filtros.

**Funcionalidades**:

- Carrossel de projetos
- Filtros por categoria
- Links para repositório, demo, website
- Imagens responsivas
- Cards interativos

### 5. **Experience.tsx**

**Propósito**: Timeline de experiência profissional.

**Recursos**:

- Timeline visual
- Datas e durações
- Descrição de responsabilidades
- Tecnologias utilizadas

### 6. **Contact.tsx**

**Propósito**: Formulário e informações de contato.

**Funcionalidades**:

- Formulário de contato
- Validação de campos
- Links para redes sociais
- Email de contato

---

## 🌐 Sistema de Tradução

### Arquitetura

O sistema utiliza uma abordagem **baseada em objetos estáticos** para melhor performance e type-safety.

**Arquivo Principal**: [`lib/translations/index.ts`](lib/translations/index.ts)

```typescript
// Tipos suportados
type Language = "pt" | "en"

// Função utilitária
function getTranslation(language: Language) {
  return translations[language]
}
```

### Arquivos de Tradução

```
lib/translations/
├── index.ts          # Exports e getTranslation()
├── types.ts          # Type Language
├── hero.ts           # Traduções da seção Hero
├── about.ts          # Traduções da seção Sobre
├── skills.ts         # Traduções das habilidades
├── experience.ts     # Traduções de experiência
├── projects.ts       # Traduções de projetos
├── contact.ts        # Traduções de contato
├── footer.ts         # Traduções do rodapé
├── nav.ts            # Traduções da navegação
└── theme.ts          # Traduções de tema
```

### Como Usar

```typescript
import { useApp } from "@/contexts/app-context"

export function MeuComponente() {
  const { t } = useApp() // t = { skills: {...}, hero: {...}, ... }

  return <h1>{t.skills.title}</h1>
}
```

### Adicionar Nova Tradução

1. Edite o arquivo correspondente em `lib/translations/`
2. Adicione a chave em ambas as versões (pt e en)
3. Use via `t.secao.chave`

---

## 🎭 Tema e Personalização

### Configuração do Tema

**Provider**: [`components/theme-provider.tsx`](components/theme-provider.tsx)
**Context**: [`contexts/app-context.tsx`](contexts/app-context.tsx)

### Temas Disponíveis

- **Dark** (padrão)
- **Light**

### Variáveis CSS

Definidas em `app/globals.css` usando CSS custom properties:

```css
@layer base {
  :root {
    --background: 216, 14%, 20%;
    --foreground: 216, 9%, 98%;
    --primary: 42, 73%, 54%;
    --primary-foreground: 216, 14%, 10%;
    /* ... mais variáveis */
  }
}
```

### Persistência

- Tema salvo em `localStorage` com chave `theme`
- Idioma salvo em `localStorage` com chave `language`
- Carregado no mount do `AppProvider`

---

## 🪝 Hooks Customizados

### `useScrollAnimation()`

**Arquivo**: [`hooks/use-scroll-animation.tsx`](hooks/use-scroll-animation.tsx)

Detecta quando um elemento entra na viewport e dispara animações.

```typescript
const { ref, isVisible } = useScrollAnimation()

<div ref={ref} className={isVisible ? "opacity-100" : "opacity-0"}>
  Animado!
</div>
```

### `useMobile()`

**Arquivo**: [`hooks/use-mobile.ts`](hooks/use-mobile.ts)

Detecta se o dispositivo é mobile (< 768px).

```typescript
const isMobile = useMobile()
// Retorna: boolean
```

### `useToast()`

**Arquivo**: [`hooks/use-toast.ts`](hooks/use-toast.ts)

Gerencia notificações/toasts (Sonner).

```typescript
const { toast } = useToast()

toast.success("Mensagem de sucesso")
toast.error("Mensagem de erro")
```

---

## ⚙️ Instalação e Setup

### Pré-requisitos

- Node.js 18+
- Pnpm (ou npm/yarn)

### Passos

```bash
# 1. Clone o repositório
git clone https://github.com/Danilo-Vicentin-Silva/danilo-dev.git
cd danilo-dev

# 2. Instale as dependências
pnpm install

# 3. Configure variáveis de ambiente (se necessário)
cp .env.example .env.local

# 4. Inicie o servidor de desenvolvimento
pnpm dev

# 5. Abra http://localhost:3000
```

### Variáveis de Ambiente

Atualmente o projeto não requer variáveis de ambiente, mas você pode adicionar em `.env.local`:

```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

---

## 📜 Scripts Disponíveis

```bash
# Desenvolvimento
pnpm dev              # Inicia servidor em :3000

# Build
pnpm build            # Build para produção
pnpm start            # Inicia build de produção

# Qualidade
pnpm lint             # ESLint
pnpm format           # Prettier (se configurado)

# Análise
pnpm analyze          # Bundle analysis (se configurado)
```

---

## 🎯 Padrões de Código (Clean Code)

### Princípios Aplicados

#### 1. **Single Responsibility Principle (SRP)**

Cada componente tem uma responsabilidade única:

```typescript
// ❌ Ruim: Componente faz tudo
function SkillCategory() {
  return (
    <div>
      {/* Header - Responsabilidade 1 */}
      <div className="flex items-center gap-3">...</div>
      {/* Grid - Responsabilidade 2 */}
      <div className="grid">...</div>
    </div>
  )
}

// ✅ Bom: Componentes separados
function SkillCategory() {
  return (
    <div>
      <CategoryHeader />
      <SkillsGrid />
    </div>
  )
}
```

#### 2. **DRY (Don't Repeat Yourself)**

Extração de lógica repetida:

```typescript
// ❌ Antes: Categorias hardcoded
const skillCategories = [
  { name: "Power Platform", color: "#325CD9", skills: [...] },
  { name: "Data", color: "#325CD9", skills: [...] },
  // ...
]

// ✅ Depois: Função que constrói
function buildSkillCategories(t) {
  return [
    {
      name: t.skills.categories.powerPlatform,
      color: "#325CD9",
      skills: [...]
    },
    // ...
  ]
}
```

#### 3. **Componentes Pequenos e Focados**

```typescript
// Componentes extraídos:
;-SectionHeader() - // Header com animação
  CategoryHeader() - // Indicador + título
  SkillsGrid() - // Grid de skills
  SkillCard() - // Card individual
  SkillCardContent() - // Conteúdo do card
  SkillTooltip() // Tooltip descritivo
```

#### 4. **Nomeação Clara e Descritiva**

```typescript
// ❌ Nomes genéricos
const [h, setH] = useState<string | null>(null)
const skills = [...]

// ✅ Nomes específicos
const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
const skillCategories = buildSkillCategories(t)
```

#### 5. **Documentação com JSDoc**

```typescript
/**
 * Renders individual skill card with icon, name, and interactive tooltip
 *
 * @param skill - Skill object with name, icon, and description
 * @param skillIndex - Index within category for animation timing
 * @param categoryIndex - Category index for staggered animations
 * @param isVisible - Whether parent container is in viewport
 * @param isHovered - Whether this skill is currently hovered
 * @param onHover - Callback to update hovered skill
 * @param categoryColor - Color theme for this skill's category
 */
function SkillCard({ ... }) {
  // implementação
}
```

#### 6. **Uso de Type Safety**

```typescript
// Props tipadas
interface SkillCardProps {
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
}

// Ou inline com destruct
function SkillCard({
  skill,
  skillIndex,
  categoryIndex,
  isVisible,
  isHovered,
  onHover,
  categoryColor,
}: {
  // tipos
})
```

#### 7. **Separação de Concerns**

```typescript
// Componente de apresentação (dumb)
function SkillCardContent({ skill, isHovered, categoryColor }) {
  // Apenas renderiza UI
}

// Componente lógico (smart)
function SkillCard({ ... }) {
  // Gerencia lógica e estado
  return <SkillCardContent ... />
}
```

#### 8. **Evitar Callbacks Inline**

```typescript
// ❌ Callback inline
<div onMouseEnter={() => setHoveredSkill(skill.name)}>

// ✅ Função nomeada
<div onMouseEnter={() => onHover(skill.name)}>
```

### Melhores Práticas

- ✅ TypeScript strict mode
- ✅ Props tipadas para todos os componentes
- ✅ Funções pequenas e bem nomeadas
- ✅ Comentários apenas para lógica complexa
- ✅ Componentes funcionais com hooks
- ✅ Evitar prop drilling (usar Context quando necessário)
- ✅ Usar `React.ReactNode` para children
- ✅ aria-hidden/aria-label para acessibilidade

---

## 📊 Estrutura de Dados

### Skills (Habilidades)

```typescript
interface Skill {
  name: string // "JavaScript"
  icon: React.ComponentType<{ className: string }> // SiJavascript
  description: string // "Linguagem de programação para web"
}

interface SkillCategory {
  name: string // "Programação"
  color: string // "#325CD9"
  skills: Skill[] // Array de skills
}
```

### Projects (Projetos)

```typescript
interface Project {
  id: string // "landing-page-wine"
  title: string // "Landing Page Wine"
  description: string // Descrição curta
  longDescription: string // Descrição longa
  image: string // URL da imagem
  technologies: string[] // ["Next.js", "Typescript", "Tailwind"]
  category: string[] // ["Todos", "Next.js", "Front-end"]
  featured: boolean // Aparece em destaque?
  createdAt: string // "2025"
  links: {
    code?: string // Link GitHub
    demo?: string // Link YouTube/Video
    website?: string // Link do projeto
  }
}
```

### Context (App Context)

```typescript
interface AppContextType {
  theme: "light" | "dark"
  toggleTheme: () => void
  language: "pt" | "en"
  setLanguage: (lang: "pt" | "en") => void
  t: Translations // Objeto de traduções
}
```

---

## 🤝 Contribuindo

### Como Contribuir

1. **Faça um Fork** do repositório
2. **Crie uma branch** com sua feature (`git checkout -b feature/AmazingFeature`)
3. **Commit suas mudanças** (`git commit -m 'Add some AmazingFeature'`)
4. **Push para a branch** (`git push origin feature/AmazingFeature`)
5. **Abra um Pull Request**

### Padrões de Commits

```bash
# Features
git commit -m "feat: adiciona novo componente X"

# Bug fixes
git commit -m "fix: corrige erro em componente Y"

# Refactoring
git commit -m "refactor: melhora estrutura do componente Z"

# Documentação
git commit -m "docs: atualiza documentação do projeto"

# Estilos
git commit -m "style: formata código seguindo padrões"
```

### Checklist antes de PR

- [ ] Código segue padrões clean code
- [ ] TypeScript sem erros (`pnpm lint`)
- [ ] Componentes bem nomeados
- [ ] Props tipadas
- [ ] Documentação JSDoc para funções complexas
- [ ] Sem código comentado desnecessário
- [ ] Responsivo em mobile/desktop
- [ ] Acessibilidade verificada

---

## 📞 Contato & Links

- **Portfolio**: https://danilo.dev
- **GitHub**: https://github.com/Danilo-Vicentin-Silva
- **Email**: [seu-email@exemplo.com]
- **LinkedIn**: [Seu LinkedIn]

---

## 📄 Licença

Este projeto está sob licença **MIT**. Veja o arquivo LICENSE para mais detalhes.

---

## 🙏 Agradecimentos

Obrigado por visitar este portfólio! Desenvolvido com ❤️ por Danilo Vicentin Silva.

**Last Updated**: Janeiro 2026  
**Version**: 1.0.0

---

**💡 Dica**: Use `Ctrl+F` para buscar por tópicos específicos nesta documentação!
