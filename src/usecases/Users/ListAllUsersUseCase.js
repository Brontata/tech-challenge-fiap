const userRepository = require('../../repositories/UserRepository');
class ListAllUsersUseCase {
    async execute() {
        return await userRepository.findAll();
    }
}

module.exports = new ListAllUsersUseCase;