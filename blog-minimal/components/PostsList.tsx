"use client";

import { useEffect, useMemo, useState, useCallback } from "react";
import PostCard, { type Post } from "@/components/PostCard";

const LS_KEY = "userPosts:v1";

export default function PostsList() {
  const [userPosts, setUserPosts] = useState<Post[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (raw) setUserPosts(JSON.parse(raw) as Post[]);
    } catch {}
  }, []);

  const merged = useMemo(() => {
    const all = [...userPosts];
    return all.sort((a, b) => (a.date < b.date ? 1 : -1));
  }, [userPosts]);

  const removeUserPost = useCallback(
    (slug: string) => {
      const ok = confirm("Deseja apagar este post?");
      if (!ok) return;
      try {
        const next = userPosts.filter((p) => p.slug !== slug);
        localStorage.setItem(LS_KEY, JSON.stringify(next));
        setUserPosts(next);
      } catch {}
    },
    [userPosts]
  );

  return (
    <div className="grid gap-4">
      {merged.map((p) => (
        <div key={p.slug} className="relative">
          <PostCard post={p} />
          <button
            onClick={() => removeUserPost(p.slug)}
            className="absolute top-3 right-3 px-2.5 py-1.5 text-xs rounded-md bg-black/50 border border-pink-500/30 hover:border-pink-500/60 hover:shadow-glow transition"
            aria-label="Apagar post"
            title="Apagar post"
          >
            🗑️ Apagar
          </button>
        </div>
      ))}

      {merged.length === 0 && (
        <p className="text-gray-400">Nenhum post ainda. Crie o primeiro! 🎉</p>
      )}
    </div>
  );
}
