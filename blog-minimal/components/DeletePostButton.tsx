"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const LS_KEY = "userPosts:v1";

export default function DeletePostButton({ slug }: { slug: string }) {
  const router = useRouter();
  const [isUserPost, setIsUserPost] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(LS_KEY);
      const list: { slug: string }[] = raw ? JSON.parse(raw) : [];
      setIsUserPost(list.some((p) => p.slug === slug));
    } catch { }
  }, [slug]);

  if (!isUserPost) return null;

  const handleDelete = () => {
    const ok = confirm("Deseja apagar este post?");
    if (!ok) return;
    try {
      const raw = localStorage.getItem(LS_KEY);
      const list: any[] = raw ? JSON.parse(raw) : [];
      const next = list.filter((p) => p.slug !== slug);
      localStorage.setItem(LS_KEY, JSON.stringify(next));
      router.push("/");
      router.refresh?.();
    } catch { }
  };

  return (
    <button
      onClick={handleDelete}
      className="px-3 py-1.5 text-sm rounded-md bg-black/50 border border-pink-500/30 hover:border-pink-500/60 hover:shadow-glow transition"
    >
      🗑️ Apagar post
    </button>
  );
}
