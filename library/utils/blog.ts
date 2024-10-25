
import { createClient,EntryCollection } from 'contentful';


const spaceId = 'h02wmcwkik29'; // Replace with your Contentful space ID
const accessToken = '8PMsoE3EtqxriO3oUJcPFdPGb_EMYAfvLfGU632B44s'  ; // Replace with your Content Delivery API token

const client = createClient({
  space: spaceId,
  accessToken: accessToken,
  environment: 'master',
});



export async function fetchAllArticles(): Promise<EntryCollection<any> | null> {
  try {
    const entries = await client.getEntries({
      content_type: 'article', // Replace with your article content type ID
    });
    console.log(entries.items + "These are the blog entries");
    
    return entries;
  } catch (error) {
    console.error('Error fetching articles:', error);
    return null;
  }
}


