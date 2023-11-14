//Dependecies

const express = require('express')

//Configuration

const app = express()
const port = 3003

//Routes

app.get('/', (req, res) => {
    res.send('Hello world!')
})

//Listen

app.listen(Port, ()=> {
    console.log('listening on port ${PORT}')

})