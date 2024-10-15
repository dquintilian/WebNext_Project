const contentful = require('contentful');

//This is a function for another purpose but I am not sure yet
import {client} from './contentClient.js'

export const fetchEntry = async (entryId) => {
    try {
      const entry = await client.getEntry(entryId);
      return entry;
    } catch (error) {
      console.error('Error fetching entry:', error);
      return null;
    }
  };
  