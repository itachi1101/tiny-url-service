const express = require("express")
const env = require("dotenv")
const app = express();

env.config();

const PORT = process.env.PORT 

app.listen(PORT,(req,res) => console.log(`Listening on PORT ${PORT}`))