import Router from "express";

const router = Router();

import Product from "../models/product.js";


//Get all products
router.get("/", async (req, res) => {
    try {   
        const products = await Product.find()
        if(!products){
            throw new Error("No products")
        }
        res.status(200).json({total_products : products.length, webshop_products : products}) 
    } catch (error) {
        res.status(400).json({ message: "something wrong" })
    }
});


//Get products by Category
router.get("/:byCategory", async (req, res) => {
    const { byCategory } = req.params
    try {   
        const products = await Product.find({ category: byCategory })
        if(!products){
            throw new Error("No products")
        }
        res.status(200).json({total_products : products.length, webshop_products : products}) 
    } catch (error) {
        res.status(400).json({ message: "something wrong" })
    }
});

//Get products by a key (SEARCH)
router.get("/search/:key", async (req, res) => {
    const { key } = req.params
    const regex = new RegExp(key, 'i')
    try {   
        const products = await Product.find( { title: {$regex: regex} } );
        if(!products){
            throw new Error("No products")
        }
        res.status(200).json({total_products : products.length, webshop_products : products}) 
    } catch (error) {
        res.status(400).json({ message: "something wrong" })
    }
});


//Post a new product
router.post("/", async (req, res) => {
    const { title, description, price, category } = req.body
    const newProduct = new Product({ title, description, price, category })

    try {
        const product = await newProduct.save()
        if(!product){
            throw new Error("There was an error saving product")
        }
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ message: "something wrong" })
    }
}) 


//Delete a product by ID
router.delete('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const product = Product.findById(id)
        if(!product){
            throw new Error("No product found with id: "+ id)
        }
        
        const removed = await product.remove();
        if(!removed) {
            throw new Error("Problem ocurred while deleting")
        }

        res.status(200).json({ action: "deleted", id })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
});


export default router;
//module.exports = router;