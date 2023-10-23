import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';
import bcrypt from "bcryptjs";

// how our document look like
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Nombre es obligatorio"],
    },
    username: {
        type: String,
        required: [true, "El nombre de usuario es obligatorio"],
    },
    email: {
        type: String,
        required: [true, "Correo electronico es obligatorio"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Contraseña es obligatoria"],
    }
});

//userSchema.pre("save", async function() {
//    this.password = await bcrypt.hash(this.password, 12);
//});

autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, 'user');
// we need to turn it into a model
const postUser = mongoose.model('user', userSchema);

export default postUser;