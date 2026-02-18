const jwt = require('jsonwebtoken');

function auth(req,res,next){
    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({
            message:'Unauthorized: No token provided'
        })
    }

    try {
console.log('Secret Key:', process.env.JWT_SECRET);      
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        req.user=decoded;

        return next();

    } catch (err) {
console.error('JWT Verification Failed:', err.message); 
        return res.status(401).json({
            message:'Unauthorized'
        })    

    }


}

module.exports = auth;
