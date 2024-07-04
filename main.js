const express = require('express')
const bodyParser = require('body-parser')
const { log } = require('console')
const api_calls = require('./api_calls')

const app = express()
app.use(bodyParser.json())

app.get('/numbers/:id', async(req, res)=>{
    const id = req.params.id;
    let numbers;
    let val;
    switch (id){
        case "p":
            // log("primes");
            val = "primes"
            numbers = await api_calls.fetch_numbers(val)
            log(numbers["numbers"]);
            avg = await api_calls.getAvg()
            log(avg)
            break;
        case "e":
            val = "even"
            numbers = await fetch_numbers(val)
            log(numbers);
            break;
        case "f":
            val = "fibo"
            numbers = await fetch_numbers(val)
            log(numbers);
            break;
        case "r":
            val = "rand"
            numbers = await fetch_numbers(val)
            log(numbers);
            break;
    }
})

const PORT = 3000
app.listen(PORT, ()=>{
    console.log(`Server is running at ${PORT}`);
})