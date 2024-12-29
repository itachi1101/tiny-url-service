const express = require("express")
const mongoose = require('mongoose')
const env = require("dotenv")
const app = express();

env.config();

const PORT = process.env.PORT 
mongoose.set("strictQuery", true);
try {
   mongoose.connect(process.env.MONGO_URL, {
    useUnifiedTopology : true   ,
    useNewUrlParser: true
   }) 
   console.log("Connected to MongoDB");
} catch (error) {
    console.log(`Error in connecting to MongoDB with error : ${error}`);
    process.exit();
    
}
app.listen(PORT,(req,res) => console.log(`Listening on PORT ${PORT}`))