const createPostsUseCase = require('../../usecases/Posts/CreatePostUseCase');
class CreatePost {
    async handle(request, response) {
        const { title, description, user_id } = request.body;
        const post = await createPostsUseCase.execute({ title, description, user_id });
        return response.json(post);
    }
}

module.exports = new CreatePost();
