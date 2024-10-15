import { fetchEntry } from "../../lib/utils/articleLoader"; // Import a function to fetch an article entry, adjust the path to match your project structure

export default async function Page() {
  // Fetch the article entry asynchronously using fetchEntry function
  const entry = await fetchEntry();

  // Log the entire entry to inspect its structure and understand the data
  console.log("Fetched entry:", entry?.fields?.articleBody?.content);

  // Extract the article title from the fetched entry, or use a default value if not available
  const articleTitle = entry?.fields?.articleTitle || "No title available";
  // Extract the article body content from the fetched entry, or set it as an empty array if not available
  const articleBody = entry?.fields?.articleBody?.content || [];

  // Return the JSX for rendering the page
  return (
    <div>
      {/* Render the article title as an <h1> element */}
      <h1 className="text-4xl mb-4">{articleTitle}</h1>
      <div>
        {/* Iterate through the articleBody content array and render each paragraph */}
        {articleBody.map((paragraph: any, index: number) => (
          <p key={index}>
            {/* Iterate through the content of each paragraph and join the text nodes */}
            {paragraph.content.map((textNode: any) => textNode.value).join(" ")}
          </p>
        ))}
      </div>
    </div>
  );
}
