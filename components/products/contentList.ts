// Define the shape of our content asset
interface ContentAsset {
    id: string;
    title: string;
    slug: string;
    description: string;
    thumbnail: string;
    type: string; // e.g., Slide Deck, PDF, Video
    content: string; // Added a placeholder for detailed content
  }
  
  // Example JSON data (replace this with real data fetching later)
  export const exampleContentAssets: ContentAsset[] = [
    {
      id: "1",
      title: "Effective Product Management Strategies",
      slug: "effective-product-management-strategies",
      description: "A comprehensive slide deck on modern product management techniques.",
      thumbnail: "/assets/thumbnails/slide-deck-placeholder.svg",
      type: "Slide Deck",
      content: `
        This slide deck covers a range of strategies and frameworks essential for successful product management in modern tech companies. You'll learn about the product lifecycle, prioritization techniques, and how to work effectively with cross-functional teams. The deck also includes practical examples, case studies, and interactive exercises to apply these strategies in real-world scenarios.
      `,
    },
    {
      id: "2",
      title: "Introduction to AI in Product Design",
      slug: "introduction-to-ai-in-product-design",
      description: "An insightful PDF guide on incorporating AI into product design.",
      thumbnail: "/assets/thumbnails/pdf-placeholder.svg",
      type: "PDF",
      content: `
        This PDF guide provides an introduction to the basics of AI and its applications in product design. You will learn about the different AI technologies available, how to integrate them into your design process, and best practices for enhancing user experience through intelligent systems. The guide includes diagrams, examples, and resources for further reading.
      `,
    },
    {
      id: "3",
      title: "User Research Techniques Workshop",
      slug: "user-research-techniques-workshop",
      description: "A recorded video workshop on best practices in user research.",
      thumbnail: "/assets/thumbnails/video-placeholder.svg",
      type: "Video",
      content: `
        This video workshop takes you through the fundamentals of user research, including methods like interviews, surveys, usability testing, and ethnographic studies. The workshop demonstrates how to gather actionable insights from your target users and integrate these findings into your product development cycle. Visual examples and real-life case studies are provided to illustrate these concepts.
      `,
    },
    {
      id: "4",
      title: "Building Effective Roadmaps",
      slug: "building-effective-roadmaps",
      description: "Learn how to build effective and actionable product roadmaps.",
      thumbnail: "/assets/thumbnails/slide-deck-placeholder.svg",
      type: "Slide Deck",
      content: `
        This slide deck focuses on the art and science of building effective product roadmaps. You will discover various roadmap styles (e.g., goal-oriented, feature-based, timeline), learn how to prioritize features based on business value and user impact, and explore tools that help visualize your roadmap for different stakeholders. Practical tips on maintaining flexibility and adapting roadmaps to changing requirements are also included.
      `,
    },
  ];