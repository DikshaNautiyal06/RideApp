const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken');

module.exports.authUser = async (req, res, next) => {
    try {
        // Safely retrieve token from cookies or headers
        const token =
            req.cookies?.token ||
            (req.headers.authorization && req.headers.authorization.startsWith('Bearer')
                ? req.headers.authorization.split(' ')[1]
                : null);

        if (!token) {
            return res.status(401).json({ message: 'Unauthorized: No token provided' });
        }
        const isBlackListed=await userModel.findOne({token:token});
        if(isBlackListed){
            return res.status(401).json({message:'Unauthorized'});
        }

        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Retrieve user from the database
        const user = await userModel.findById(decoded._id);
        if (!user) {
            return res.status(401).json({ message: 'Unauthorized: User not found' });
        }

        // Attach user to the request object
        req.user = user;

        
        
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
};
