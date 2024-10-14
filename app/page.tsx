'use client';

import { useState } from 'react';
import Link from 'next/link'; // Import Next.js Link component
import { BlogPosts } from 'app/components/posts'; // Importing BlogPosts component from the specified path
import { products } from 'app/components/products/productList'; // Importing services from the newly created file

interface Product {
  title: string;
  description: string;
}

export default function IntroPage() {
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
      <h1 className="mb-4 text-5xl font-extrabold tracking-tighter text-center dark:text-neutral-100">
        Product Management Professional
      </h1>

      <h3 className="mb-8 text-xl text-center dark:text-neutral-100">
        Based in <span className='underline decoration-blue-600'>Toronto</span> , Ontario, Canada 🌎
      </h3>
      
      {/* Call to Action Section */}
      <div className="my-8 py-6">
        <div className="flex justify-center">
          <Link href="/product">
            <button className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full transform transition duration-300 ease-in-out hover:bg-neutral-600 hover:shadow-lg active:scale-95">
              Learn More About Me
            </button>
          </Link>
        </div>
      </div>
      
      {/* Small link directing people to blog */}
      <div className="flex justify-center items-center mt-8">
        {/* <Link href="/blog" className="flex items-center dark:text-neutral-100 hover:text-blue-600 transition-colors duration-200">
          <span className="mr-2 text-2xl">📕</span> <span className="text-xl font-semibold">Read My Blog</span>
        </Link> */}
      </div>
      
      {/* Optional blog posts section */}
      <div className="my-16">
        {/* Uncomment the following line to display blog posts */}
        {/* <BlogPosts /> */}
      </div>
    </section>
  );
}