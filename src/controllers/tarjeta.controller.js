const { insertTarjeta, tarejtaGet, tarjetaGetById, tarjetaPatch } = require("../services/tarjeta.service")

createTarjeta = async (req, res) => {
    const inputData = req.body

    try {
        const tarjetaNew = insertTarjeta( inputData )

        const data = await tarjetaNew.save()
        
        res.status(200).json( data )
    } 
    catch (error) {
        res.status(400).json({msg: 'Error al crear tarjeta'})
    }
}

getTarjeta = async (req, res) => {
    try {
        const data = await tarejtaGet()
        
        res.status(200).json( data )
    } 
    catch (error) {
        res.status(400).json({msg: 'Error al obtener las tarjetas'})
    }
}

getTarjetaById = async (req, res) => {
    const id = req.params.id

    try {
        const data =  await tarjetaGetById( id )

        res.status(200).json( data )
    } 
    catch (error) {
        res.status(400).json({msg: 'Error al obtener tarjeta'})
    }
}

patchTarjeta = async (req, res) => {
    const id = req.params.id
    const inputData = req.body

    try {
        const data = await tarjetaPatch(id, inputData)
        
        res.status(200).json( data )
    } 
    catch (error) {
        res.status(200).json({msg: 'Error al actualizar tarjeta'})
    }
}



module.exports = {
    createTarjeta,
    getTarjeta,
    getTarjetaById,
    patchTarjeta
}