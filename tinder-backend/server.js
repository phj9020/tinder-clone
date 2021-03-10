import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import Cards from "./dbCards.js";
import dotenv from "dotenv";

dotenv.config();

// APP Config 
const app = express();
const port = process.env.PORT || 8001;



// Middleware
app.use(cors({origin: true}))
app.use(express.json());

// DB Config 
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,

})

// API Endpoint
app.get("/", (req, res) =>{
    res.status(200).send("Hello World")
})

// add data into database
app.post("/tinder/cards", (req, res) =>{
    const dbCard = req.body;

    Cards.create(dbCard, (err, data) => {
        if(err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
});

// get data from database 
app.get("/tinder/cards", (req, res) => {
    Cards.find((err, data) => {
        if(err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data)
        }
    })
});


// Listener
app.listen(port,  ()=> console.log(`listening on localhost: ${port}`));