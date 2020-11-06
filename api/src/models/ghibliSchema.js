const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ghibliSchema = new Schema({
    _id:{
        type : mongoose.Schema.Types.ObjectId, //tipo de dado
        auto: true, //autogerado?
        required: true //é obrigatório
    },
    title: {
        type : String,
        required : true
    },
    description: {
        type: String,
        required: true
    },
    
},
{
    collection: "ghiblis",
    versionKey: false

   
}
)

const ghiblisCollection = mongoose.model('ghibli', ghibliSchema)

module.exports = {ghiblisCollection}