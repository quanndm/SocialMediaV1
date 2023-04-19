import mongoose from "mongoose";
async function ConnectDB(mongoUrl) {
    try {
        await mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log(`Mongo: Connect to DB successfully!!!`);
    } catch (error) {
        console.log(`Mongo: Connect to DB error: ${error.message}`);
    }
}
export default ConnectDB;