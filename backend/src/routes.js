import routes from 'express'
import multer from 'multer';
import multerConfig from './config/multer.js';
import BotModelo  from './models/Bots.js';
import PostModelo from './models/Post.js';
import ChatModelo from './models/Chats.js';
import { readFileSync } from 'fs';
import { MongoDBAtlasVectorSearch } from "langchain/vectorstores/mongodb_atlas";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { MongoClient } from "mongodb";
import {config} from 'dotenv'
config();

const client = new MongoClient(process.env.MONGODB_ATLAS_URI || "");
const namespace = "test.test";
const [dbName, collectionName] = namespace.split(".");
const collection = client.db(dbName).collection(collectionName);

const vectorStore = new MongoDBAtlasVectorSearch(new OpenAIEmbeddings(), {
  collection,
  indexName: "default", // The name of the Atlas search index. Defaults to "default"
  textKey: "text", // The name of the collection field containing the raw content. Defaults to "text"
  embeddingKey: "embedding", // The name of the collection field containing the embedded text. Defaults to "embedding"
});

const search = async (question) => {
    const resultOne = await vectorStore.similaritySearch(question,1);
    console.log(resultOne);
}


//await client.close();


const routesx = routes();

const getFile = (fileName) =>{
    

    const loader =  readFileSync(`./tmp/uploads/${fileName}`,'utf-8')
    
    
    return loader 
}

// POST ROUTES
routesx.get('/posts', async (req,res) =>{
    const posts = await PostModelo.find();

    res.json(posts)
})
routesx.post('/posts',multer(multerConfig).single('file'), async (req,res) =>{
    const {originalname:name,size,filename: key} = req.file;
    
    const post = await PostModelo.create({
        name,
        size,
        key,
        url: '',
    })
    return res.json(post)
})

routesx.delete('/posts/:id',async(req,res) =>{
    const post = await PostModelo.findById(req.params.id);

    await post.deleteOne();

    return res.send();
})

//BOT ROUTES
routesx.get('/bots', async (req,res) =>{
    const bots = await BotModelo.find();

    return res.json(bots)
})

routesx.post('/bots', async (req,res) =>{
    const {name,prompt,fileName} = req.body;
    
    const bot = await BotModelo.create({
        name,
        prompt,
        file: getFile(fileName),
    })
    return res.json(bot)
})

routesx.delete('/bots/:id',async(req,res) =>{
    const bot = await BotModelo.findById(req.params.id);

    await bot.deleteOne();

    return res.send();
})

//CHAT ROUTES
routesx.get('/chat', async (req,res) =>{
    const pergunta = req.body;
    
    return res.json({
        resposta: search(pergunta),
    })
})

routesx.post('/chat', async (req,res) =>{
    const {name,prompt,fileName} = req.body;
    
    const chat = await ChatModelo.create({
        name,
        prompt,
        file: getFile(fileName),
    })
    return res.json(chat)
})

routesx.delete('/chat/:id',async(req,res) =>{
    const chat = await ChatModelo.findById(req.params.id);

    await chat.deleteOne();

    return res.send();
})

export default routesx;