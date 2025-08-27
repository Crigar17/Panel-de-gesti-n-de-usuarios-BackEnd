const prestamoModel = require('../models/prestamo.model')

const postPrestamo = async (req, res) => {
    const inpuData = req.body

    try {
        const data = await prestamoModel.create( inpuData )

        res.status(200).json( data )
    } 
    catch (error) {
        res.status(400).json({msg: 'Error al crear prestamo'})        
    }
}

const getPrestamo = async (req, res) => {
    try {
        const data = await prestamoModel.find()

        res.status(200).json( data )
    } 
    catch (error) {
        res.status(400).json({msg: 'Error al obtener los prestamos'})
    }
}

const getByIdPrestamo = async (req, res) => {
    const id = req.params.id

    try {
        const data = await prestamoModel.findById( id )

        res.status(200).json( data )
    } 
    catch (error) {
        res.status(200).json({msg: 'Error al obtner el prestamo'})
    }
}

const patchPrestamo = async (req, res) => {
    const id =  req.params.id
    const inpuData = req.body

    try {
        const data = await prestamoModel.findByIdAndUpdate(id, inpuData, {new: true})

        res.status(200).json( data )
    } 
    catch (error) {
        res.status(400).json({msg: 'Error al actualizar el prestamo'})
    }
}


module.exports = {
    postPrestamo,
    getPrestamo,
    getByIdPrestamo,
    patchPrestamo
}
