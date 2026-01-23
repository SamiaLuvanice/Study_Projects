# 📝 Task API - TypeScript

Uma API RESTful simples para gerenciamento de tarefas, desenvolvida com **TypeScript** e **Express** como projeto de estudos.

## 🚀 Tecnologias

- **TypeScript** - Superset JavaScript com tipagem estática
- **Express** - Framework web minimalista para Node.js
- **Zod** - Biblioteca de validação e schema de dados
- **tsx** - Executor TypeScript para desenvolvimento

## 📋 Funcionalidades

O projeto implementa um CRUD completo para gerenciamento de tarefas:

- ✅ Listar todas as tarefas
- ✅ Buscar tarefa por ID
- ✅ Criar nova tarefa
- ✅ Atualizar tarefa existente
- ✅ Deletar tarefa

### Estrutura de uma Tarefa

```typescript
{
  id: number;
  title: string;
  description: string;
  status: 'todo' | 'doing' | 'done';
  priority: 'low' | 'medium' | 'high';
  createdAt: Date;
  updatedAt: Date;
}
```

## 🛠️ Instalação

1. Clone o repositório
```bash
git clone <url-do-repositorio>
cd typescript_task_api
```

2. Instale as dependências
```bash
npm install
```

## 🎮 Como Usar

### Modo Desenvolvimento
Inicia o servidor com hot reload:
```bash
npm run dev
```

### Build para Produção
Compila o TypeScript para JavaScript:
```bash
npm run build
```

### Executar Build
Inicia o servidor com código compilado:
```bash
npm start
```

## 📁 Estrutura do Projeto

```
typescript_task_api/
├── src/
│   ├── controllers/
│   │   └── TaskController.ts  # Controladores da API
│   ├── models/
│   │   └── Task.ts            # Modelo e lógica da entidade Task
│   └── server.ts              # Configuração do servidor Express
├── node_modules/              # Dependências instaladas
├── build/                     # Código compilado (gerado após build)
├── .gitignore                 # Arquivos ignorados pelo Git
├── tsconfig.json              # Configuração do TypeScript
├── package.json               # Dependências e scripts
└── README.md                  # Documentação do projeto
```

## 🔧 Configuração

O servidor roda por padrão na porta **3000**. Para alterar, defina a variável de ambiente:

```bash
PORT=4000 npm run dev
```

## 📚 Aprendizados

Este projeto de estudos aborda:

- Configuração de projeto TypeScript do zero
- Tipagem estática e interfaces
- Classes e métodos estáticos
- CRUD em memória
- Express com TypeScript
- Utility Types (`Omit`, `Partial`)
- ES Modules

## 📝 Licença

ISC

---

💡 **Projeto desenvolvido para fins de aprendizado**
