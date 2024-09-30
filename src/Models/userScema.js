
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
    },
    // isVerified: {
    //     type: true,
    //     default: false
    // },
    // verifyToken: String,
    // verifyTokenExpire: Date
})
const User = mongoose.models.allusers || mongoose.model("allusers", userSchema)
export default User