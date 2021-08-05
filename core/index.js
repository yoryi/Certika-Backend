const db = require('../db/db')

const AddMonitores = async (req, res) => {
    const {
        nombre,
        apellido,
        programa,
        semestre,
        cedula,
        informacion,
    } = req.body
    const data = {
        nombre,
        apellido,
        programa,
        semestre,
        cedula,
        informacion,
    }
    await db.query('INSERT INTO monitores set? ', [data])
    res.json('Dato Guardado')
}

const EditMonitores = async (req, res) => {
    const ID = req.params.id
    const {
        nombre,
        apellido,
        programa,
        semestre,
        cedula,
        informacion,
    } = req.body
    const data = {
        nombre,
        apellido,
        programa,
        semestre,
        cedula,
        informacion,
    }
    await db.query('UPDATE monitores set? WHERE id = ?', [data, parseInt(ID)])
    res.json('DATOS MODIFICADOS')
}

const DeteleMonitores = async (req, res) => {
    const ID = req.params.id
    await db.query('DELETE FROM monitores WHERE id = ?', [parseInt(ID)])
    res.json('DATOS ELIMINADO')
}

const GetMonitores = async (req, res) => {
    const Monitores = await db.query('SELECT * FROM monitores')
    res.json(Monitores)
}

module.exports = {
    AddMonitores,
    GetMonitores,
    EditMonitores,
    DeteleMonitores
}