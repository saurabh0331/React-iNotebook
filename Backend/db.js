const mongoose = require("mongoose")

const MongoURI = ("mongodb://0.0.0.0/inotebook")

const connecttoMongo =  ()=>{
    mongoose.connect(MongoURI)
    console.log("connected to mongoose succesfully")
}

module.exports = connecttoMongo

