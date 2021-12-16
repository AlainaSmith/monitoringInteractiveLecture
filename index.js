const express = require('express')
const path = require('path')   //this is becasue we are hosting on heroku

const app = express()

app.get('/', (req, res) => {
    res.sendFile(path.join (__dirname, './public/index.html'))  //this is sending back the path to the html file
})                                                              //path is a pre-built set of code that comes with node that functions as an object to let us do this. similar to requiring stuff like express.

const port = process.env.PORT || 4545

app.listen(4545, () => console.log(`Take us to warp ${port}!`))


