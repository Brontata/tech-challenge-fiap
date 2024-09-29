const postRepository = require('../../repositories/PostRepository');
class UpdatePostUseCase {
    async execute({ id, title, description }) {
        try {
            const slug = title.split(' ').join('-').toLowerCase();
            return await postRepository.update({ id, title, description, slug, updated_at: new Date() });
        } catch (error) {
            return { error: error.message };
        }
    }
}

module.exports = new UpdatePostUseCase();
