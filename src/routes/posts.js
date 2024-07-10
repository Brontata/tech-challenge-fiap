const express = require('express');
const listAllPosts = require('../controllers/Posts/ListAllPosts');
const findPostById = require('../controllers/Posts/FindPostById');
const createPost = require('../controllers/Posts/CreatePost');
const updatePost = require('../controllers/Posts/UpdatePost');
const deletePost = require('../controllers/Posts/DeletePost');
const searchPost = require('../controllers/Posts/SearchPost');
const router = express.Router();

router.get('/', listAllPosts.handle);
router.get('/:id', findPostById.handle);
router.post('/', createPost.handle);
router.put('/:id', updatePost.handle);
router.delete('/:id', deletePost.handle);
router.get('/search', searchPost.handle);

module.exports = router;
