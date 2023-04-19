import mongoose from 'mongoose'  

const UserSchema = new  mongoose.Schema(
    {
        firstName: {
            type: String,
            require: true,
            min: 2,
            max: 50
        },
        lastName: {
            type: String,
            require: true,
            min: 2,
            max: 50
        },
        email: {
            type: String,
            require: true,
            max: 50,
            unique: true
        },
        password: {
            type: String,
            require: true,
            min: 6
        },
        avatar: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Image"
        },
        followings: {
            type: [mongoose.Schema.Types.ObjectId],
            ref: "User"
        },
        followers: {
            type: [mongoose.Schema.Types.ObjectId],
            ref: "User"
        },
        location: String,
        occupation: String,
        viewedProfile: {
            type: Number,
            default: 0
        },
        impression: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true
    }
)

const User =  mongoose.model('User', UserSchema);
export default User