const postRepository = require('../../repositories/PostRepository');
class CreatePostUseCase {
    async execute({ title, description, user_id }) {
        const slug = title.split(' ').join('-').toLowerCase();
        return await postRepository.create({ title, description, user_id, slug });
    }
}

module.exports = new CreatePostUseCase();