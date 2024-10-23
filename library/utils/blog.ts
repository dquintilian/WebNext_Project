import { client } from "../Middleware/client";

//Fetches all of the available entries
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

//Fetches one particular entry
export const fetchEntry = async () => {
    try {
      const entry = await client.getEntry();
      return entry;
    } catch (error) {
      console.error('Error fetching entry:', error);
      return null;
    }
  };
  