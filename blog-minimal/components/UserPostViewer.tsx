"use client";

import { useEffect, useState } from "react";
import LikeButton from "@/components/LikeButton";
import DeletePostButton from "@/components/DeletePostButton";

type UserPost = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  author?: string;
};

const LS_KEY = "userPosts:v1";

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  } catch {
    return iso;
  }
}

export default function UserPostViewer({ slug }: { slug: string }) {
  const [post, setPost] = useState<UserPost | null | undefined>(undefined);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(LS_KEY);
      const list: UserPost[] = raw ? JSON.parse(raw) : [];
      setPost(list.find((p) => p.slug === slug) || null);
    } catch {
      setPost(null);
    }
  }, [slug]);

  if (post === undefined) {
    return <p className="text-gray-400">Carregando…</p>;
  }

  if (post === null) {
    return (
      <div className="card p-6 space-y-3">
        <h2 className="text-xl font-semibold text-brand-pink">Post não encontrado</h2>
        <p className="text-gray-300">Este endereço não corresponde a um post salvo.</p>
        <button
          onClick={() => history.back()}
          className="text-sm text-brand-pink hover:text-brand-orange transition"
        >
          ← Voltar
        </button>
      </div>
    );
  }

  return (
    <article className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-brand-orange">{post.title}</h1>
        <p className="text-xs text-gray-400">
          {formatDate(post.date)}{post.author ? ` • ${post.author}` : ""}
        </p>
        <DeletePostButton slug={post.slug} />
      </header>

      <div className="card p-6 space-y-4">
        <p className="text-gray-100">{post.summary}</p>
      </div>

      <LikeButton />
    </article>
  );
}
