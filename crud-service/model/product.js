import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

// how our document look like
const productSchema = mongoose.Schema({
    nombre: String,
    descripcion: String,
    precio: String,
    cantidad: Number
});

autoIncrement.initialize(mongoose.connection);
productSchema.plugin(autoIncrement.plugin, 'product');
// we need to turn it into a model
const postProduct = mongoose.model('product', productSchema);

export default postProduct;