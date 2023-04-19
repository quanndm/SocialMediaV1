import mongoose from 'mongoose'  
const ImageSchema = new mongoose.Schema(
    {
        cloudId :{
            type: String,
            require: true
        },
        user :{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        public: {
            type: Boolean,
            default: true
        },
        fileName: String,
    },
    {
        timestamps : true
    }
)

const Image =  mongoose.model('User', ImageSchema);
export default Image