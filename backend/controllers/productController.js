import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";

// Function to add product
const addProduct = async (req, res) => {
    try {

        const { name, description, price, category, subCategory, bestseller } = req.body;

        const image1 = req.files.image1 && req.files.image1[0];
        const image2 = req.files.image2 && req.files.image2[0];
        const image3 = req.files.image3 && req.files.image3[0];
        const image4 = req.files.image4 && req.files.image4[0];

        const images = [image1, image2, image3, image4].filter((item) => item !== undefined);

        // Upload the images to Cloudinary
        let imagesUrl = await Promise.all(
            images.map(async (item) => {
                let result = await cloudinary.uploader.upload(item.path, { resource_type: 'image' });
                return result.secure_url;
            })
        );

        const productData = {
            name,
            description,
            category,
            price: Number(price),
            subCategory,
            bestseller: bestseller === "true" ? true : false,
            image: imagesUrl,
            date: Date.now()
        };

        console.log(productData);

        const product = new productModel(productData);
        await product.save();

        res.json({ success: true, message: "Product Added" });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}
const editProduct = async (req, res) => {
    try {
        const { productId, name, description, price, category, subCategory, bestseller } = req.body;
        const existingProduct = await productModel.findById(productId);
        
        if (!existingProduct) {
            return res.json({ success: false, message: "Product not found" });
        }

        
        let imagesUrl = [...existingProduct.image];
        const imageFields = ['image1', 'image2', 'image3', 'image4'];
        
        for (let i = 0; i < imageFields.length; i++) {
            const field = imageFields[i];
            if (req.files[field]?.[0]) {
                const result = await cloudinary.uploader.upload(req.files[field][0].path);
                imagesUrl[i] = result.secure_url;
            }
        }
        imagesUrl = imagesUrl.filter(url => url); 

        const updateData = {
            name: name || existingProduct.name,
            description: description || existingProduct.description,
            price: Number(price) || existingProduct.price,
            category: category || existingProduct.category,
            subCategory: subCategory || existingProduct.subCategory,
            bestseller: bestseller === "true",
            image: imagesUrl
        };

        await productModel.findByIdAndUpdate(productId, updateData);
        res.json({ success: true, message: "Product updated" });
        
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}
// Function to list all products
const listProducts = async (req, res) => {
    try {
        const products = await productModel.find({});
        res.json({ success: true, products });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// Function to remove a product
const removeProduct = async (req, res) => {
    try {
        await productModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Product Removed" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// Function to get single product info
const singleProduct = async (req, res) => {
    try {
        const { productId } = req.body;
        const product = await productModel.findById(productId);
        res.json({ success: true, product });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

export { listProducts, addProduct, removeProduct, singleProduct, editProduct };
