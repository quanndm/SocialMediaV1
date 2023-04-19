import authRoutes from '../routes/auth.js'
import userRoutes from './user.js'
import postRoutes from './routes/post.js'

function ConfigRoutes(app){
    app.use("/api/auth", authRoutes);
    app.use("/api/users",userRoutes);
    app.use("/api/posts", postRoutes);
}

export default ConfigRoutes;