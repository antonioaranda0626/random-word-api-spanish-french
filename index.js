const PORT = process.env.PORT || 8000

const express = require('express')
const axios = require('axios')
 
const app = express()

var spanishWords = require('an-array-of-spanish-words')
var frenchWords = require('an-array-of-french-words')

function getRandomIndex(max){
    return Math.floor(Math.random() * max)
}

let wordLength;

app.get('/', (req, res) => {
    res.json("Welcome to my Random Spanish/French Word API!")
})

app.get('/spanish/one-word', (req, res) => {
    let index = getRandomIndex(spanishWords.length)
    res.json(spanishWords[index])
})

app.get('/spanish/one-word/:wordLength', (req, res) => {
    var spanishWordsByLength = spanishWords.filter(word => word.length == req.params.wordLength)
    let index = getRandomIndex(spanishWordsByLength.length)
    res.json(spanishWordsByLength[index])
})

app.get('/spanish/array/:arrayLength', (req, res) => {
    let arrayResponse = []
    for(let i = 0; i < req.params.arrayLength; i++){
        let index = getRandomIndex(spanishWords.length)
        arrayResponse.push(spanishWords[index])
    }
    res.json(arrayResponse)
})
app.get('/spanish/array/:arrayLength/:wordLength', (req, res) => {
    var spanishWordsByLength = spanishWords.filter(word => word.length == req.params.wordLength)
    let arrayResponse = []
    for(let i = 0; i < req.params.arrayLength; i++){
        let index = getRandomIndex(spanishWordsByLength.length)
        arrayResponse.push(spanishWordsByLength[index])
    }
    res.json(arrayResponse)
})

app.get('/french/one-word', (req, res) => {
    let index = getRandomIndex(frenchWords.length)
    res.json(frenchWords[index])
})

app.get('/french/one-word/:wordLength', (req, res) => {
    var frenchWordsByLength = frenchWords.filter(word => word.length == req.params.wordLength)
    let index = getRandomIndex(frenchWordsByLength.length)
    res.json(frenchWordsByLength[index])
})

app.get('/french/array/:arrayLength', (req, res) => {
    let arrayResponse = []
    for(let i = 0; i < req.params.arrayLength; i++){
        let index = getRandomIndex(frenchWords.length)
        arrayResponse.push(frenchWords[index])
    }
    res.json(arrayResponse)
})
app.get('/french/array/:arrayLength/:wordLength', (req, res) => {
    var frenchWordsByLength = frenchWords.filter(word => word.length == req.params.wordLength)
    let arrayResponse = []
    for(let i = 0; i < req.params.arrayLength; i++){
        let index = getRandomIndex(frenchWordsByLength.length)
        arrayResponse.push(frenchWordsByLength[index])
    }
    res.json(arrayResponse)
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))


