import express from "express";
const app = express();
import mongoose from "mongoose";
import cors from "cors"
import morgan from "morgan"
import bodyParser from "body-parser"
import path from "path";
import session from "express-session";
import helmet from "helmet";
import nodemailer from "nodemailer";

import { port, mongoURL, test } from "./config.js";
import productRouter from "./router/products.js";
import userRouter from "./router/users.js";

//app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('tiny')); // display in console HTTP requests



//Setting up Database
mongoose
.connect(mongoURL, {
   useNewUrlParser: true, 
   useUnifiedTopology: true
})
.then(() => {console.log("Mongo Database connected successfully...")})
.catch((err) => console.log(err));


app.use('/api/products', productRouter);
app.use(userRouter);










if (process.env.NODE_ENV == 'production') {
    app.use(express.static('client/public'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'public', 'index.html'))
    });
}



//-----------------------------------------------------
const server = app.listen(port, () => {
    console.log(`Server is listening on port ${port} `, server.address().port, test);
});