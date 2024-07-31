const express = require('express');
const protect = require('../middleware/authMiddleware');
const checkRole = require('../middleware/checkRole');
const listAllPosts = require('../controllers/Posts/ListAllPosts');
const findPostById = require('../controllers/Posts/FindPostById');
const createPost = require('../controllers/Posts/CreatePost');
const updatePost = require('../controllers/Posts/UpdatePost');
const deletePost = require('../controllers/Posts/DeletePost');
const searchPost = require('../controllers/Posts/SearchPost');
const router = express.Router();



/**
 * @swagger
 * /posts/search:
 *   get:
 *     summary: Search for posts
 *     tags:
 *       - Posts
 *     parameters:
 *       - in: query
 *         name: q
 *         schema:
 *           type: string
 *         description: The search query
 *     responses:
 *       200:
 *         description: A list of posts that match the search query
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: The post ID.
 *                     example: 1
 *                   title:
 *                     type: string
 *                     description: The post title.
 *                     example: My first post
 *                   description:
 *                     type: string
 *                     description: The post description.
 *                     example: This is the description of the post
 *                   slug:
 *                     type: string
 *                     description: The post slug.
 *                     example: my-first-post
 *                   created_at:
 *                     type: string
 *                     format: date-time
 *                     description: The creation date of the post.
 *                     example: 2024-07-01T00:00:00.000Z
 *                   updated_at:
 *                     type: string
 *                     format: date-time
 *                     description: The last update date of the post.
 *                     example: 2024-07-02T00:00:00.000Z
 */

router.get('/search', searchPost.handle);

/**
 * @swagger
 * /posts:
 *   get:
 *     summary: Retrieve a list of all posts
 *     tags:
 *       - Posts
 *     responses:
 *       200:
 *         description: A list of posts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: The post ID.
 *                     example: 1
 *                   title:
 *                     type: string
 *                     description: The post title.
 *                     example: My first post
 *                   description:
 *                     type: string
 *                     description: The post description.
 *                     example: This is the description of the post
 *                   slug:
 *                     type: string
 *                     description: The post slug.
 *                     example: my-first-post
 *                   created_at:
 *                     type: string
 *                     format: date-time
 *                     description: The creation date of the post.
 *                     example: 2024-07-01T00:00:00.000Z
 *                   updated_at:
 *                     type: string
 *                     format: date-time
 *                     description: The last update date of the post.
 *                     example: 2024-07-02T00:00:00.000Z
 */
router.get('/', listAllPosts.handle);

/**
 * @swagger
 * /posts/{id}:
 *   get:
 *     summary: Retrieve a post by ID
 *     tags:
 *       - Posts
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The post ID
 *     responses:
 *       200:
 *         description: A single post
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: The post ID.
 *                   example: 1
 *                 title:
 *                   type: string
 *                   description: The post title.
 *                   example: My first post
 *                 description:
 *                   type: string
 *                   description: The post description.
 *                   example: This is the description of the post
 *                 slug:
 *                   type: string
 *                   description: The post slug.
 *                   example: my-first-post
 *                 created_at:
 *                   type: string
 *                   format: date-time
 *                   description: The creation date of the post.
 *                   example: 2024-07-01T00:00:00.000Z
 *                 updated_at:
 *                   type: string
 *                   format: date-time
 *                   description: The last update date of the post.
 *                   example: 2024-07-02T00:00:00.000Z
 *       404:
 *         description: Post not found
 */

router.get('/:id', findPostById.handle);

/**
 * @swagger
 * /posts/create:
 *   post:
 *     summary: Create a new post
 *     tags:
 *       - Posts
 *     security: [{ bearerAuth: [] }]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *               - slug
 *             properties:
 *               title:
 *                 type: string
 *                 description: The post title.
 *                 example: My first post
 *               description:
 *                 type: string
 *                 description: The post description.
 *                 example: This is the description of the post
 *               slug:
 *                 type: string
 *                 description: The post slug.
 *                 example: my-first-post
 *     responses:
 *       201:
 *         description: Post created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: The post ID.
 *                   example: 1
 *                 title:
 *                   type: string
 *                   description: The post title.
 *                   example: My first post
 *                 description:
 *                   type: string
 *                   description: The post description.
 *                   example: This is the description of the post
 *                 slug:
 *                   type: string
 *                   description: The post slug.
 *                   example: my-first-post
 *                 created_at:
 *                   type: string
 *                   format: date-time
 *                   description: The creation date of the post.
 *                   example: 2024-07-01T00:00:00.000Z
 *                 updated_at:
 *                   type: string
 *                   format: date-time
 *                   description: The last update date of the post.
 *                   example: 2024-07-02T00:00:00.000Z
 *       400:
 *         description: Bad request
 *       403:
 *         description: Access denied
 */
router.post('/create', protect, checkRole(['PROFESSOR']), (req, res) => {
    createPost.handle(req, res);
});

/**
 * @swagger
 * /posts/{id}:
 *   put:
 *     summary: Update a post by ID
 *     tags:
 *       - Posts
 *     security: [{ bearerAuth: [] }]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The post ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The post title.
 *                 example: Updated title
 *               description:
 *                 type: string
 *                 description: The post description.
 *                 example: Updated description
 *               slug:
 *                 type: string
 *                 description: The post slug.
 *                 example: updated-slug
 *     responses:
 *       200:
 *         description: Post updated successfully
 *       400:
 *         description: Bad request
 *       403:
 *         description: Access denied
 *       404:
 *         description: Post not found
 */


router.put('/:id', protect, checkRole(['PROFESSOR']), (req, res) => {
    updatePost.handle(req, res);
});

/**
 * @swagger
 * /posts/{id}:
 *   delete:
 *     summary: Delete a post by ID
 *     tags:
 *       - Posts
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The post ID
 *     responses:
 *       200:
 *         description: Post deleted successfully
 *       403:
 *         description: Access denied
 *       404:
 *         description: Post not found
 */

router.delete('/:id', protect, checkRole(['PROFESSOR']), (req, res) => {
    deletePost.handle(req, res);
});


module.exports = router;
