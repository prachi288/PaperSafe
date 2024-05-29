const XIIMarkSheetRepository = require("./XII_MarkSheetRepository");
const XMarkSheetRepository = require("./X_MarkSheetRepository");
const AadhaarCardRepository = require("./aadhaarRepository");
const CrudRepository = require("./crudRepository");
const MovieTicketRepository = require("./movieTicketRepository");
const PANCardRepository = require("./panCardRepository");
const TrainTicketRepository = require("./trainTicketRepository");
const UserRepository = require("./userRepository");

module.exports = {
    CrudRepository,
    UserRepository,
    AadhaarCardRepository,
    MovieTicketRepository,
    PANCardRepository,
    TrainTicketRepository,
    XMarkSheetRepository,
    XIIMarkSheetRepository
}