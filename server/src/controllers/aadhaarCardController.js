const fs = require('fs');

const { AadhaarCardService } = require('../services/index');

const aadhaarCardService = new AadhaarCardService();

const uploadAadhaar = async(req, res)=>{
    try {
        const data = req.body;
        const filePath = req.file.path;

        const response = await aadhaarCardService.uploadAadhaar(data, filePath);
        return res.status(201).json({
            data: response,
            error:{},
            success: true,
            message: "Aadhaar Uploaded Successfully"
        });

    } catch (error) {
        console.log("Error in Controller Layer");
        return res.status(500).json({
            data: {},
            error: error,
            success: false,
            message: "Failed to Upload Aadhaar"
        });
    }
}

const downloadAadhaar = async(req, res)=>{
    try {
        const userID = req.params.id;

        const response = await aadhaarCardService.downloadAadhaar(userID);
        
        return res.status(200).sendFile(response.decryptedFilePath, (err) => {
            if(err){
                throw err;
            }
            fs.unlinkSync(response.encryptedFilePath);
            fs.unlinkSync(response.decryptedFilePath);
        });

    } catch (error) {
        console.log("Error in Controller Layer");
        return res.status(500).json({
            data: {},
            error: error,
            success: false,
            message: "Failed to Download Aadhaar"
        });
    }
}

module.exports = {
    uploadAadhaar,
    downloadAadhaar
}