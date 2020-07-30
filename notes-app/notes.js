const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return 'Your notes...'
}

const addNote = function (title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => note.title === title)

if (duplicateNotes.length === 0) {
    notes.push({
        title: title,
        body: body
    })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Title already taken!'))
    }


}


const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const removeNote = (title) => {
    const notes = loadNotes()
    const filtered = notes.filter((note) => note.title !== title)

    if (notes.length > filtered.length) {
        console.log(chalk.green.inverse("Note successfully removed!"))
        saveNotes(filtered)
    } else {
        console.log(chalk.red.inverse("No note found!"))
    }
    
    
}


const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
    
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}