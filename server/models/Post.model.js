import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        body: {
            type: String,
            require: true
        },
        images: {
            type: [mongoose.Schema.Types.ObjectId],
            ref: "Image",
            default: []
        },
        likes: {
            type: [mongoose.Schema.Types.ObjectId],
            ref: "User",
            default: []
        },
        comments: {
            type: [mongoose.Schema.Types.ObjectId],
            ref: "Comment",
            default: []
        }
    },  
    {
        timestamps: true
    }
);

const Post = mongoose.model("Post", PostSchema);
export default Post;