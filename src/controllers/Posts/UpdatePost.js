const updatePostUseCase = require('../../usecases/Posts/UpdatePostUseCase');
class UpdatePost {
    async handle(request, response) {
        const { id } = request.params;
        const { title, description } = request.body;
        const post = await updatePostUseCase.execute({ id, title, description });
        return response.json(post);
    }
}

module.exports = new UpdatePost();
