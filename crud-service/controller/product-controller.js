import Product from '../model/product.js';

// Get all products
export const getProducts = async(request, response) => {
    try {
        const products = await Product.find();
        console.log("get products")
        console.log(products)
        response.status(200).json(products);
    } catch (error) {
        response.status(404).json({ message: error.message })
    }
}

// Save data of the product in database
export const addProduct = async(request, response) => {
    const product = request.body;

    const newProduct = new Product(product);
    try {
        await newProduct.save();
        response.status(201).json(newProduct);
    } catch (error) {
        response.status(409).json({ message: error.message });
    }
}

// Get a product by id
export const getProductById = async(request, response) => {
    try {
        const product = await Product.findById(request.params.id);
        response.status(200).json(product);
    } catch (error) {
        response.status(404).json({ message: error.message })
    }
}

// Save data of edited product in the database
export const editProduct = async(request, response) => {
    let product = request.body;

    const editProduct = new Product(product);
    try {
        await Product.updateOne({ _id: request.params.id }, editProduct);
        response.status(201).json(editProduct);
    } catch (error) {
        response.status(409).json({ message: error.message });
    }
}

// deleting data of product from the database
export const deleteProduct = async(request, response) => {
    try {
        await Product.deleteOne({ _id: request.params.id });
        response.status(201).json("Product deleted Successfully");
    } catch (error) {
        response.status(409).json({ message: error.message });
    }
}