const findPostByIdUseCase = require('../../usecases/Posts/FindPostByIdUseCase');
class FindPostById {

    async handle(request, response) {
        const { id } = request.params;
        const post = await findPostByIdUseCase.execute(id);
        return response.json(post);
    }
}

module.exports = new FindPostById();
