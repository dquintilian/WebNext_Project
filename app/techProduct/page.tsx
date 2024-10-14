'use client';

import { useState } from 'react';
import { BlogPosts } from 'app/components/posts'; // Importing BlogPosts component from the specified path
import { products } from 'app/components/products/productList'; // Importing services from the newly created file


export default function Page() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  return (
    <section className="font-aptos">
      {/* Headshot image in the center top of the page */}
      <div className="flex justify-center mb-8">
        <img src="/assets/images/website_headshot.jpeg" alt="Dominic Quintilian Headshot" className="w-32 h-32 rounded-full" />
      </div>
      
      {/* Page header with name and title */}
      <h2 className="mb-8 text-3xl font-bold tracking-tighter text-center">
        Dominic Quintilian 🚀
      </h2>
      <h1 className="mb-8 text-4xl font-bold tracking-tighter text-center">
        
      Technical Consulting
      </h1>
      
      {/* Introduction paragraph describing expertise */}
      <p className="mb-8 text-center max-w-2xl mx-auto">
        As a Fractional Product Manager, I offer a range of services designed to drive business outcomes through data analytics, cross-functional collaboration, and a deep understanding of user needs. Explore my offerings below to see how I can help you develop and enhance your products.
      </p>
      <div className='my-6 py-6'>
      <div className="flex justify-center">
        <a href="https://calendar.app.google/3ccDgwaDfwD6iGT77" target="_blank" rel="noopener noreferrer">
          <button className="bg-blue-500 text-white font-bold py-3 px-8 rounded transform transition duration-300 ease-in-out hover:bg-blue-700 active:scale-95">
            Lets Chat 
          </button>
        </a>
      </div>
      </div>
      
      {/* Products offered section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {products.map((service, index) => (
          <div
            key={index}
            className={`border p-6 rounded-lg shadow-md transition-all duration-500 ease-in-out transform hover:shadow-lg hover:-translate-y-1 cursor-pointer ${selectedService === index ? 'bg-blue-100 scale-105' : ''}`}
            onClick={() => setSelectedService(selectedService === index ? null : index)}
          >
            <h2 className={`text-xl font-semibold mb-4 ${selectedService === index ? 'text-black' : 'text-grey'}`}>{service.title}</h2>
            {selectedService === index && (
              <div className="mt-4 transition-opacity duration-500 ease-in-out opacity-100">
                <p className="text-black">{service.description}</p>
                <p className="mt-4 text-black">
                  Learn more about how I can assist you with {service.title}. Contact me for a tailored consultation to understand how this service can meet your specific needs and drive success for your product.
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Button to book a call, linking to Google appointments page */}
      
      
      {/* Optional blog posts section, currently commented out */}
      <div className="my-16">
        {/* Uncomment the following line to display blog posts */}
        {/* <BlogPosts /> */}
      </div>
    </section>
  );
}
