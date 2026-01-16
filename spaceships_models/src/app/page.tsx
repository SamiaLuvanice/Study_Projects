import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Conheça todas as Naves do Universo de Star Wars</h1>

      <p>
        <Link className="btn" href={"/spaceships"}>Ver todas</Link>
      </p>
    </main>
  );
}
