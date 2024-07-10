const postRepository = require('../../repositories/PostRepository');
class DeletePostUseCase {
    async execute(id) {
        try {
            return await postRepository.delete(id);
        } catch (error) {
            return { error: error.message };
        }
    }
}

module.exports = new DeletePostUseCase();