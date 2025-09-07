const { insertPrestamo, prestamoGet, prestamoId, prestamoPathc } = require("../services/prestamo.service")

createPrestamo = async (req, res) => {
    const inputData = req.body

    try {
        const prestamoNew = insertPrestamo( inputData )

        const data = await prestamoNew.save()

        res.status(200).json( data )
    } 
    catch (error) {
        res.status(400).json({msg: 'Error al crear el prestamo'})
    }
}

getPrestamo = async (req, res) => {
    try {
        const data = await prestamoGet()

        res.status(200).json( data )
    } 
    catch (error) {
        res.status(400).json({msg: 'Error al obtener los prestamos'})
    }
}

getPrestamoById = async (req, res) => {
    const id = req.params.id
    
    try {
        const data = await prestamoId( id )

        res.status(200).json( data )
    } 
    catch (error) {
        res.status(400).json({msg: 'Error al obtener el prestamo'})
    }
}

patchPrestamo = async (req, res) => {
    const id = req.params.id
    const inputData = req.body

    try {
        const data = await prestamoPathc(id, inputData)

        res.status(200).json( data )
    } 
    catch (error) {
        res.status(400).json({msg: 'Error al actualizar el prestamo'})
    }
}


module.exports = {
    createPrestamo,
    getPrestamo,
    getPrestamoById,
    patchPrestamo
}