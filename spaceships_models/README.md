# Spaceships Models — Projeto de estudo Next.js

Projeto de estudo construído com Next.js (app router) que organiza e apresenta dados de naves espaciais a partir do arquivo `data/spaceships.json`.

## Objetivo

- Praticar Next.js (App Router), rotas dinâmicas, pages e layouts.
- Trabalhar com dados locais (JSON) e rotas estáticas/dinâmicas.
- Ter uma base simples para experimentar components e estilos.

## Funcionalidades

- Listagem de naves em `/spaceships`.
- Página de detalhe de cada nave em `/spaceships/[id]`.
- Páginas de categorias em `/categories` e `/categories/[category]`.
- Layout global em `src/app/layout.tsx` e estilos em `src/app/globals.css`.

## Tecnologias

- Next.js (App Router)
- React
- TypeScript (configuração presente no projeto)
- CSS (arquivo `globals.css`)

## Estrutura principal do projeto

- `src/app/` — código da aplicação (rotas, layouts, páginas)
  - `page.tsx` — página principal
  - `categories/` — rotas relacionadas a categorias
  - `spaceships/` — listagem e detalhe das naves
- `data/spaceships.json` — dados de exemplo das naves
- `public/images/` — imagens usadas pelo projeto

### Arquivos importantes

- `next.config.ts` — configuração do Next.js
- `tsconfig.json` — configuração TypeScript
- `package.json` — scripts e dependências

## Como executar (Windows - PowerShell)

1. Instale dependências:

```powershell
npm install
```

2. Rode em modo de desenvolvimento:

```powershell
npm run dev
```

3. Build para produção e executar:

```powershell
npm run build
npm start
```

Observação: se você usa `pnpm` ou `yarn`, substitua os comandos adequadamente.

## Rotas úteis (exemplos)

- `/` — página inicial
- `/spaceships` — listagem de naves
- `/spaceships/[id]` — detalhe da nave (substitua `[id]` pelo id presente em `data/spaceships.json`)
- `/categories` — listagem de categorias
- `/categories/[category]` — página filtrada por categoria

## Desenvolvimento

- Os dados estão em `data/spaceships.json`. Para testar novos itens, edite esse arquivo.
- Prefira criar componentes sob `src/app` e manter o layout em `layout.tsx`.

## Contribuição

- Abra uma issue para discutir alterações maiores.
- Envie pull requests simples com mudanças pequenas e descrições claras.

## Próximos passos sugeridos

- Adicionar testes unitários.
- Implementar paginação e filtros avançados.
- Adicionar deploy (Vercel, Netlify).

## Licença

Este repositório não tem licença definida — adicione uma `LICENSE` se quiser torná-lo reutilizável.
