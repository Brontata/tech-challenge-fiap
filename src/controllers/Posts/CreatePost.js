const createPostsUseCase = require('../../usecases/Posts/CreatePostUseCase');
class CreatePost {
    async handle(request, response) {
        try {
            const user_id = request.user.id;
            const { title, description, author } = request.body;
            const post = await createPostsUseCase.execute({ title, description, author, user_id });
            return response.json(post);
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }
}

module.exports = new CreatePost();
