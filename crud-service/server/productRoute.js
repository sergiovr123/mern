import express from 'express';
import { getProducts, addProduct, getProductById, editProduct, deleteProduct } from '../controller/product-controller.js';

const productRoute = express.Router();

productRoute.get('/products/allproducts', getProducts);
productRoute.get('/products', getProducts);
productRoute.post('/products/add', addProduct);
productRoute.get('/products/:id', getProductById);
productRoute.put('/products/:id', editProduct);
productRoute.delete('/products/:id', deleteProduct);

export default productRoute;