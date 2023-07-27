const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here

app.get("/",(req,res)=>{
    res.send("Hello world")
})

app.post("/add",(req,res)=>{
    const num1 = req.body.num1;
    const num2 = req.body.num2;

    if(typeof num1 !=="number" || typeof num2 !== "number"){
        res.status(400).json({
            status : "error",
            message : "Invalid data types"
        });
    }else if(num1 > 1000000 || num2 >1000000){
        res.status(400).json({
            status : "error",
            message : "Overflow"
        })
    }else if(num1 < -1000000 || num2 < -1000000){
        res.status(400).json({
            status : "error",
            message : "Underflow"
        })
    }else{
        let sum = num1 + num2;
        res.status(200).json({
            status : "success",
            message : "the sum of given two number",
            result : sum
        })
    }
})

app.post("/sub",(req,res)=>{
    const num1 = req.body.num1;
    const num2 = req.body.num2;

    if(typeof num1 !=="number" || typeof num2 !== "number"){
        res.status(400).json({
            status : "error",
            message : "Invalid data types"
        });
    }else if(num1 > 1000000 || num2 >1000000){
        res.status(400).json({
            status : "error",
            message : "Overflow"
        })
    }else if(num1 < -1000000 || num2 < -1000000){
        res.status(400).json({
            status : "error",
            message : "Underflow"
        })
    }else{
        let diff = num1 - num2;
        res.status(200).json({
            status : "success",
            message : "the difference of given two number",
            result : diff
        })
    }
})

app.post("/divide",(req,res)=>{
    const num1 = req.body.num1;
    const num2 = req.body.num2;

    if(typeof num1 !=="number" || typeof num2 !== "number"){
        res.status(400).json({
            status : "error",
            message : "Invalid data types"
        });
    }else if(num1 > 1000000 || num2 >1000000){
        res.status(400).json({
            status : "error",
            message : "Overflow"
        })
    }else if(num1 < -1000000 || num2 < -1000000){
        res.status(400).json({
            status : "error",
            message : "Underflow"
        })
    }else{
        let division = num1 / num2;
        res.status(200).json({
            status : "success",
            message : "the division of given two number",
            result : division
        })
    }
})

app.post("/multiply",(req,res)=>{
    const num1 = req.body.num1;
    const num2 = req.body.num2;

    if(typeof num1 !=="number" || typeof num2 !== "number"){
        res.status(400).json({
            status : "error",
            message : "Invalid data types"
        });
    }else if(num1 > 1000000 || num2 >1000000){
        res.status(400).json({
            status : "error",
            message : "Overflow"
        })
    }else if(num1 < -1000000 || num2 < -1000000){
        res.status(400).json({
            status : "error",
            message : "Underflow"
        })
    }else{
        let multi = num1 * num2;
        res.status(200).json({
            status : "success",
            message : "the product of given two number",
            result : multi
        })
    }
})



app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;