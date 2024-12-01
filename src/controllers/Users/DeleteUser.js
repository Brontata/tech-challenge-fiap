const deleteUserUseCase = require('../../usecases/Users/DeleteUserUseCase');
class DeleteUser {
    async handle(request, response) {
        const { id } = request.params;
        await deleteUserUseCase.execute(id);
        return response.status(204).json({})
    }
}

module.exports = new DeleteUser();
