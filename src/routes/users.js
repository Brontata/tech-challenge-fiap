const express = require('express');
const { check } = require('express-validator');
const protect = require('../middleware/authMiddleware');
const checkRole = require('../middleware/checkRole');
const AuthController = require('../controllers/Auth/AuthController');
const ListUsersByRole = require('../controllers/Users/ListUsersByRole');
const ListAllUsers = require('../controllers/Users/ListAllUsers');
const DeleteUser = require('../controllers/Users/DeleteUser');
const UpdateUser = require('../controllers/Users/UpdateUser');
const { route } = require('./posts');

const router = express.Router();

/**
 * @swagger
 * /users/register:
 *   post:
 *     summary: Register a new user
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *               - role
 *             properties:
 *               name:
 *                 type: string     
 *                 description: User's name 
 *                 example: John Doe
 *               email:
 *                 type: string
 *                 description: User's email address
 *                 example: user@example.com
 *               password:
 *                 type: string
 *                 description: User's password
 *                 example: mysecretpassword
 *               role:
 *                 type: string
 *                 description: User's role
 *                 enum: [PROFESSOR, ALUNO]
 *                 example: PROFESSOR
 *     responses:
 *       201:
 *         description: User registered successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: JWT token
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 errors:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       msg:
 *                         type: string
 *                         example: Por favor, forneça um e-mail válido
 */

router.post(
  '/register',
  [
    check('email', 'Por favor, forneça um e-mail válido').isEmail(),
    check('password', 'A senha deve ter 6 ou mais caracteres').isLength({ min: 6 }),
    check('role', 'Papel deve ser professor ou aluno').isIn(['PROFESSOR', 'ALUNO']),
  ],
  (req, res) => AuthController.register(req, res)
);

/**
 * @swagger
 * /users/login:
 *   post:
 *     summary: Log in a user
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 description: User's email address
 *                 example: user@example.com
 *               password:
 *                 type: string
 *                 description: User's password
 *                 example: mysecretpassword
 *     responses:
 *       200:
 *         description: User logged in successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: JWT token
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 errors:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       msg:
 *                         type: string
 *                         example: Por favor, forneça um e-mail válido
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: E-mail ou senha inválidos
 */

router.post(
  '/login',
  [
    check('email', 'Por favor, forneça um e-mail válido').isEmail(),
    check('password', 'Senha é obrigatória').exists(),
  ],
  (req, res) => AuthController.login(req, res)
);

router.get(
  '/role/:role', protect, checkRole(['PROFESSOR']),
  (req, res) => ListUsersByRole.handle(req, res)
)

router.get(
  '/', protect, checkRole(['PROFESSOR']),
  (req, res) => ListAllUsers.handle(req, res)
)

router.delete(
  '/:id', protect, checkRole(['PROFESSOR']),
  (req, res) => DeleteUser.handle(req, res)
)

router.put(
  '/:id', protect, checkRole(['PROFESSOR']),
  (req, res) => UpdateUser.handle(req, res)
)

module.exports = router;
