import User from '../models/User.model.js';

/** READ */
export const getUser = async (req, res)=>{
    try {
        const {id} = req.params;
        const user = await User.findById(id);
        if(!user){
            return res.status(404).json({message: "User not found!!!"});
        }

        return res.status(200).json(user)
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

export const getUserFollows = async (req, res)=>{
    try {
        const {id} = req.params;
        const user = await User.findById(id);
        
        if(!user){
            return res.status(404).json({message: "User not found!!!"});
        }

        const followings = await Promise.all(
            user.followings.map((id)=>User.findById(id))
        );
        const followers = await Promise.all(
            user.followers.map((id)=>User.findById(id))
        );
        const formatFollowing = followings.map(
            ({_id, firstName, lastName, occupation, location, avatar})=>{
                return {_id, firstName, lastName, occupation, location, avatar};
            }
        );
        const formatFollower = followers.map(
            ({_id, firstName, lastName, occupation, location, avatar})=>{
                return {_id, firstName, lastName, occupation, location, avatar};
            }
        );
        
        return res.status(200).json({followings: formatFollowing, followers: formatFollower})
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

/* UPDATE */
export const AddOrRemoveFollower = async (req, res) => {
    try {
        const { id : userId, followingId} = req.params;

        const user = await User.findById(userId);
        const follower = await User.findById(followingId);
        if(!user){
            return res.status(404).json({message: "User not found!!!"});
        }

        if (user.followings.includes(followingId)) {
            user.followings = user.followings.filter((id)=>id !== followingId);
            follower.followers = follower.followers.filter((id)=>id !== userId);
        }
        else{
            user.followings.push(followingId);
            follower.followers.push( userId);
        }

        await user.save();
        await follower.save();

        const followings = await Promise.all(
            user.followings.map((id)=>User.findById(id))
        );
        const followers = await Promise.all(
            user.followers.map((id)=>User.findById(id))
        );
        const formatFollowing = followings.map(
            ({_id, firstName, lastName, occupation, location, avatar})=>{
                return {_id, firstName, lastName, occupation, location, avatar};
            }
        );
        const formatFollower = followers.map(
            ({_id, firstName, lastName, occupation, location, avatar})=>{
                return {_id, firstName, lastName, occupation, location, avatar};
            }
        );
        return res.status(200).json({followings: formatFollowing, followers: formatFollower})
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}