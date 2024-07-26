const findPostByIdUseCase = require('../../usecases/Posts/FindPostByIdUseCase');
class FindPostById {

    async handle(request, response) {
        const { id } = request.params;
        const post = await findPostByIdUseCase.execute(id);
        if (post == null) {
            return response.status(404).json({ error: 'Post not found' });
        }
        return response.json(post);
    }
}

module.exports = new FindPostById();
