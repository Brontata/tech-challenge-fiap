const updateUserUseCase = require('../../usecases/Users/UpdateUserUseCase');
const { validationResult } = require('express-validator');
class UpdateUser {
    async handle(request, response) {
        const errors = validationResult(request);
        if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
        }
        try {
            const { id } = request.params;
            const { name, email, password, role } = request.body;
            const user = await updateUserUseCase.execute({ id, name, email, password, role });
            return response.json(user);
        } catch (error) {
            return response.status(400).json({ error: 'Falha ao atualizar usuário', details: error.message });
        }
    }
}

module.exports = new UpdateUser();
