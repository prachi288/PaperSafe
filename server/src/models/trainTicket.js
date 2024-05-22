const mongoose = require('mongoose');

const trainTicketSchema = new mongoose.Schema({
    schemaVersion : {
        type: Number,
        default: 1
    },
    passangerName: {
        type: String,
        required: true
    },
    pnrNo : {
        type: Number,
        required: true
    },
    quota: {
        type: String,
        required: true
    },
    trainNo : {
        type: Number,
        required: true
    },
    trainName : {
        type: String,
        required: true
    },
    departure: {
        type: String,
        required: true
    },
    class: {
        type: String,
        required: true
    },
    from : {
        type: String,
        required: true
    },
    to : {
        type: String,
        required: true
    },
    userID : {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
});

const TrainTicket = mongoose.model('TrainTicket', trainTicketSchema);

module.exports = TrainTicket;