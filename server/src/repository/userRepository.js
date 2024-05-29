const {CrudRepository} = require('./index');
const { User } = require('../models/index');

class UserRepository extends CrudRepository{
    constructor(){
        super(User);
    }
}

module.exports = UserRepository;