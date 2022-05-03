import Router from "express";
const router = Router();

import User from "../models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

import { authLimiter, verifyToken, verifyCookie, adminOnly } from "../config.js";


router.get("/welcome", verifyToken, (req, res) => {
    console.log(req.user.email);
    res.status(200).send("Welcome to our WebShop: "+ req.user.email);
});

router.get("/welcome2", verifyCookie, (req, res) => {
    console.log(req.user.email);
    res.status(200).send("Welcome to our WebShop: "+ req.user.email);
});

router.get("/admin", verifyToken, adminOnly, (req, res) => {
    console.log(req.user.email);
    res.status(200).send("ADMIN: "+ req.user.email);
});

router.get("/admin2", verifyCookie, adminOnly, (req, res) => {
    console.log(req.user.email);
    res.status(200).send("ADMIN: "+ req.user.email);
});

  


// Register
router.post("/register", authLimiter, async (req, res) => {
    // Our register logic starts here
   try {
        // Get user input
        const { firstName, lastName, email, password } = req.body;

        // Validate user input
        if (!(firstName && lastName && email && password )) {
            return res.status(400).send("All input are required");
        }

        // check if user already exist
        // Validate if user exist in our database
        const oldUser = await User.findOne({ email });

        if (oldUser) {
            return res.status(409).send("Email already in use");
        }

        //Encrypt user password
        const encryptedUserPassword = await bcrypt.hash(password, 10);

        // Create user in our database
        const user = await User.create({
            first_name: firstName,
            last_name: lastName,
            email: email.toLowerCase(), // sanitize
            password: encryptedUserPassword,
        });


        // return new user
        return res.status(201).json(user);
    } catch (err) {
            console.log(err);
        }
});


// Login
router.post("/login", authLimiter, async (req, res) => {
    try {
        // Get user input
        const { email, password } = req.body;
    
        // Validate user input
        if (!(email && password)) {
            res.status(400).send("All input is required");
        }
        // Validate if user exist in our database
        const user = await User.findOne({ email });
    
        if (user && (await bcrypt.compare(password, user.password))) {
            // Create token
            const token = jwt.sign({ user_id: user._id, email }, process.env.TOKEN_KEY, { expiresIn: "5h"});
    
            // save user token--?? remove later
            //user.token = token;

            // create cookie
            res.cookie('jwt', token, {
                httpOnly: true,
                maxAge: 5 * 60 * 60 * 1000 // 5 hours
            })
    
            // user
            return res.status(200).json(user);
        }
        return res.status(400).send("Invalid Credentials");
    } catch (error) {
        return res.status(400).json({ message: "something wrong" })
        }    
});


// Logout
router.post("/logout", async (req, res) => {
     res.cookie('jwt', '', {maxAge: 0}) 

     return res.status(200).send("Success: Logged out");
});


// Current user by token
router.get("/user", async (req, res) => {
    try {
        const cookie = req.cookies['jwt']


        const credentials = jwt.verify(cookie, process.env.TOKEN_KEY)

        const user = await User.findOne({ _id: credentials.user_id })

        // pass data without password
        const {password, ...data} = await user.toJSON()

        return res.status(200).json(data);

    } catch (error) {
        return res.status(401).send({ message: 'unauthenticated' })
    }

    
});


// Get all users
router.get("/users", async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json({total_users: users.length, webshop_users : users}) 
    } catch (error) {
        res.status(400).json({ message: "something wrong" })
    }
});

// Get user by ID
router.get("/users", async (req, res) => {
    const { id } = req.params
    try {
        const user = await User.findById(id)
        res.status(200).json({user}) 
    } catch (error) {
        res.status(400).json({ message: "something wrong" })
        
    }
});



export default router;