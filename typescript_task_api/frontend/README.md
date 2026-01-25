# Task Manager Frontend

Frontend moderno desenvolvido com Next.js 14 (App Router) para integração com a API de gerenciamento de tarefas.

## 🚀 Tecnologias

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **TailwindCSS** - Estilização utilitária
- **React Query** - Gerenciamento de estado do servidor
- **React Hook Form** - Formulários performáticos
- **Framer Motion** - Animações fluidas
- **Axios** - Cliente HTTP
- **Sonner** - Notificações toast elegantes
- **Lucide React** - Ícones modernos

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Configurar variável de ambiente
# Certifique-se de que o arquivo .env.local existe com:
# NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

## 🏃‍♂️ Executar

```bash
# Modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar produção
npm start
```

O aplicativo estará disponível em [http://localhost:3001](http://localhost:3001)

## 🎨 Funcionalidades

- ✅ **Dashboard Moderno** - Interface limpa e intuitiva
- ✅ **CRUD Completo** - Criar, ler, atualizar e deletar tarefas
- ✅ **Filtros Dinâmicos** - Filtrar por status e prioridade
- ✅ **Estatísticas em Tempo Real** - Cards com métricas das tarefas
- ✅ **Modal Responsivo** - Formulário para criar/editar tarefas
- ✅ **Notificações Toast** - Feedback visual das ações
- ✅ **Animações Suaves** - Experiência de usuário aprimorada
- ✅ **Design Responsivo** - Funciona em todos os dispositivos
- ✅ **Tipagem TypeScript** - Código seguro e manutenível

## 🔧 Configuração da API

Certifique-se de que o backend está rodando em `http://localhost:3000` antes de iniciar o frontend.

Para alterar a URL da API, edite o arquivo `.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

## 📁 Estrutura do Projeto

```
frontend/
├── src/
│   ├── app/              # App Router (Next.js 14)
│   │   ├── layout.tsx    # Layout principal
│   │   ├── page.tsx      # Página inicial
│   │   ├── globals.css   # Estilos globais
│   │   └── providers.tsx # Providers (React Query)
│   ├── components/       # Componentes React
│   │   ├── TaskCard.tsx
│   │   ├── TaskForm.tsx
│   │   ├── TaskList.tsx
│   │   └── FilterBar.tsx
│   ├── services/         # Serviços de API
│   │   └── api.ts
│   ├── types/           # Tipos TypeScript
│   │   └── task.ts
│   └── lib/             # Utilitários
│       └── utils.ts
├── public/              # Arquivos estáticos
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.mjs
```

## 🎯 Próximos Passos

- [ ] Implementar dark mode
- [ ] Adicionar drag-and-drop para reorganizar tarefas
- [ ] Implementar busca por texto
- [ ] Adicionar paginação
- [ ] Implementar autenticação
- [ ] Adicionar testes (Jest + Testing Library)

## 📝 Licença

MIT
