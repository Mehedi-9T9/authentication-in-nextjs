import mongoose from "mongoose";


const commentSchema = new mongoose.Schema({
    userName: {
        type: String,
        require: true
    },
    comment: {
        type: String,
        require: true
    }
})
const Comment = mongoose.models.comments || mongoose.model("comments", commentSchema)
export default Comment