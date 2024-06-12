const fs = require('fs');

const { PANCardService } = require('../services/index');

const panCardService = new PANCardService();

const uploadPAN = async(req, res)=>{
    try {
        const data = req.body;
        const filePath = req.file.path;

        const response = await panCardService.uploadPANCard(data, filePath);
        return res.status(201).json({
            data: response,
            error:{},
            success: true,
            message: "PAN Uploaded Successfully"
        });

    } catch (error) {
        console.log("Error in PAN Controller Layer");
        return res.status(500).json({
            data: {},
            error: error,
            success: false,
            message: "Failed to Upload PAN"
        });
    }
}

const downloadPAN = async(req, res)=>{
    try {
        const userID = req.params.id;

        const response = await panCardService.downloadPANCard(userID);
        
        return res.status(200).sendFile(response.decryptedFilePath, (err) => {
            if(err){
                throw err;
            }
            fs.unlinkSync(response.encryptedFilePath);
            fs.unlinkSync(response.decryptedFilePath);
        });

    } catch (error) {
        console.log("Error in PAN Controller Layer");
        return res.status(500).json({
            data: {},
            error: error,
            success: false,
            message: "Failed to Download PAN"
        });
    }
}

module.exports = {
    uploadPAN,
    downloadPAN
}