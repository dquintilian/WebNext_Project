import {client} from './contentClient.js'
export const fetchEntries = async () => {
    try {
      const entry = await client.getEntries({
        content_type: 'article'
      })
      console.log(entry+ " <> Retrieved Entries")
      return entry;
    } catch (error) {
      console.error('Error fetching entry:', error);
      return null;
    }
  };