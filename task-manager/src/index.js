const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')



const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)



app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const Task = require('./models/task')
const User = require('./models/user')

const main = async () => {
    // const task = await Task.findById('5f37ab9f3c7b0c3b68ae51c3')
    // await task.populate('owner').execPopulate()
    // console.log(task.owner)

    const user = await User.findById('5f37aaf390b6fb37e43ea30e')
    await user.populate('tasks').execPopulate()
    console.log(user.tasks)


 }

 main()
// const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken')


// const myFunction = async () => {
//     const token = jwt.sign({ _id: 'abc123'}, 'thisismynewcourse', { expiresIn: '1 hour'})

//     console.log(token)

//     const data = jwt.verify(token, 'thisismynewcourse')

//     console.log(data)

//     // const password = 'Red1234!'
//     // const hashedPassword = await bcrypt.hash(password, 8)

//     // console.log(password)
//     // console.log(hashedPassword)

//     // const isMatch = await bcrypt.compare("red1234!", hashedPassword)
//     // console.log(isMatch)
// }

// myFunction()