const { UserRepository } = require('../repository/index');
const { uniqueIDGenerator } = require('../utils/helper/index');

class UserService{
    constructor(){
        this.userRepository = new UserRepository();
        this.uniqueIDGenerator = uniqueIDGenerator;
    }

    async registerUser(data){
        try {
            const uniqueID = uniqueIDGenerator(data.firstName, data.mobileNumber);
            data = {...data, uniqueID: uniqueID};

            const response = await this.userRepository.create(data);
            return response;

        } catch (error) {
            console.log("Error Occure in Service Layer");
            throw error;
        }
    }

    async getUserById(id){
        try {
            const response = this.userRepository.getById(id);
            return response;
        } catch (error) {
            console.log("Error in Service Layer");
            throw error;
        }
    }

    async getUserByNumber(mobileNumber){
        try {
            const response = this.userRepository.getByNumber(mobileNumber);
            return response;
        } catch (error) {
            console.log("Error in Service Layer");
            throw error;
        }
    }

    async deleteUser(id){
        try {
            const response = this.userRepository.remove(id);
            return response;
        } catch (error) {
            console.log("Error in Service Layer");
            throw error;
        }
    }
}

module.exports = UserService;