import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'
import dotenv from 'dotenv'
import multer from 'multer';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'path';
import {fileURLToPath} from 'url';
import ConnectDB from './utils/connectDB.js';
// import route

import ConfigRoutes from './routes/index.js';


// configuration
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();

const PORT = process.env.PORT || 3002;
const MONGO_URL = process.env.MONGO_URL;

const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy : "cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());
//temp
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

//File storage
const storage = multer.diskStorage({
    destination : (req, file, callback)=>{
        callback(null, "public/assets")
    },
    filename: (req, file, callback)=>{
        callback(null, file.originalname)
    }
});

const upload = multer({storage})
//CONFIG ROUTE
ConfigRoutes(app);


//SETUP         
app.listen(PORT, async () => {
    try {
        await ConnectDB(MONGO_URL);
        console.log(`Server Is Running: http://localhost:${PORT}`)
    } catch (error) {
        console.log(error.message);
    }
});