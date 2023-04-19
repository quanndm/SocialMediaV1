import Post from '../models/Post.model.js';

/* CREATE */

export const createPost = async (req, res) => {
    try {
        const {userId, content, PictureIds } = req.body;
        return res.status(200).json({message: "no content"})

    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

/* READ */
export const getFeedPosts = async (req, res) =>{
    try {
        
    } catch (error) {
        
    }
}

export const getUserPosts = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}

/* UPDATE */
export const likePost = async (req, res) =>{
    try {
        
    } catch (error) {
        
    }
}