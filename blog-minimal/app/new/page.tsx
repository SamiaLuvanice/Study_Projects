"use client";

import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import type { Post } from "@/components/PostCard";

const LS_KEY = "userPosts:v1";

// slugify simples
function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

export default function NewPostPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [author, setAuthor] = useState("Samia"); // ajuste livre
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      setError(null);

      const t = title.trim();
      const s = summary.trim();
      const a = author.trim() || "Autor(a)";

      if (!t || !s) {
        setError("Título e resumo são obrigatórios.");
        return;
      }

      const slug = slugify(t) || `post-${Date.now()}`;
      const newPost: Post = {
        slug,
        title: t,
        summary: s,
        date: new Date().toISOString().slice(0, 10), // YYYY-MM-DD
        author: a,
      };

      try {
        setSaving(true);
        const raw = localStorage.getItem(LS_KEY);
        const list: Post[] = raw ? JSON.parse(raw) : [];
        // Evita duplicar slug
        const exists = list.some((p) => p.slug === slug);
        const finalList = exists
          ? list.map((p) => (p.slug === slug ? newPost : p))
          : [newPost, ...list];

        localStorage.setItem(LS_KEY, JSON.stringify(finalList));
        router.push("/"); // volta pra Home
        router.refresh?.(); // caso esteja disponível
      } catch {
        setError("Não foi possível salvar o post.");
      } finally {
        setSaving(false);
      }
    },
    [title, summary, author, router]
  );

  return (
    <section className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-2xl md:text-3xl font-bold gradient">Criar novo post</h1>
        <p className="text-gray-400 text-sm">
          Preencha os campos abaixo. Seu post aparecerá na Home.
        </p>
      </header>

      <form onSubmit={onSubmit} className="card p-6 space-y-5">
        <div className="space-y-2">
          <label className="text-sm text-gray-300">Título *</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-lg bg-black/40 border border-orange-500/20 px-3 py-2 outline-none focus:border-orange-500/50"
            placeholder="Ex.: Como treino cedo me ajuda a estudar"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm text-gray-300">Resumo *</label>
          <textarea
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            rows={4}
            className="w-full rounded-lg bg-black/40 border border-orange-500/20 px-3 py-2 outline-none focus:border-orange-500/50"
            placeholder="Uma frase curta que resuma o conteúdo do post"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm text-gray-300">Autor(a)</label>
          <input
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full rounded-lg bg-black/40 border border-orange-500/20 px-3 py-2 outline-none focus:border-orange-500/50"
            placeholder="Seu nome"
          />
        </div>

        {error && <p className="text-sm text-red-400">{error}</p>}

        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={saving}
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg font-semibold text-white bg-gradient-to-r from-brand-orange to-brand-pink hover:opacity-90 transition disabled:opacity-60"
          >
            {saving ? "Salvando..." : "Salvar post"}
          </button>

          <button
            type="button"
            onClick={() => history.back()}
            className="text-sm text-brand-pink hover:text-brand-orange transition"
          >
            Cancelar
          </button>
        </div>
      </form>
    </section>
  );
}
