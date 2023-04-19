import Image from '../models/Image.model.js';

export const getGalery = async (req, res)=>{
    try {
        
        return res.status(500).json({error: "no content"});
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
}