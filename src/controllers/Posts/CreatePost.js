const createPostsUseCase = require('../../usecases/Posts/CreatePostUseCase');
class CreatePost {
    async handle(request, response) {
        const user_id = request.user.id;
        const { title, description } = request.body;
        const post = await createPostsUseCase.execute({ title, description, user_id });
        return response.json(post);
    }
}

module.exports = new CreatePost();
