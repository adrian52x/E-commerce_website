import rateLimit from "express-rate-limit";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();


let port = process.env.PORT || 3000;

let mongoURL = process.env.MONGO_URL;

//Limit requests for /login 
const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
	max: 6, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers

});

//Middleware for Authentication
// Version 1 - to store jwt in the header of request
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
      return res.status(401).json(err);
    }
    return next(); 
};

// Version 2 - to store jwt in the cookies
const verifyCookie = (req, res, next) => {
  const cookie = req.cookies["jwt"];

  if (!cookie) {
    return res.status(403).send("unauthenticated");
  }
  try {
      
    const decoded = jwt.verify(cookie, process.env.TOKEN_KEY);
    req.user = decoded;

  } catch (err) {
      console.log(err);
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


export { port, mongoURL, authLimiter, verifyToken, verifyCookie, adminOnly};