import { createClient } from 'contentful';


export const client = createClient({
  space: process.env.SPACE || 'default_space',
  environment: process.env.ENVIRONMENT || 'master',
  accessToken: process.env.ACCESS_TOKEN || 'default_access_token'
});