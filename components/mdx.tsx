import Link from 'next/link'; // Importing Next.js Link component for client-side navigation
import Image from 'next/image'; // Importing Next.js Image component for optimized image rendering
import { MDXRemote } from 'next-mdx-remote/rsc'; // Importing MDXRemote to render MDX content remotely
import { highlight } from 'sugar-high'; // Importing sugar-high library for code syntax highlighting
import React from 'react'; // Importing React for creating components

// Table component for rendering data as an HTML table
function Table({ data }) {
  // Mapping table headers
  let headers = data.headers.map((header, index) => (
    <th key={index}>{header}</th>
  ));

  // Mapping table rows
  let rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

// CustomLink component for handling internal and external links differently
function CustomLink(props) {
  let href = props.href;

  // For internal links (starting with '/'), use Next.js Link for client-side routing
  if (href.startsWith('/')) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  // For anchor links (starting with '#'), use a standard anchor tag
  if (href.startsWith('#')) {
    return <a {...props} />;
  }

  // For external links, open them in a new tab with safety attributes
  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

// RoundedImage component for displaying images with rounded corners
function RoundedImage(props) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
}

// Code component for rendering highlighted code snippets
function Code({ children, ...props }) {
  let codeHTML = highlight(children); // Highlight code using sugar-high library
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />; // Using dangerouslySetInnerHTML to insert highlighted HTML
}

// Function to convert a string into a URL-friendly slug
function slugify(str) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/&/g, '-and-') // Replace '&' with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters except hyphens
    .replace(/\-\-+/g, '-'); // Replace multiple hyphens with a single hyphen
}

// Function to create heading components (e.g., h1, h2) with anchor links
function createHeading(level) {
  const Heading = ({ children }) => {
    let slug = slugify(children); // Generate a slug for the heading
    return React.createElement(
      `h${level}`, // Dynamic heading level (e.g., h1, h2)
      { id: slug }, // Assign slug as the id for the heading
      [
        React.createElement('a', {
          href: `#${slug}`, // Create an anchor link to the heading
          key: `link-${slug}`,
          className: 'anchor', // Apply anchor class for styling
        }),
      ],
      children
    );
  };

  Heading.displayName = `Heading${level}`; // Set a display name for the component for better debugging

  return Heading; // Return the created heading component
}

// Object containing all custom components used for rendering MDX content
let components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  a: CustomLink,
  code: Code,
  Table,
};

// CustomMDX component for rendering MDX content using the MDXRemote component
export function CustomMDX(props) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }} // Allow overriding default components if necessary
    />
  );
}
