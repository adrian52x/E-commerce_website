import pkg from 'mongoose';
const {Schema, model} = pkg;

const userSchema = new Schema({
    first_name: { type: String, default: null },
    last_name: { type: String, default: null },
    email: { type: String, unique: true },
    password: { type: String },
    token: { type: String },
});



const User = model('user', userSchema);

export default User;