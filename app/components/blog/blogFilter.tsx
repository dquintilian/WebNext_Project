'use client';

import React, { useState } from 'react';

// Define the structure of a category object
interface Category {
  category: string;
  color: string;
}

const BlogFilter: React.FC = () => {
  // Use state to track the active filter
  const [activeFilter, setActiveFilter] = useState<string>('Product');

  // Array of category objects with category names and colors
  const categories: Category[] = [
    { category: 'Product', color: 'Red' },
    { category: 'Technology', color: 'Orange' },
    { category: 'Growth', color: 'Green' },
    { category: 'AI', color: 'Blue' },
  ];

  // Function to update the active filter when a button is clicked
  const handleFilterClick = (category: string) => {
    setActiveFilter(category);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex justify-between bg-white p-4 rounded-lg shadow-md">
        {categories.map((cat) => (
          <button
            key={cat.category} // Use the category name as the unique key
            onClick={() => handleFilterClick(cat.category)} // Update active filter on click
            style={{
              backgroundColor: activeFilter === cat.category ? cat.color : 'transparent', // Set background color dynamically
              color: activeFilter === cat.category ? 'white' : 'black', // Set text color
            }}
            className={`px-4 py-2 rounded-lg hover:bg-opacity-70 transition-colors`}
          >
            {cat.category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BlogFilter;