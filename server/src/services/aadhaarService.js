const cloudinary = require('cloudinary').v2;

const { AadhaarCardRepository } = require('../repository/index');
const { encryptImage } = require('../utils/helper/index');

class AadhaarCardService{
    constructor(){
        this.aadhaarCardRepository = new AadhaarCardRepository();
    }

    async uploadAadhaar(data, filePath){
        try {

            const encryptedFilePath = await encryptImage(filePath);
            const result = await cloudinary.uploader.upload(encryptedFilePath, {
                resource_type: 'raw',
              });

            fs.unlinkSync(filePath);
            fs.unlinkSync(encryptedFilePath);

            data = {...data, version: result.version, public_id: result.public_id};
            
            const response = await this.aadhaarCardRepository.create(data);

            return response;
            
        } catch (error) {
            console.log("Error inService Layer");
            throw error;
        }
    }
    
}

module.exports = AadhaarCardService;