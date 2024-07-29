const postRepository = require('../../repositories/PostRepository');
class ListAllPostsUseCase {
    async execute() {
        return await postRepository.findAll();
    }
}

module.exports = new ListAllPostsUseCase;