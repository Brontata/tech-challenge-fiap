const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const prisma = require('../../database');

class RegisterUserUseCase {
  async execute({ name, email, password, role }) {

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      throw new Error('E-mail já cadastrado');
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: { name, email, password: hashedPassword, role },
    });
    const token = jwt.sign({ id: user.id, role: user.role }, 'secretKey', { expiresIn: '1h' });
    return token;
  }
}

module.exports = new RegisterUserUseCase();
