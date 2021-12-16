const express = require('express')
const path = require('path')   //this is becasue we are hosting on heroku


const Rollbar = require('rollbar')
const rollbar = new Rollbar({
  accessToken: '34b5024aff7648168eb8851653e8b788',
  captureUncaught: true,
  captureUnhandledRejections: true
})


let students = []


const app = express()


app.use(rollbar.errorHandler)


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))  //this is sending back the path to the html file
    rollbar.info('html file served successfully')
})                                                          //path is a pre-built set of code that comes with node that functions as an object to let us do this. similar to requiring stuff like express.

app.post('/api/student', () => (req, res) => {
    let {name} = req.body
    name = name.trim()

    students.push(name)

    rollbar.log('Student added succesfully', {author:'Alaina', type: 'manual'})    //create students array up top
    res.status(200).send(students)
})


const port = process.env.PORT || 4545

app.listen(port, () => console.log(`Take us to warp ${port}!`))


