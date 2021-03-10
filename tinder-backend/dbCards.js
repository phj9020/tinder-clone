import mongoose from 'mongoose';


const cardSchema =new mongoose.Schema({
    name: String, 
    imgUrl: String,
})

// where define collection name 
export default mongoose.model('cards', cardSchema)