const fs = require('fs')
const chalk = require('chalk')



const addNote = function (title, body) {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title)

if (!duplicateNote) {
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

const listNotes = () => {
    console.log(chalk.green.inverse("Your Notes"))

    const notes = loadNotes()
    notes.forEach((note) => console.log(note.title))
}

const readNote = (title) => {
    const notes = loadNotes()
    const foundNote = notes.find((note) => note.title === title)

    if (foundNote) {
        console.log(chalk.white.inverse(foundNote.title))
    console.log(foundNote.body)
    } else {
        console.log(chalk.red.inverse("No note found!"))
    }
    
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}