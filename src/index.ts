import { MongoConnection } from './database/mongoConnection';
import { URLController } from './controller/URLController';
import express, { Request, Response } from 'express'
import cors from 'cors'
const app = express()
const urlController = new URLController()

// configs
app.use(express.json())
app.use(cors())

const database = new MongoConnection()
database.connect()

app.post('/shorten', urlController.shorten)
app.get('/:hash', urlController.redirect)

app.listen(3000, () =>{
    console.log('Server running on port 3000')
})
