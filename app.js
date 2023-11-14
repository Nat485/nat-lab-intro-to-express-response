

const express = require('express')
const app = express()
const magic8RandomResponses = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes - Definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes, and signs point to yes",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"

]

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
  
   