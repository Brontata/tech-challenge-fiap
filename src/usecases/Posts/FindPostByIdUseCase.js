const postRepository = require('../../repositories/PostRepository');
class FindPostByIdUseCase {

    async execute(id) {
        try {
            return await postRepository.findById(id);
        } catch (error) {
            return { error: error.message };
        }
    }
}

module.exports = new FindPostByIdUseCase();
