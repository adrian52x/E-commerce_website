import rateLimit from "express-rate-limit";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();


let port = process.env.PORT || 3000;

let mongoURL = process.env.MONGO_URL;

//Limit requests for /login 
const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
	max: 10, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers

});

//Middleware for Authentication
const verifyToken = (req, res, next) => {
    const token =
      req.body.token || req.query.token || req.headers["webshop-access-token"];
  
    if (!token) {
      return res.status(403).send("A token is required for authentication");
    }
    try {
        
      const decoded = jwt.verify(token, process.env.TOKEN_KEY);
      req.user = decoded;
      

    } catch (err) {
        console.log(err);
      //return res.status(401).send("Invalid Token. Expired: " + err.expiredAt);  //(use for test purpose: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjI0MWU4NzAyMzEyNTBmN2RjNWNkZWYwIiwiZW1haWwiOiJhZHJpYW4ubms1MnhAZ21haWwuY29tIiwiaWF0IjoxNjQ4NTM5ODI5LCJleHAiOjE2NDg1NTc4Mjl9.4c-2tnV0hc_qrJn429ijp0x01SK7LHFdS0hHY5dOin4 )
      return res.status(401).json(err);
    }
    return next(); 
};


const adminOnly = async function (req, res, next) {
  if( !(req.user.email === "adrian.nk52x@gmail.com") ){
      return res.status(401).send("Access Denied");
  }  
  next();
}



const mailPass = process.env.MAIL_PASS;
let test = process.env.TEST;

export { port, mongoURL, authLimiter, verifyToken, adminOnly, mailPass, test };