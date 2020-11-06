const herois = require('../models/heroisSchema')

const getHerois =  (req,res) => {
    console.log(req.url)
    herois.heroisCollection.find((error, heroi) =>{
        if(error){
            return res.status(500).send(error)
        } else{
            return res.status(200).send(heroi)
        }
    })
}



const getHeroisById =  (req,res) => {
   const idParam = req.params.id
   herois.heroisCollection.findById(idParam, (error, heroi) =>{
       if(error){
           return res.status(500).send(error)
       } else {
           if(heroi){
               return res.status(200).send(heroi)
           } else{
               return res.status(404).send("Heroi não encontrado :( ")
           }
       }
   }) 
}


const addHeroi = (req,res) => {
    console.log(req.url)
    const heroiBody = req.body
    const heroi = new herois.heroisCollection(heroiBody)

    heroi.save((error) =>{
        if(error){
            return res.status(400).send(error)
        } else {
            return res.status(201).send(heroi)
        }
    })
}


const updateHeroi = (req, res) => {
    const idParam = req.params.id
    const heroiBody = req.body
    const novo = {new: true}

    herois.heroisCollection.findByIdAndUpdate(
        idParam,
        heroiBody,
        //{$set:{heroiBody}},  não deu certo ...
        novo,
        (error, heroi) =>{
            if(error){
                return res.status(500).send(error)
            } else if (heroi) {
                return res.status(200).send(heroi)
            } else{
                return res.sendStatus(404)
            }
        }
    )    
}


  

const deleteHeroi = (req, res) => {
    const idParam = req.params.id
    herois.heroisCollection.findByIdAndDelete(idParam, (error, heroi) =>
    {
        if(error){
            return res.status(500).send(error)
            } else{
                if(heroi){
                    return res.status(200).send("Triste, Heroi foi apagado")
                }else {
                    return res.sendStatus(404)
                }
            }
        })
    } 

module.exports = {
    getHerois, 
    getHeroisById, 
    addHeroi, 
    updateHeroi, 
    deleteHeroi
}