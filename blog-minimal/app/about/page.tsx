export const metadata = {
  title: "Sobre — Blog Minimalista",
  description:
    "Blog pessoal criado como atividade da tutoria do Programa Desenvolve (Grupo Boticário). Explora Next.js (App Router), Server/Client Components e um design minimalista em dark.",
};

export default function AboutPage() {
  return (
    <section className="max-w-4xl mx-auto space-y-12">
      {/* Hero */}
      <header className="text-center space-y-4 pt-12 pb-8">
        <div className="mx-auto h-20 w-20 rounded-2xl bg-black/40 backdrop-blur-md border border-pink-500/30 flex items-center justify-center shadow-glow">
          <span className="text-2xl font-bold gradient">SL</span>
        </div>
        <h1 className="gradient font-bold text-4xl">Sobre mim</h1>
        <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
          Este é um <strong>blog pessoal</strong> criado como parte de uma
          atividade proposta na tutoria do <strong>Programa Desenvolve</strong>,
          promovido pelo{" "}
          <span className="text-brand-orange font-semibold">Grupo Boticário</span>.
        </p>
      </header>

      {/* Cards */}
      <div className="grid gap-8 md:grid-cols-2">
        <article className="card p-6 space-y-3">
          <h2 className="text-xl font-semibold text-brand-orange">
            Objetivo do projeto
          </h2>
          <p className="text-gray-200 leading-relaxed">
            Explorar o <strong>Next.js (App Router)</strong> com foco em arquitetura,
            desempenho e DX: usar <em>Server Components</em> para páginas/listas e
            <em> Client Components</em> para interações (ex.: botão de curtir).
          </p>
        </article>

        <article className="card p-6 space-y-3">
          <h2 className="text-xl font-semibold text-brand-pink">
            Design & Acessibilidade
          </h2>
          <p className="text-gray-200 leading-relaxed">
            Visual minimalista com <strong>fundo preto</strong>, detalhes em{" "}
            <span className="text-brand-orange font-semibold">laranja</span> e{" "}
            <span className="text-brand-pink font-semibold">rosa</span>, transparências e blur.
            Priorizo tipografia legível, contraste adequado e navegação simples.
          </p>
        </article>
      </div>

      {/* Stack / Tecnologias */}
      <section className="card p-6 space-y-4">
        <h2 className="text-xl font-semibold">Stack do projeto</h2>
        <ul className="flex flex-wrap gap-3">
          {["Next.js 15", "TypeScript", "App Router", "Server/Client Components", "Tailwind CSS"].map((t) => (
            <li
              key={t}
              className="px-4 py-1.5 text-sm rounded-full bg-black/40 border border-orange-500/20"
            >
              {t}
            </li>
          ))}
        </ul>
      </section>

      {/* Contato / Redes */}
      <section className="card p-8 space-y-6">
        <h2 className="text-2xl font-semibold mb-2">Contato & Redes</h2>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
          {/* Botão principal */}
          <a
            href="mailto:samia.luvanice.dev@gmail.com"
            aria-label="Enviar e-mail para Samia"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-brand-orange to-brand-pink hover:opacity-90 hover:shadow-glow transition"
          >
            📩 Falar comigo
          </a>

          {/* Redes sociais */}
          <div className="flex gap-6 text-sm">
            <a
              href="https://github.com/SamiaLuvanice"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub SamiaLuvanice"
              className="flex items-center gap-2 hover:text-brand-orange transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.5-3.9-1.5-.5-1.2-1.1-1.6-1.1-1.6-.9-.6.1-.6.1-.6 1 .1 1.6 1.1 1.6 1.1.9 1.6 2.5 1.1 3.1.8.1-.6.3-1.1.6-1.4-2.6-.3-5.4-1.3-5.4-5.9 0-1.3.5-2.4 1.1-3.3-.1-.3-.5-1.6.1-3.3 0 0 .9-.3 3 .1.9-.3 1.9-.4 2.9-.4 1 0 2 .1 2.9.4 2.1-.4 3-.1 3-.1.6 1.7.2 3 .1 3.3.7.9 1.1 2 1.1 3.3 0 4.6-2.8 5.6-5.4 5.9.3.3.6.8.6 1.6v2.4c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.65 18.35.5 12 .5z" />
              </svg>
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/samialuvanice"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Samia Luvanice"
              className="flex items-center gap-2 hover:text-brand-pink transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.7 0 5-2.2 5-5v-14c0-2.8-2.3-5-5-5zm-11.5 20h-3v-11h3v11zm-1.5-12.6c-1 0-1.9-.8-1.9-1.9 0-1 .8-1.8 1.9-1.8s1.9.8 1.9 1.9c0 1-.9 1.8-1.9 1.8zm14 12.6h-3v-5.6c0-1.3 0-2.9-1.7-2.9s-2 1.4-2 2.8v5.7h-3v-11h2.9v1.5h.1c.4-.7 1.3-1.5 2.7-1.5 2.9 0 3.4 1.9 3.4 4.4v6.6z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </section>
  );
}
