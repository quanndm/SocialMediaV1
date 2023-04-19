import express from 'express';
import {verifyToken} from '../middleware/AuthMiddleware.js'
import { likePost, getFeedPosts, getUserPosts } from '../controllers/PostController.js';

const router = express.Router();

/* READ */
router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);

/* UPDATE */
router.put("/:id/like", verifyToken, likePost)
  
export default router;
