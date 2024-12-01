const userRepository = require('../../repositories/UserRepository');
class ListUsersByRoleUseCase {
    async execute(role) {
        return await userRepository.listUsersByRole(role);
    }
}

module.exports = new ListUsersByRoleUseCase;