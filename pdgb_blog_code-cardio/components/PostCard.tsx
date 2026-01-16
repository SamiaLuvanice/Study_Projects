import Link from "next/link";

export type Post = {
  slug: string;
  title: string;
  summary: string;
  date: string; // ISO
  author?: string;
};

export default function PostCard({ post }: { post: Post }) {
  return (
    <article className="card transition hover:border-orange-500/40 hover:shadow-glow">
      <header className="mb-2">
        <h2 className="text-xl font-semibold text-brand-orange">{post.title}</h2>
        <p className="text-xs text-gray-400">{new Date(post.date).toLocaleDateString("pt-BR")} {post.author ? `• ${post.author}` : ""}</p>
      </header>
      <p className="text-gray-200">{post.summary}</p>
      <Link href={`/posts/${post.slug}`} className="mt-3 inline-block text-brand-pink hover:text-brand-orange transition">
        Ler mais →
      </Link>
    </article>
  );
}
