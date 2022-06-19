const router = require('express').Router()
const db = require('../db/db')
const { filterById, createNewNote, validateNotes, deleteNote } = require('../lib/notes')

// GET Notes API endpoint
router.get('/notes', (req, res) => {
    let results = db
    res.json(results)
})

// GET Note By Id API endpoint
router.get('/notes/:id', (req, res) => {
    let results = db
        // filter by Id notesArray
    const result = filterById(req.params.id, results)
    if (result != null) {
        res.json(result)
    } else {
        res.sendStatus(404)
    }
})

// POST Note API endpoint (create New Note)
router.post('/notes', (req, res) => {
    var results = db
        // validate Note object
    if (validateNotes(req.body)) {
        // create new Note
        result = createNewNote(req.body, results)
        res.json(result)

    } else {
        res.sendStatus(404)
    }
})


// DELETE by Id API endpoint
router.delete('/notes/:id', (req, res) => {
    var results = db
    result = deleteNote(req.params.id, results)
    res.send(result)

})

module.exports = router