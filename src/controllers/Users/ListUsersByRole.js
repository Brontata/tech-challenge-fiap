const listUsersByRoleUseCase = require('../../usecases/Users/ListUsersByRoleUseCase');
class ListUsersByRole {
    async handle(request, response) {
        const { role } = request.params;
        const users = await listUsersByRoleUseCase.execute(role);
        return response.json(users);
    }
}

module.exports = new ListUsersByRole();
