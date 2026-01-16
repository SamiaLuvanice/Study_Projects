# User Registration — Guia Rápido

- Projeto de estudo com front-end (Vite + React), back-end (Node.js) e banco com Prisma.

Estrutura:
- `user_registration_api/` — servidor Node + `prisma/schema.prisma`.
- `user_registration_front/` — front (Vite, entrada em `src/main.jsx`).

Requisitos:
- Node.js (v16+), npm

Como rodar (rápido):

1) Back-end
```
cd user_registration_api
npm install
# configurar .env com DATABASE_URL
npx prisma generate
npx prisma migrate dev --name init
node server.js
```

2) Front-end
```
cd user_registration_front
npm install
npm run dev
```

Prisma / DB:
- Esquema em `user_registration_api/prisma/schema.prisma`.
- Comandos úteis: `npx prisma studio`, `npx prisma generate`, `npx prisma migrate reset` (dev).

Testes rápidos:
- Use `curl` ou o cliente HTTP para chamar os endpoints do `server.js` (ver porta no arquivo).

