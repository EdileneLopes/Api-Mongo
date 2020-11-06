const filmes = require('../models/ghibliSchema')

const getGhiblis =  (req,res) => {
    console.log(req.url)
    filmes.ghiblisCollection.find((error, ghibli) =>{
        if(error){
            return res.status(500).send(error)
        } else{
            return res.status(200).send(ghibli)
        }
    })
}



const getGhibliById =  (req,res) => {
   const idParam = req.params.id
   filmes.ghiblisCollection.findById(idParam, (error, ghibli) =>{
       if(error){
           return res.status(500).send(error)
       } else {
           if(ghibli){
               return res.status(200).send(ghibli)
           } else{
               return res.status(404).send("Filme Ghibli não encontrado :( ")
           }
       }
   }) 
}


const addGhibli = (req,res) => {
    console.log(req.url)
    const ghibliBody = req.body
    const ghibli = new filmes.ghiblisCollection(ghibliBody)

    ghibli.save((error) =>{
        if(error){
            return res.status(400).send(error)
        } else {
            return res.status(201).send(ghibli)
        }
    })
}


const updateGhibli = (req, res) => {
    const idParam = req.params.id
    const ghibliBody = req.body
    const novo = {new: true}

    filmes.ghiblisCollection.findByIdAndUpdate(
        idParam,
        ghibliBody,
        novo,
        (error, ghibli) =>{
            if(error){
                return res.status(500).send(error)
            } else if (ghibli) {
                return res.status(200).send(ghibli)
            } else{
                return res.sendStatus(404)
            }
        }
    )    
}


const deleteGhibli = (req, res) => {
    const idParam = req.params.id
    filmes.ghiblisCollection.findByIdAndDelete(idParam, (error, ghibli) =>
    {
        if(error){
            return res.status(500).send(error)
            } else{
                if(ghibli){
                    return res.status(200).send("O coitado do Ghibli foi apagado")
                }else {
                    return res.sendStatus(404)
                }
            }
        })
    } 

module.exports = {
    getGhiblis, 
    getGhibliById, 
    addGhibli, 
    updateGhibli, 
    deleteGhibli
}