import express, { json, urlencoded } from 'express'
import morgan from 'morgan'
import { connect } from 'mongoose'
import cors from 'cors'
import routes from './routes.js'
const app = express()
/*
    Database setup
*/
connect('mongodb+srv://wggvini:Pm9QrgdovEgIVhrn@cluster0.kam1o4r.mongodb.net/?retryWrites=true&w=majority')

app.use(cors())
app.use(json())
app.use(urlencoded({extended: true}))
app.use(morgan('dev'))
app.use(routes)
app.listen(3333)