// Import JWT for Checking Authentication
import jwt from 'jsonwebtoken';

// Authentication Function
const auth = async(req, res, next) => {
    try {
        // Get Authorization token from request
        const token = req.headers.authorization.split(" ")[1];
        // If token length is less than 500 Characters then it's custom token
        // Else it's Google Authentication Token
        const isCustomAuth = token.length < 500;

        let decodedData; 
        if(token && isCustomAuth){
            // If Token Exists and It's custom token 
            // Get Decoded Data and set custom userId in Request
            decodedData = jwt.verify(token, 'testKey');
            
            req.userId = decodedData?.id;
        } else {
            // Get Decoded Data and and set google userId in Request
            decodedData = jwt.decode(token);
            req.userId = decodedData?.sub;
        }

        next();
    } catch (error) {
        // Log Error
        console.log(error);
    }
}

export default auth;