

const express = require('express')

//Configuration


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

app.get("/hannibal-smith", (req, res) => {
    res.send("I love it when a plan comes together");
  });

app.get("/magic8", (req, res) => {
    const randomMessage = Math.floor(Math.random() * magic8RandomResponses.length)
    res.send(`<h1>${magic8RandomResponses[randomMessage]}</h1>`)
  });
 
  
module.exports = app
  
   