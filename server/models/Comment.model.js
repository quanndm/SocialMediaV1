import mongoose from 'mongoose'

const CommentSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        post: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        },
        body: {
            type: String,
            require: true
        }
    },{
        timestamps: true
    }
);

const Comment = mongoose.model("Comment", CommentSchema);
export default Comment;