# PDF with Node (projeto de estudos)

> Exemplo simples de geração de PDF a partir de uma página EJS usando Express e Puppeteer.

**Status**: Estudo / protótipo

**Resumo**
- **Descrição**: Pequeno projeto para aprender a gerar PDFs no servidor com Node.js. O servidor renderiza um template EJS (`src/print.ejs`) com uma lista de passageiros e usa o Puppeteer para produzir um PDF dessa página.
- **Arquivos principais**: `src/server.js`, `src/print.ejs`, `package.json`.

**Pré-requisitos**
- Node.js v14+ e npm instalados.
- Conexão com a internet para carregar o Tailwind via CDN (usado no template). Puppeteer baixa uma versão do Chromium por padrão.

Instalação

```powershell
cd C:\Users\CODED-CED\samia_dev\pdf-with-node
npm install
```

Executando o projeto

```powershell
node src/server.js
```

Depois de executar, abra no navegador:
- `http://localhost:3000/` — visualiza a página renderizada (HTML).
- `http://localhost:3000/pdf` — gera e envia um PDF com o conteúdo da página.

Sugestão: adicionar um script `start` em `package.json` para facilitar:

```json
"scripts": {
  "start": "node src/server.js"
}
```

Com isso, rode `npm start`.

Observações técnicas e solução de problemas

- O servidor usa `puppeteer` para gerar o PDF. Em alguns ambientes Windows ou servidores sem dependências do Chrome, pode haver erro ao iniciar o Chromium. Algumas abordagens para resolver:
  - Instalar uma versão compatível do Chromium/Chrome no sistema e apontar `executablePath` em `puppeteer.launch()`.
  - Tentar `puppeteer.launch({ args: ['--no-sandbox','--disable-setuid-sandbox'] })` se houver problemas de sandbox (mais comum em containers).
  - Se preferir, use `puppeteer-core` e gerencie manualmente o binário do navegador.

- Atualmente o exemplo abre `http://localhost:3000/` internamente para gerar o PDF. Assegure que a porta `3000` esteja disponível.

Customização rápida

- Para alterar os dados mostrados no relatório, edite o array `passengers` dentro de `src/server.js`.
- Para alterar o layout, edite `src/print.ejs` (usa Tailwind via CDN).
- Para mudar o formato do PDF, edite as opções dentro de `page.pdf()` em `src/server.js` (por exemplo `format`, `margin`, etc.).

Segurança e uso em produção

- Este projeto é um protótipo de estudo. Em produção, não deixe endpoints que geram arquivos públicos sem autenticação quando contiverem dados sensíveis.
- Verifique opções de timeout, pool de navegadores (reusar instance de browser) e validação de entrada se for expor esse endpoint em ambiente real.

Próximos passos sugeridos

- Adicionar script `start` em `package.json`.
- Reusar a instância do browser (abrir 1 browser por processo) em vez de abrir/fechar a cada requisição para melhorar performance.
- Adicionar testes básicos e instruções para dockerização (opções de Puppeteer em containers).

Licença

Projeto de estudo — sinta-se à vontade para adaptar. Coloque sua licença preferida aqui.

Créditos

Baseado em um exemplo simples de servidor Express + EJS + Puppeteer.
