import Link from "next/link";
import PostsList from "@/components/PostsList";

export default function HomePage() {
  return (
    <section className="space-y-6">
      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl md:text-3xl font-bold gradient">Posts recentes</h1>
        <Link
          href="/new"
          className="inline-flex items-center justify-center px-4 py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-brand-orange to-brand-pink hover:opacity-90 transition"
        >
          ➕ Criar novo post
        </Link>
      </header>

      <PostsList />
    </section>
  );
}
