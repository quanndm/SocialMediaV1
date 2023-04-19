import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.model.js';

export const register = async (req, res)=>{
    try {
        const {
            firstName,
            lastName,
            email,
            password,
            location,
            occupation     
        } = req.body
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt) ;
        const user = new User({
            firstName,
            lastName,
            email,
            password: passwordHash,
            location,
            occupation
        });
        const savedUser = await user.save();
        res.status(201).json({ user: savedUser });
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const login = async (req, res)=>{
    try {
        const {email, password} = req.body;

        const user = await User.findOne({email: email});
        if(!user){
            return res.status(400).json({error: "User does not exists!!!"});
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({error: "Invalid Password!!!"})
        }

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);
        // delete user.password

        return res.status(200).json({token, user})
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

