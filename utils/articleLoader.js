const contentful = require('contentful');
import {client} from './contentClient.js'
export const fetchEntry = async (entryId) => {
    try {
      let entry = await client.getEntry(entryId);
      entry = entry.fields
      return entry
    } catch (error) {
      console.error('Could not pull that specific entry:', error);
      return null;
    }
  };
  