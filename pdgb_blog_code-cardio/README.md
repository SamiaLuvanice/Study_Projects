Code & Cardio Blog 🏃‍♀️☕💻

Blog pessoal minimalista (dark + neon) feito com Next.js 15 (App Router) e Tailwind CSS.
Foco: rotina de treino pela manhã, trabalho durante o dia e estudos fullstack à noite.

✨ Visão Geral

Design: fundo preto, detalhes laranja e rosa, transparências e blur.

Arquitetura: App Router, Layout global, Server/Client Components quando faz sentido.

Conteúdo: sem dados mockados — os posts do usuário são salvos no navegador (localStorage).

Interação: curtir posts (client), criar/editar substituindo pelo mesmo slug, e apagar posts criados.

🚀 Recursos

Navegação global (Home / Sobre).

Home com lista de posts (renderizada por client component que lê do cache).

Página Criar novo post (/new) com persistência em localStorage.

Página de post dinâmico: renderiza do cache no cliente (sem 404).

Botão Curtir e Apagar post (somente para posts do usuário, protegendo os do projeto).

Tema escuro responsivo, tipografia legível e acessibilidade básica.

🧱 Tech Stack

Next.js 15 (App Router + Metadata)

React 18

TypeScript

Tailwind CSS

📦 Scripts NPM
npm install          # instala dependências
npm run dev          # ambiente de desenvolvimento
npm run build        # build de produção
npm start            # roda o build
# opcional:
npx next telemetry disable   # desativa telemetria anônima do Next.js

🖥️ Pré-requisitos

Node.js ≥ 18.18 (recomendado Node 20+)

npm, pnpm ou yarn (use um gerenciador)

🗂️ Estrutura do Projeto
app/
  layout.tsx                 # Layout global (header, footer)
  page.tsx                   # Home: lista de posts do cache + botão Criar
  about/page.tsx             # Página Sobre
  new/page.tsx               # Formulário para criar novo post (client)
  posts/[slug]/page.tsx      # Página do post: delega para o viewer de cache
components/
  PostCard.tsx               # Card visual do post
  LikeButton.tsx             # Botão de curtir (client)
  PostsList.tsx              # Lista que lê do localStorage (client)
  DeletePostButton.tsx       # Botão apagar (somente posts do usuário)
  UserPostViewer.tsx         # Leitor de post do cache na rota dinâmica
app/globals.css              # Estilos globais (Tailwind + tema)
tailwind.config.ts
postcss.config.js
tsconfig.json                # paths `@/*` habilitados
next.config.ts


Alias de importação
O projeto usa @/ para imports absolutos. Garanta no tsconfig.json:

{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": { "@/*": ["*"] }
  }
}

▶️ Como Rodar
npm install
npm run dev
# abra http://localhost:3000

✍️ Como Criar um Post

Clique em “➕ Criar novo post” (no canto direito do header da Home) ou acesse /new.

Preencha Título e Resumo (obrigatórios).

Ao salvar, o post é gravado em localStorage e aparece na Home.

O slug é gerado a partir do título (se repetir, o post é substituído).

O botão 🗑️ Apagar aparece só em posts criados por você (cache do navegador).

♻️ Como Apagar um Post

Na Home: botão 🗑️ Apagar no card (canto superior direito).

Na página do post: botão Apagar post (se for do usuário).

A remoção atualiza a lista automaticamente.

🎨 Paleta & Estilo

Fundo: preto (#000, com gradientes suaves em globals.css)

Laranja: #f97316

Rosa: #ec4899

Transparência: bg-black/40 + backdrop-blur-md

Sombra suave: shadow-glow (configurada no Tailwind)

♿ Acessibilidade & SEO

aria-label em links de ação.

Metadados por página via metadata/generateMetadata.

Contraste alto e tipografia legível.

⚠️ Limitações (por design)

Os posts ficam apenas no navegador onde foram criados (cache local).

Se limpar o cache ou abrir em outro dispositivo, eles não aparecem.

Links de posts só funcionam naquele navegador (pois o conteúdo é carregado do localStorage).

🛣️ Roadmap (sugestões de evolução)

Persistência real: API Routes + banco (ex.: Prisma + SQLite/Postgres).

MDX para posts ricos (/content/*.mdx).

Autenticação (NextAuth) para posts por usuário.

Upload de capa e editor com markdown.

Busca e filtros na Home.

Export/Import de posts do cache (JSON) para portar conteúdo entre dispositivos.

Feito com 💙, café e endorfinas no Code & Cardio Blog.
Sugestões de melhoria? Abra uma issue ou mande um PR!