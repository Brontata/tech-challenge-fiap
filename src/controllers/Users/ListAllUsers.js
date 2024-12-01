const listAllUsersUseCase = require('../../usecases/Users/ListAllUsersUseCase');
class ListAllUsers {
    async handle(request, response) {
        const users = await listAllUsersUseCase.execute();
        return response.json(users);
    }
}

module.exports = new ListAllUsers();
