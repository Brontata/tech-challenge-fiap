const express = require('express');
const { check } = require('express-validator');
const AuthController = require('../controllers/Auth/AuthController');

const router = express.Router();

router.post(
  '/register',
  [
    check('email', 'Por favor, forneça um e-mail válido').isEmail(),
    check('password', 'A senha deve ter 6 ou mais caracteres').isLength({ min: 6 }),
    check('role', 'Papel deve ser professor ou aluno').isIn(['PROFESSOR', 'ALUNO']),
  ],
  (req, res) => AuthController.register(req, res)
);

router.post(
  '/login',
  [
    check('email', 'Por favor, forneça um e-mail válido').isEmail(),
    check('password', 'Senha é obrigatória').exists(),
  ],
  (req, res) => AuthController.login(req, res)
);

module.exports = router;
