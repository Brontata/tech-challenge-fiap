const { validationResult } = require('express-validator');
const RegisterUserUseCase = require('../../usecases/Auth/RegisterUserUseCase');
const LoginUserUseCase = require('../../usecases/Auth/LoginUserUseCase');

class AuthController {
  async register(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password, role, name } = req.body;

    try {
      const token = await RegisterUserUseCase.execute({ email, password, role, name });
      res.status(201).json({ token });
    } catch (error) {
      console.error('Erro ao registrar usuário:', error);
      res.status(400).json({ error: 'Falha ao registrar usuário', details: error.message });
    }
  }

  async login(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      const token = await LoginUserUseCase.execute({ email, password });
      res.status(200).json({ token });
    } catch (error) {
      console.error('Erro ao registrar usuário:', error);
      res.status(401).json({ error: ' senha inválidos', details: error.message });
    }
  }
}

module.exports = new AuthController();
