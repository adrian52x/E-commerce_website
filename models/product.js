//import {Schema, model} from "mongoose";

import pkg from 'mongoose';
const {Schema, model} = pkg;

const webshopSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    }
});

const Product = model('product', webshopSchema);

export default Product;
//module.exports = Product;