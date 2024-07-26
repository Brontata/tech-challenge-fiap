const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const prisma = require('../src/database');
const LoginUserUseCase = require('../src/usecases/Auth/LoginUserUseCase');

jest.mock('bcryptjs');
jest.mock('jsonwebtoken');
jest.mock('../src/database', () => ({
  user: {
    findUnique: jest.fn(),
  },
}));

describe('LoginUserUseCase', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return a token when login is successful', async () => {
    const mockUser = { id: 1, email: 'test@example.com', password: 'hashedPassword', role: 'user' };
    prisma.user.findUnique.mockResolvedValue(mockUser);
    bcrypt.compare.mockResolvedValue(true);
    jwt.sign.mockReturnValue('fakeToken');

    const result = await LoginUserUseCase.execute({ email: 'test@example.com', password: 'password' });

    expect(result).toBe('fakeToken');
    expect(prisma.user.findUnique).toHaveBeenCalledWith({ where: { email: 'test@example.com' } });
    expect(bcrypt.compare).toHaveBeenCalledWith('password', 'hashedPassword');
    expect(jwt.sign).toHaveBeenCalledWith({ id: mockUser.id, role: mockUser.role }, 'secretKey', { expiresIn: '1h' });
  });

  it('should throw an error when user is not found', async () => {
    prisma.user.findUnique.mockResolvedValue(null);

    await expect(LoginUserUseCase.execute({ email: 'test@example.com', password: 'password' }))
      .rejects
      .toThrow('E-mail ou senha inválidos');
  });

  it('should throw an error when password does not match', async () => {
    const mockUser = { id: 1, email: 'test@example.com', password: 'hashedPassword', role: 'user' };
    prisma.user.findUnique.mockResolvedValue(mockUser);
    bcrypt.compare.mockResolvedValue(false);

    await expect(LoginUserUseCase.execute({ email: 'test@example.com', password: 'wrongPassword' }))
      .rejects
      .toThrow('E-mail ou senha inválidos');
  });
});
