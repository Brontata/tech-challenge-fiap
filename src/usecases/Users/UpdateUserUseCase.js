const userRepository = require('../../repositories/UserRepository');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const prisma = require('../../database');
const secret = process.env.JWT_SECRET;
class UpdateUserUseCase {
    async execute({ id, name, email, password, role }) {
        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser && existingUser.id !== Number(id)) {
          throw new Error('E-mail já cadastrado em outro usuário');
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        try {
            return await userRepository.update({ id, name, email, password: hashedPassword, role, updated_at: new Date() });
        } catch (error) {
            return { error: error.message };
        }
    }
}

module.exports = new UpdateUserUseCase();