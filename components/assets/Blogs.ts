// Define the shape of our blog post
interface Blogs {
  id: number;
  title: string;
  type: BlogCategory
  slug: string;
  excerpt: string;
  featuredImage: string;
  publishDate: string;
  body: string; // Added body property for detailed content
}

enum BlogCategory {
  Product = "Product",
  Technology = "Technology",
  Growth = "Growth",
  AI = "AI"
}

export const exampleBlogPosts: Blogs[] = [
  {
    id: 1,
    title: "Getting Started with React",
    slug: "getting-started-with-react",
    type: BlogCategory.Technology,
    excerpt:
      "Learn the basics of React and start building your first component.",
    featuredImage: "/placeholder.svg?height=400&width=600",
    publishDate: "2023-05-15",
    body: `
      React is a popular JavaScript library for building user interfaces. It allows developers to create reusable components that manage their own state, making it easy to build interactive and dynamic web applications. In this article, we'll explore how to set up a simple React application and create your first component. We'll cover JSX, component props, and how to handle state changes effectively.
      
      To get started with React, you need to install Node.js and npm, which allows you to use the Create React App tool. This tool provides a boilerplate for starting new projects quickly. Once your environment is set up, you can create a new React application by running \`npx create-react-app my-app\`.
      
      After setting up the basic application structure, we’ll dive into creating functional components and using hooks like \`useState\` and \`useEffect\` to manage state and lifecycle events in your app. Whether you are building a simple UI or a more complex interface, understanding these basics will help you move forward with confidence.
    `,
  },
  {
    id: 2,
    title: "Advanced TypeScript Techniques",
    slug: "advanced-typescript-techniques",
    type: BlogCategory.Technology,
    excerpt: "Dive deep into TypeScript and learn advanced types and patterns.",
    featuredImage: "/placeholder.svg?height=400&width=600",
    publishDate: "2023-05-20",
    body: `
      TypeScript is a powerful tool for catching errors early in your code, but it offers much more than just basic type checking. In this article, we will explore some advanced TypeScript techniques that can help you build safer and more robust applications.
      
      One such technique is using generics to create reusable and type-safe components or functions. Generics allow you to write code that works with a variety of data types without sacrificing type safety. We will also look at advanced type manipulations such as conditional types and mapped types, which provide flexibility and control in handling complex data structures.
      
      Additionally, we'll explore TypeScript utility types like \`Partial\`, \`Pick\`, and \`Record\` that simplify common transformations on objects. By mastering these advanced features, you'll be better equipped to leverage the full power of TypeScript in your development projects.
    `,
  },
  {
    id: 3,
    title: "Building Responsive Layouts with Tailwind CSS",
    slug: "building-responsive-layouts-with-tailwind-css",
    type: BlogCategory.Technology,
    excerpt: "Create beautiful, responsive designs quickly with Tailwind CSS.",
    featuredImage: "/placeholder.svg?height=400&width=600",
    publishDate: "2023-05-25",
    body: `
      Tailwind CSS is a utility-first CSS framework that allows developers to build responsive designs quickly and efficiently. By using a series of utility classes, you can control layout, spacing, colors, and typography directly in your HTML, which simplifies the styling process and helps you maintain consistency throughout your project.
      
      In this guide, we’ll go through the basics of setting up Tailwind CSS in your project and cover how to create responsive layouts using its built-in grid system and flex utilities. We’ll also explore customizing Tailwind’s configuration to fit your design needs, including setting up custom breakpoints and colors.
      
      By the end of this article, you'll have a solid understanding of how to create responsive web pages with Tailwind CSS that adapt seamlessly to different screen sizes, from mobile devices to desktop displays.
    `,
  },
  {
    id: 4,
    title: "Next.js 13: What's New",
    slug: "nextjs-13-whats-new",
    type: BlogCategory.Technology,
    excerpt: "Explore the latest features and improvements in Next.js 13.",
    featuredImage: "/placeholder.svg?height=400&width=600",
    publishDate: "2023-05-30",
    body: `
      Next.js 13 introduces several exciting new features and improvements aimed at enhancing performance and developer experience. One of the standout features is the new \`app\` directory, which offers a more flexible way to organize routes and layout components.
      
      Additionally, the introduction of React Server Components in Next.js 13 allows for better server-side rendering and reduced client-side JavaScript bundle sizes. This means faster load times and improved performance for your applications. We'll also cover how the new image optimization features enhance loading times for images, making websites more efficient and visually appealing.
      
      In this article, we'll walk through these updates and provide code examples to demonstrate how you can start leveraging them in your projects to build even faster and more scalable web applications.
    `,
  },
  {
    id: 5,
    title: "State Management with Redux Toolkit",
    slug: "state-management-with-redux-toolkit",
    type: BlogCategory.Technology,
    excerpt:
      "Simplify your Redux code with the official, opinionated Redux Toolkit.",
    featuredImage: "/placeholder.svg?height=400&width=600",
    publishDate: "2023-06-04",
    body: `
      Redux Toolkit is the official, recommended way to use Redux, providing a set of tools that simplify and streamline your state management code. It reduces boilerplate and introduces best practices for structuring your Redux application, making it easier to manage complex state logic.
      
      In this tutorial, we will explore how to set up a Redux store using Redux Toolkit’s \`configureStore\` function. We'll also cover the \`createSlice\` method, which allows you to define reducers and actions together in a single slice of state, making your code easier to understand and maintain.
      
      By the end of this article, you will have the knowledge needed to implement Redux Toolkit in your applications, resulting in cleaner and more efficient state management.
    `,
  },
  {
    id: 6,
    title: "Building a REST API with Node.js and Express",
    slug: "building-a-rest-api-with-nodejs-and-express",
    type: BlogCategory.Technology,
    excerpt: "Learn how to create a robust REST API using Node.js and Express.",
    featuredImage: "/placeholder.svg?height=400&width=600",
    publishDate: "2023-06-09",
    body: `
      Building a REST API with Node.js and Express is a powerful way to create scalable and efficient backend services. Express, a lightweight framework for Node.js, makes it easy to define routes, handle requests, and connect to databases.
      
      This guide will walk you through the steps of setting up a basic REST API. We’ll start by creating a simple Express server and defining our first routes to handle CRUD operations. Next, we’ll integrate a database using MongoDB to persist our data and explore how to structure our code for better maintainability.
      
      Whether you're building a simple API for a small application or a more complex backend service, this tutorial will give you the foundation you need to create APIs that are both efficient and easy to extend.
    `,
  },
];