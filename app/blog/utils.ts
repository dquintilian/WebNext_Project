import fs from 'fs'  // Importing 'fs' module to work with the file system
import path from 'path'  // Importing 'path' module to work with file and directory paths

// Defining a type called 'Metadata' which contains information about a blog post
type Metadata = {
  title: string
  publishedAt: string
  summary: string
  image?: string // 'image' is optional (it may or may not be included)
}

// Function to parse the frontmatter (the metadata at the top) from a markdown (.mdx) file
function parseFrontmatter(fileContent: string) {
  // Regex pattern to capture the frontmatter block (content between '---' lines)
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/
  let match = frontmatterRegex.exec(fileContent) // Find the frontmatter using the regex
  let frontMatterBlock = match![1] // Extract the matched frontmatter content
  let content = fileContent.replace(frontmatterRegex, '').trim() // Remove the frontmatter from the content
  let frontMatterLines = frontMatterBlock.trim().split('\n') // Split the frontmatter into lines
  let metadata: Partial<Metadata> = {} // Create an empty metadata object

  // Loop through each line in the frontmatter and extract the key-value pairs
  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(': ') // Split the line by ": " to get the key and value
    let value = valueArr.join(': ').trim() // Join the value if it contains ": " inside it
    value = value.replace(/^['"](.*)['"]$/, '$1') // Remove quotes from the value
    metadata[key.trim() as keyof Metadata] = value // Assign the key-value pair to the metadata object
  })

  // Return both the parsed metadata and the actual content (markdown)
  return { metadata: metadata as Metadata, content }
}

// Function to get all MDX files in a directory
function getMDXFiles(dir) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx') // Read files and filter by '.mdx' extension
}

// Function to read the content of a single MDX file and parse its frontmatter
function readMDXFile(filePath) {
  let rawContent = fs.readFileSync(filePath, 'utf-8') // Read the file content as a string
  return parseFrontmatter(rawContent) // Parse the frontmatter and return the result
}

// Function to get metadata and content for all MDX files in a directory
function getMDXData(dir) {
  let mdxFiles = getMDXFiles(dir) // Get all MDX files from the directory
  return mdxFiles.map((file) => {
    let { metadata, content } = readMDXFile(path.join(dir, file)) // Read each file and get its metadata and content
    let slug = path.basename(file, path.extname(file)) // Create a 'slug' (filename without extension) for the post

    return {
      metadata, // Return the parsed metadata
      slug, // Return the slug for the post
      content, // Return the markdown content
    }
  })
}

// Function to get all blog posts (from the 'app/blog/posts' directory)
export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), 'app', 'blog', 'posts')) // Get blog post data from the 'posts' directory
}

// Function to format dates into a readable format, with an option to include relative time (like '2y ago')
export function formatDate(date: string, includeRelative = false) {
  let currentDate = new Date() // Get the current date
  if (!date.includes('T')) {
    date = `${date}T00:00:00` // If the date doesn't include time info, add a default time
  }
  let targetDate = new Date(date) // Create a Date object from the input date

  // Calculate the difference between the current date and the target date
  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear()
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth()
  let daysAgo = currentDate.getDate() - targetDate.getDate()

  let formattedDate = '' // Initialize a string for relative date

  // Determine whether the post was years, months, or days ago
  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`
  } else {
    formattedDate = 'Today' // If it was published today
  }

  // Format the date into a full, readable format (e.g., "September 20, 2023")
  let fullDate = targetDate.toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  // If 'includeRelative' is false, return just the full date
  if (!includeRelative) {
    return fullDate
  }

  // Return both the full date and the relative time (e.g., "September 20, 2023 (2y ago)")
  return `${fullDate} (${formattedDate})`
}