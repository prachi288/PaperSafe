const crypto = require('crypto');
const fs = require('fs');
const { pipeline } = require('stream/promises');
const { Buffer } = require('buffer');

const { ENCRYPTION_KEY, IV } = require('../../config/serverConfig');

const encryptionKey = Buffer.from(ENCRYPTION_KEY, 'base64');
const iv = Buffer.from(IV, 'base64');

const encryptImage = async (filePath) => {
    try {
      const cipher = crypto.createCipheriv('aes-256-cbc', encryptionKey, iv);
      const input = fs.createReadStream(filePath);
      const output = fs.createWriteStream(`${filePath}.enc`);
  
      await pipeline(input, cipher, output);
  
      return `${filePath}.enc`;
    } catch (error) {
      throw new Error(`Encryption failed: ${error.message}`);
    }
  };

  module.exports = encryptImage;