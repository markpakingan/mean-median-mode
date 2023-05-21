const express = require("express");
const ExpressError = require("./expressError");
const app = express();
const {getMean, getMedian, getMode} = require("./function")


app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get('/mean', (req, res)=>{

    const {nums} = req.query;

    if(!nums){
        throw new ExpressError("invalid link", 403)
    }

    let numbers = nums.split(",").map(Number)

    if(numbers.some(isNaN)){
        throw new ExpressError("one of the query is not a valid number!", 403)
    }
    
    let mean = getMean(numbers)

    const response = {
        operation : "mean", 
        value : mean
    }

    res.send(response)
});


app.get('/median', (req, res)=> {
    const {nums} = req.query;

    
    if (!nums){
        throw new ExpressError("invalid link", 403)
    }

    // split into numbers
    const numbers = nums.split(",").map(Number)

    if (numbers.some(isNaN)){
        throw new ExpressError("there's an invalid number, please check!", 403)
    }

  
    let median = getMedian(numbers)

    const response = {
        operation: "median",
        value: median
    }

    res.send(response)
})



app.get('/mode', (req, res) =>{

    const {nums} = req.query;

    if(!nums){
        throw new ExpressError("invalid link", 403)
    }


    // split into numbers
    const numbers = nums.split(",").map(Number)
    
    if(numbers.some(isNaN)){
        throw new ExpressError("there's an invalid number, please check!", 403)
    }
    
    let mode = getMode(numbers)

    const response = {
        operation: "mode",

        value : mode,
    }
    res.send(response);
})

// NOTE: Always put at the end
app.listen(3000, () => {
    console.log("App on port 3000")
}) 
