const cloudinary = require('cloudinary').v2;

const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = require('./serverConfig');

const cloudConfig = ()=>{

    cloudinary.config({
        cloud_name: CLOUDINARY_CLOUD_NAME,
        api_key: CLOUDINARY_API_KEY,
        api_secret: CLOUDINARY_API_SECRET,
      });

}


module.exports = cloudConfig;