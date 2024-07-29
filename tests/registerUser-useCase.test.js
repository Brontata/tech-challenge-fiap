const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const prisma = require('../src/database');
const RegisterUserUseCase = require('../src/usecases/Auth/RegisterUserUseCase');

jest.mock('bcryptjs');
jest.mock('jsonwebtoken');
jest.mock('../src/database', () => ({
  user: {
    findUnique: jest.fn(),
    create: jest.fn(),
  },
}));

describe('RegisterUserUseCase', () => {

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return a token when registration is successful', async () => {
    const mockUser = { id: 1, name: 'Test User', email: 'test@example.com', password: 'hashedPassword', role: 'user' };
    prisma.user.findUnique.mockResolvedValue(null);
    bcrypt.hash.mockResolvedValue('hashedPassword');
    prisma.user.create.mockResolvedValue(mockUser);
    jwt.sign.mockReturnValue('fakeToken');

    const result = await RegisterUserUseCase.execute({ name: 'Test User', email: 'test@example.com', password: 'password', role: 'user' });

    expect(result).toBe('fakeToken');
    expect(prisma.user.findUnique).toHaveBeenCalledWith({ where: { email: 'test@example.com' } });
    expect(bcrypt.hash).toHaveBeenCalledWith('password', 10);
    expect(prisma.user.create).toHaveBeenCalledWith({
      data: { name: 'Test User', email: 'test@example.com', password: 'hashedPassword', role: 'user' },
    });
    expect(jwt.sign).toHaveBeenCalledWith({ id: mockUser.id, role: mockUser.role }, 'secretKey', { expiresIn: '1h' });
  });

  it('should throw an error when email is already registered', async () => {
    const mockUser = { id: 1, name: 'Test User', email: 'test@example.com', password: 'hashedPassword', role: 'user' };
    prisma.user.findUnique.mockResolvedValue(mockUser);

    await expect(RegisterUserUseCase.execute({ name: 'Test User', email: 'test@example.com', password: 'password', role: 'user' }))
      .rejects
      .toThrow('E-mail já cadastrado');
  });

  it('should throw an error when hashing password fails', async () => {
    prisma.user.findUnique.mockResolvedValue(null);
    bcrypt.hash.mockRejectedValue(new Error('Hashing failed'));

    await expect(RegisterUserUseCase.execute({ name: 'Test User', email: 'test@example.com', password: 'password', role: 'user' }))
      .rejects
      .toThrow('Hashing failed');
  });
});
