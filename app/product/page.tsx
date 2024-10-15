"use client";

import { useState } from "react";
import Link from "next/link";
import { BlogPosts } from "../../components/posts"; // Importing BlogPosts component
import { products } from "../../components/products/productList"; // Importing services
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

export default function Page() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  return (
    <section className="font-aptos text-gray-800">
      {/* Headshot image in the center top of the page */}
      <div className="flex justify-center mb-8">
        <img
          src="/assets/images/website_headshot.jpeg"
          alt="Dominic Quintilian Headshot"
          className="w-40 h-40 rounded-full border-4 border-blue-500 shadow-lg"
        />
      </div>

      {/* Page header with name and title */}
      <h2 className="mb-4 text-4xl font-extrabold tracking-tighter text-center text-blue-600">
        Dominic Quintilian 🪴
      </h2>
      <h1 className="mb-4 text-5xl font-extrabold tracking-tighter text-center text-gray-800 dark:text-neutral-100">
        Crafting Winning Product Strategies in Tech
      </h1>

      {/* Introduction paragraph */}
      <p className="mb-8 text-center max-w-2xl mx-auto text-gray-800 dark:text-neutral-100">
        As a Fractional Product Manager, I offer a range of services designed to
        drive business outcomes through data analytics, cross-functional
        collaboration, and a deep understanding of user needs. Explore my
        offerings below to see how I can help you develop and enhance your
        products.
      </p>

      <Separator className="my-8" />

      {/* Call to Action Section */}
      <div className="my-8 py-6">
        <div className="flex justify-center">
          <Link
            href="https://calendar.app.google/3ccDgwaDfwD6iGT77"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg">Let's Chat!</Button>
          </Link>
        </div>
      </div>

      {/* Products offered section using Shadcn Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {products.map((service, index) => (
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
                  Contact me for a tailored consultation to understand how this
                  service can meet your specific needs and drive success for
                  your product.
                </p>
              </CardContent>
            )}
            <CardFooter></CardFooter>
          </Card>
        ))}
      </div>

      {/* Optional blog posts section */}
      <div className="my-16">
        {/* Uncomment the following line to display blog posts */}
        {/* <BlogPosts /> */}
      </div>
    </section>
  );
}
