import mongoose from 'mongoose'

const {Schema} = mongoose;

const ChatSchema = new Schema({
    pergunta: String,
})

const ChatModelo = mongoose.model("Chat", ChatSchema)
export default ChatModelo;