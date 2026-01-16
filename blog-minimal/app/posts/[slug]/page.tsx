import UserPostViewer from "@/components/UserPostViewer";

type Params = { slug: string };

// Mantemos metadata genérico, pois o conteúdo vem do localStorage no cliente.
export const metadata = {
  title: "Post — Blog Minimalista",
  description: "Conteúdo criado e carregado a partir do seu navegador.",
};

export default async function PostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  return <UserPostViewer slug={slug} />;
}
