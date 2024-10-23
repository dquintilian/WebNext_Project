import contentful from 'contentful'
import dotenv from 'dotenv';
dotenv.config();

export const client = contentful.createClient({
  space: process.env.SPACE,
  environment: process.env.ENVIRONMENT,
  accessToken: process.env.ACCESS_TOKEN,
});

