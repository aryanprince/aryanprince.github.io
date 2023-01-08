import { type NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { CiDark } from "react-icons/ci";

const Home: NextPage = () => {
  const [darkToggle, setDarkToggle] = useState(false);

  return (
    <>
      <Head>
        <title>Aryan Prince | Web Dev</title>
        <meta
          name="description"
          content="I make things for web. Nextjs, Tailwind, Vercel."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#f0f0f0] to-[hsl(280,100%,90%)] dark:bg-gradient-to-b dark:from-[#121212] dark:to-[hsl(280,100%,10%)]">
        <h1 className="text-5xl font-extrabold tracking-tight text-black dark:text-white">
          Hi, I am <span className="text-[hsl(280,100%,70%)]">Aryan 👋</span>
        </h1>
        <button
          onClick={document.documentElement.classList.toggle("dark")}
          className="mt-8 rounded-xl bg-black p-4 text-white"
        >
          <CiDark className="text-2xl" />
        </button>
      </main>
    </>
  );
};

export default Home;
