const mongoose = require("mongoose");

const panSchema = new mongoose.Schema({
    schemaVersion : {
        type: Number,
        default: 1
    },
    imageURL : {
        type: String,
        required: true,
    },
    panNumber : {
        type: String
    },
    userID : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
    
});

const PANCard = mongoose.model('PANCard', panSchema);

module.exports = PANCard;