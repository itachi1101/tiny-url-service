const mongoose = require("mongoose");

const defaultExpiryTime = () =>{
    const now = new Date();
    now.setFullYear(now.getFullYear() + 5);
    return now;
}

const ulrSchema = new mongoose.Schema ({
    originalUrl:{
        type : String,
        require: true,
        unique : true
    },
    tinyUrl : {
        type : String,
        require : true,
        unique : true
    },
    expiryTime : {
        type : Date,
        default: defaultExpiryTime

    }

},{timestamps : true})

const Urls = mongoose.model("Urls", ulrSchema);
module.exports = ulrSchema;