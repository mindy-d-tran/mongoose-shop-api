import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
    name:{
        type: String
    },
    username: {
        type: String,
        minLength:3,
        maxLength: 20,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        minLength: 8,
        maxLength: 20
    }
}, {timestamps: true});

export default mongoose.model('User', usersSchema);