import Head from "next/head";
import { Button } from "~/components/ui/button";
import Navbar from "~/components/Navbar";
import Image from "next/image";
import { Github, Linkedin, Send } from 'lucide-react';
import About from "./about";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cyra Moss</title>
        <meta name="description" content="Cyra Moss portfolio. Software Developer from Auckland, NZ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="m-4 px-6">
        <div>
          <div className="flex justify-between">
            <h3>Cyra</h3>
            <Navbar />
          </div>
          <div className="flex flex-col md:flex-row mt-4">
            <div className="w-full lg:w-2/3 pr-4">
              <h1 className="scroll-m-20 text-4xl md:mt-24 font-extrabold tracking-tight lg:text-5xl">Hello, I&apos;m Cyra </h1>
              <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                Full Stack Developer
              </h2>
              <h4>
                I&lsquo;m on a mission to create innovative solutions that make a positive impact.
                I&lsquo;ve had the privilege of working on a few projects, each contributing to my growth as a developer.
                <br />
                <br />
              </h4>
              <Button>Contact Me <Send/></Button>
              <div className="flex gap-4 p-4">
              <Github />
              <Linkedin/>
              </div>
            </div>
            <div className="w-full lg:w-1/3 h-screen relative overflow-hidden rightSide">
              {/* shapes behind default pic */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-64 h-64 rounded-full bg-blue-500 opacity-50 absolute -top-16 -left-16 rotate-45" />
                <div className="w-64 h-64 rounded-full bg-green-500 opacity-50 absolute -top-72 -right-48 rotate-12" />
                <div className="w-64 h-64 rounded-full bg-yellow-500 opacity-50 absolute -bottom-16 -right-16 rotate-64" />
                <div className="w-32 h-32 rounded-full bg-pink-500 opacity-50 absolute -bottom-4 -left-1 rotate-28" />
                <div className="w-48 h-48 rounded-full bg-orange-500 opacity-50 absolute -top-64 -right-12 rotate-80" />
              </div>
              <div className="w-full h-full flex items-center justify-center relative z-10">
                <Image
                  src="/images/defaultPic.png"
                  alt="Default Picture for Cyra"
                  width={300}
                  height={300}
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
        <About/>
      </main>
    </>
  );
}
