const cloudinary = require("cloudinary")
  .v2;
cloudinary.config({
  cloud_name: 'cloudinary://215983268166427:z8kCAPpcqqgfPjmrG6IyfezYeQ0@dgvsrtrm6',
  api_key: '215983268166427',
  api_secret: 'z8kCAPpcqqgfPjmrG6IyfezYeQ0',
});
module.exports = cloudinary;