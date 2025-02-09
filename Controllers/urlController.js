const Urls = require( "../models/urls.js")
const {generateTinyUrl} = require("../Utils/tinyUrlGenerator.js")

module.exports.createURL = async (req,res) => {
    try {
       const {originalUrl}  = req.body;
       
    } catch (error) {
       res.status(400).send({error : `Failed at url creation ${error.message}`}) 
    }
}


module.exports.deleteURL = async (req,res) => {
   try {
     const _id = req.params.id ;
     const url = await Urls.findByIdAndDelete(_id);
     if(!url)
         return res.status(400).send();
     res.status(200).json({message : `Post has been delete successfully`})
   } catch (error) {
     res.status(500).json({error : error}) 
   }
}