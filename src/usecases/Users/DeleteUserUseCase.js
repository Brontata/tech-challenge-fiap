const userRepository = require('../../repositories/UserRepository');
class DeleteUserUseCase {
    async execute(id) {
        try {
            return await userRepository.delete(id);
        } catch (error) {
            return { error: error.message };
        }
    }
}

module.exports = new DeleteUserUseCase();