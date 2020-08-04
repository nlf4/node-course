const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')
const { listNotes } = require('./notes.js')


// const command = process.argv[2]

// if (command === 'add') {
//     console.log('Adding note')
// } else if (command === 'remove') {
//     console.log('Removing note!')
// }

//customize yargs version

yargs.version('1.1.0')

//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

//Create remove command
yargs.command({
    command: 'remove',
    describe: "Remove a note",
    builder: {
        title: {
            describe: 'Note title to remove',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

//Create list command
yargs.command({
    command: 'list',
    describe: "List a note",
    handler() {
        notes.listNotes()
    }
})

//Create read command
yargs.command({
    command: 'read',
    describe: "Read a note",
    builder: {
        title: {
            describe: 'Note title to read',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

// add, remove, read, list


yargs.parse()
// console.log(yargs.argv)