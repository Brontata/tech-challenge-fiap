const deletePostUseCase = require('../../usecases/Posts/DeletePostUseCase');
class DeletePost {
    async handle(request, response) {
        const { id } = request.params;
        await deletePostUseCase.execute(id);
        return response.status(204).json({})
    }
}

module.exports = new DeletePost();
