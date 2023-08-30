import Head from "next/head";
import { DarkModeToggle } from "~/components/darkModeToggle";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cyra Moss</title>
        <meta name="description" content="Cyra Moss portfolio. Software Developer from Auckland, NZ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
       <div>
        <DarkModeToggle/>
        <div>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Cyra Moss </h1>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
      Software Developer from Auckland, New Zealand
    </h2>
        </div>
       </div>
      </main>
    </>
  );
}
