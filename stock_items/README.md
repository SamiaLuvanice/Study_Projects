
# Stock Items (projeto de estudo)

Este repositório contém uma pequena aplicação em React criada com Vite que implementa um CRUD simples para gerenciamento de itens de estoque. O objetivo é praticar conceitos essenciais do ecossistema React e o fluxo de construção de aplicações: componentização, roteamento, gerenciamento de estado e formulários.

## Tecnologias e ferramentas (destaque)

- React 19 (JSX, componentes funcionais)
- Vite (bundler / dev server com HMR)
- React Router Dom (roteamento de páginas / rotas aninhadas)
- Context API + custom hook (`useStock`) para gerenciamento de estado compartilhado
- ESLint (regras básicas e plugins para React e hooks)
- Prop-types (validação de props)
- Estrutura modular com componentes, páginas e entidades

## Habilidades praticadas

- Componentização e composição de UI
- Criação e consumo de Contexts (Context API)
- Hooks personalizados (reutilização de lógica com `useStock`)
- CRUD básico (criar, listar, mostrar, atualizar, remover itens)
- Roteamento e rotas aninhadas com `react-router-dom`
- Validação simples com `prop-types`
- Boas práticas de estrutura de projeto e separação de responsabilidades

## Estrutura principal do projeto

- `src/main.jsx` — bootstrapping do React + Router
- `src/App.jsx` — ponto de montagem das rotas
- `src/router.jsx` — definição das rotas da aplicação
- `src/contexts/StockContext.jsx` — Context para armazenamento dos itens
- `src/hooks/useStock.js` — hook customizado para lógica de estoque
- `src/entities/StockItem.js` — definição / modelo de entidade (Item de Estoque)
- `src/components/` — componentes reaproveitáveis (formulários, tabela, botões)
- `src/pages/` — páginas e subpáginas (List, Create, Show, Update)

## Como executar (PowerShell)

Abra o PowerShell na raiz do projeto e execute:

```powershell
npm install
npm run dev
```

Em seguida, acesse http://localhost:5173 (ou a porta indicada pelo Vite).

Comandos úteis:

```powershell
npm run build    # para gerar build de produção
npm run preview  # para pré-visualizar o build gerado
npm run lint     # rodar ESLint
```

## Contrato rápido (inputs / outputs)

- Input: formulários de criação/edição de itens — campos (nome, quantidade, preço, etc.)
- Output: lista atualizada de itens de estoque exibida em uma tabela, páginas de detalhe e mensagens de ação (remoção, sucesso)


## Próximos passos (sugestões)

- Adicionar persistência com localStorage ou uma API REST
- Testes unitários / de integração (Jest + React Testing Library)
- Melhorar a validação de formulários (Yup + Formik ou react-hook-form)
- Introduzir TypeScript para tipos e linting mais forte

## Licença

Conteúdo para fins de estudo. Sinta-se à vontade para copiar e adaptar para aprendizado.
