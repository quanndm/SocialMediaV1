import express from 'express'
import {verifyToken} from '../middleware/AuthMiddleware.js'
import { AddOrRemoveFollower, getUser, getUserFollows } from '../controllers/UserController.js';
import { verify } from 'jsonwebtoken';

const router = express.Router();
/* READ */
router.get("/:id", verifyToken, getUser);
router.get("/:id/follows", verify, getUserFollows);

/* UPDATE */
router.put("/:id/:followerID", verifyToken, AddOrRemoveFollower);

export default router;