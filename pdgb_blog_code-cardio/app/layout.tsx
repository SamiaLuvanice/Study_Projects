import "./globals.css";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Minimalista",
  description: "Blog pessoal simples em Next.js (App Router)",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="font-sans">
        <header className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-pink-500/20">
          <nav className="container flex items-center justify-between py-3">
            <Link href="/" className="text-lg font-bold gradient">Code & Cardio Blog</Link>
            <div className="flex items-center gap-4 text-sm">
              <Link href="/" className="hover:text-brand-orange">Home</Link>
              <Link href="/about" className="hover:text-brand-pink">Sobre</Link>
            </div>
          </nav>
        </header>
        <main className="container pt-24 pb-16">{children}</main>
        <footer className="container py-8 text-xs text-gray-400 border-t border-orange-500/10">
          Feito com Next.js • Por: <span className="gradient font-semibold">Sâmia Luvanice</span>
        </footer>
      </body>
    </html>
  );
}
