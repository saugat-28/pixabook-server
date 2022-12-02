// Library Imports
import express from "express";

// Local Imports
import { getPost, getPosts, getPostsBySearch, createPost, updatePost, deletePost, commentPost, likePost } from "../controllers/posts.js";
import auth from "../middleware/auth.js";

// Get Router from Express
const router = express.Router()

// Set routes for post requests
router.get('/search', getPostsBySearch);
router.get('/', getPosts);
router.get('/:id', getPost)
router.post('/', auth, createPost);
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);
router.patch('/:id/likepost', auth, likePost);
router.post('/:id/commentPost', auth, commentPost);

// Export Router for Posts
export default router;