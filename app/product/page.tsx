"use client";
import { useState } from "react";
import Link from "next/link";
import { Products } from "@/components/assets/Products";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/molecules/card";
import { Button } from "@/components/atomic/button";
import { Separator } from "@/components/atomic/separator";

const calendarLink: string | undefined = process.env.CALENDAR_Public_URL;

export default function Page() {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  return (
    <main className="font-aptos text-gray-800">
      <section>
        <header>
          <div className="flex justify-center mb-8">
            <img
              src="/assets/images/website_headshot.jpeg"
              alt="Dominic Quintilian Headshot"
              className="w-40 h-40 rounded-full border-4 border-blue-500 shadow-lg"
            />
          </div>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tighter text-center text-blue-600">
            Dominic Quintilian 🪴
          </h1>
          <h2 className="mb-4 text-5xl font-extrabold tracking-tighter text-center text-gray-800 dark:text-neutral-100">
            Crafting Winning Product Strategies in Tech
          </h2>
          <p className="mb-8 text-center max-w-2xl mx-auto text-gray-800 dark:text-neutral-100">
            As a Fractional Product Manager, I offer a range of services
            designed to drive business outcomes through data analytics,
            cross-functional collaboration, and a deep understanding of user
            needs. Explore my offerings below to see how I can help you develop
            and enhance your products.
          </p>
        </header>
      </section>
      <Separator className="my-8" />
      <section>
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

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {Products.map((service, index) => (
            <Card
              key={index}
              onClick={() =>
                setSelectedService(selectedService === index ? null : index)
              }
              className={`transition-all duration-500 ease-in-out transform hover:shadow-lg hover:-translate-y-1 cursor-pointer ${
                selectedService === index ? "bg-blue-100 scale-105" : ""
              }`}
            >
              <CardHeader>
                <CardTitle
                  className={
                    selectedService === index ? "text-black" : "dark:text-white"
                  }
                >
                  {service.title}
                </CardTitle>
              </CardHeader>
              {selectedService === index && (
                <CardContent className="transition-opacity duration-500 ease-in-out opacity-100">
                  <p>{service.description}</p>
                  <p className="mt-4">
                    Learn more about how I can assist you with {service.title}.
                    Contact me for a tailored consultation to understand how
                    this service can meet your specific needs and drive success
                    for your product.
                  </p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </section>

      <section>
        <div className="my-16">{/* <BlogPosts /> */}</div>
      </section>
    </main>
  );
}
