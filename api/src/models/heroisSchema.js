const mongoose = require('mongoose')

const Schema = mongoose.Schema

const heroisSchema = new Schema({
    _id:{
        type : mongoose.Schema.Types.ObjectId, //tipo de dado
        auto: true, //autogerado?
        required: true //é obrigatório
    },
    nome: {
        type : String,
        required : true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    local: {
        type : String,
        required : true
    },
    usaCapa: {
        type : String,
        required : true
    },
    quantidadeGatos: {
        type : Number,
        required : true
    },
    quantidadeCachorros: {
        type : Number,
        required : true
    },
},
{
    collection: "herois",
    versionKey: false

   
}
)

const heroisCollection = mongoose.model('herois', heroisSchema)

module.exports = {heroisCollection}