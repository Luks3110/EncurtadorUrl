import mongoose from 'mongoose'
import { config } from '../config/constants'
export class MongoConnection{
    public async connect(): Promise<void>{
        try{
            await mongoose.connect(config.MONGO_URL)
            console.log('Connected to MongoDB')
        }catch(err){
            console.log(err)
            process.exit(1)
        }
    }
}