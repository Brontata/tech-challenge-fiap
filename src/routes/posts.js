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

router.get('/', listAllPosts.handle);
router.get('/:id', findPostById.handle);
//router.post('/', createPost.handle);
router.post('/create', protect, checkRole(['PROFESSOR']), (req, res) => {
    createPost.handle(req, res);
});
//router.put('/:id', updatePost.handle);
router.put('/:id', protect, checkRole(['PROFESSOR']), (req, res) => {
    updatePost.handle(req, res);
});

//router.delete('/:id', deletePost.handle);
router.delete('/:id', protect, checkRole(['PROFESSOR']), (req, res) => {
    deletePost.handle(req, res);
});

router.get('/search', searchPost.handle);

module.exports = router;
