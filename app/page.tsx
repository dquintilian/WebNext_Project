"use client";
import Link from "next/link"; // Import Next.js Link component
import { Button } from "@/components/ui/button";
export function BlogSection() {
  return (
    <>
      <div className="flex justify-center items-center mt-8">
        <Link
          href="/blog"
          className="flex items-center dark:text-neutral-100 hover:text-blue-600 transition-colors duration-200"
        >
          <span className="mr-2 text-2xl">📕</span>{" "}
          {/* <span className="text-xl font-semibold">Read My Blog</span> */}
        </Link>
      </div>
      <div className="my-16">

      </div>
    </>
  );
}

const calendarLink: string | undefined = "https://calendar.app.google/3ccDgwaDfwD6iGT77"

export default function IntroPage() {
  return (
    <main>
      <section className="font-aptos text-gray-800">
        <div className="flex justify-center mb-8">
          <img
            src="/assets/images/website_headshot.jpeg"
            alt="Dominic Quintilian Headshot"
            className="w-40 h-40 rounded-full border-4 border-blue-500 shadow-lg"
          />
        </div>
        <section id="Headline Section">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tighter text-center text-blue-600">
            Dominic Quintilian 🪴
          </h2>
          <h1 className="mb-4 text-5xl font-extrabold tracking-tighter text-center dark:text-neutral-100">
            Product Management Professional
          </h1>
          <h3 className="mb-8 text-xl text-center dark:text-neutral-100">
            Based in{" "}
            <span className="underline decoration-blue-600">Toronto</span> ,
            Ontario, Canada 🌎
          </h3>
        </section>
        <section id="learn More Section ">
          <div className="my-8 py-6">
            <div className="flex justify-center">
            <Link
              href={calendarLink ? calendarLink : ""}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg">Let&apos;s Chat!</Button>
            </Link>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
