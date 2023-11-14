//Dependecies

const express = require('express')

//Configuration

const app = express()
const port = 3003

//Routes

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.get("/tim-gunn", (req, res) => {
    res.send("Make it work");
  });


app.get("/emril", (req, res) => {
    res.send("Bam!");
  });

//Listen

app.listen(3003, ()=> {
    console.log('listening on port ${PORT}')

})