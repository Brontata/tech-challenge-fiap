const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const prisma = require('../../database');
const secret = process.env.JWT_SECRET;

class LoginUserUseCase {
  async execute({ email, password }) {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      throw new Error('E-mail ou senha inválidos');
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      throw new Error('E-mail ou senha inválidos');
    }
    const token = jwt.sign({ id: user.id, role: user.role }, secret, { expiresIn: '1h' });
    return token;
  }
}

module.exports = new LoginUserUseCase();
