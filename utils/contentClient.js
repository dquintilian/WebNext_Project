const contentful = require('contentful');


// Create the authorization for contentful

export const client = contentful.createClient({
  space: 'h02wmcwkik29',
  environment: 'master',
  accessToken: '8PMsoE3EtqxriO3oUJcPFdPGb_EMYAfvLfGU632B44s',
});

