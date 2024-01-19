import mongoose from 'mongoose'

const {Schema} = mongoose;

const BotsSchema = new Schema({
    name: String,
    prompt: String,
    file: Object,
})

const BotModelo = mongoose.model("Bot", BotsSchema)
export default BotModelo;