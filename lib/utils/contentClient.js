import contentful from 'contentful'
require('dotenv').config();

// Create the authorization for contentful

export const client = contentful.createClient({
  space: process.env.SPACE,
  environment: process.env.ENVIRONMENT,
  accessToken: process.env.ACCESS_TOKEN,
});

