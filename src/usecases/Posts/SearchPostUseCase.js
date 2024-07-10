const postRepository = require('../../repositories/PostRepository');
class searchPostUseCase {
    async execute(q) {
        return await postRepository.search(q);
    }
}

module.exports = new searchPostUseCase();
