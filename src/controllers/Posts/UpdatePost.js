const updatePostUseCase = require('../../usecases/Posts/UpdatePostUseCase');
class UpdatePost {
    async handle(request, response) {
        try {
            const { id } = request.params;
            const { title, description, author } = request.body;
            const post = await updatePostUseCase.execute({ id, title, description, author });
            return response.json(post);
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }
}

module.exports = new UpdatePost();
