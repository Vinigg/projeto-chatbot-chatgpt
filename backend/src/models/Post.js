import mongoose from 'mongoose'

const {Schema} = mongoose;
const PostSchema = new Schema({
    name: String,
    size: Number,
    key: String,
    url: String,
    createdAt:{
        type: Date,
        default: Date.now,
    },
})

const PostModelo = mongoose.model("Post", PostSchema)

export default PostModelo