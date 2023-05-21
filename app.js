const express = require("express");
const ExpressError = require("./expressError");
const app = express();
const {getMean} = require("./function")


app.use(express.json());
app.use(express.urlencoded({extended:true}));

// app.get('/mean', (req, res)=>{
    
//     const {nums} = req.query;

//     if(!nums){
//         // res.status(400).send('Invalid input. "nums" query parameter is missing.');
//         // return;

//         throw new ExpressError("invalid link", 403)
//     }


//     // split into numbers
//     const numbers = nums.split(",").map(Number)


//     // check whether any number is invalid
//     if(numbers.some(isNaN)){
//         // res.status(400).send('Invalid input. "nums" query parameter should be a comma-separated list of numbers.');
//         // return;

//         throw new ExpressError("there's an invalid number, please check!", 403)
//     }


//     // calculate the mean
//     const sum = numbers.reduce((acc, number) => acc + number, 0 )
//     const mean = sum/numbers.length

//     // return as a json
//     const response = {
//         operation: 'mean', 
//         value: mean
//     }

//     res.send(response)
// })


app.get('/mean', (req, res)=>{

    const {nums} = req.query;

    if(!nums){
        throw new ExpressError("invalid link", 403)
    }

    let numbers = nums.split(",").map(Number)

    if(numbers.some(isNaN)){
        throw new ExpressError("one of the query is not a valid number!", 403)
    }
    
    let mean = getMean(nums)

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

    // Sort numbers
    let sortedNumbers = numbers.sort()

    // res.send(`here are the numbers ${sortedNumbers}`)

    const midpointIndex = Math.floor(sortedNumbers.length/2)
    let newAverage = 0;


    // check if odd or even then get the median
    if(sortedNumbers.length % 2 ===0){
        let firstNumber = sortedNumbers[midpointIndex-1]
        let secondNumber = sortedNumbers[midpointIndex]

        const average = (firstNumber + secondNumber)/2

        newAverage = average
    } else {

        const average = sortedNumbers[midpointIndex]
        newAverage = average
    }

    const response = {
        operation: "median",
        value: newAverage
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
    // sort the numbers
    let sortedNumbers = numbers.sort()

    // res.send(`the sorted numbers ${sortedNumbers}`)

    const countMap = {};
    // count the occurence of each numbers

    for (let num of sortedNumbers){

        if(countMap[num]){
            countMap[num]++
        } else {
            countMap[num] = 1
        }
    }

    let maxCount = 0;
    let mode = [];

    for (let key in countMap) {
        if (countMap.hasOwnProperty(key)) {
          if (countMap[key] > maxCount) {
            maxCount = countMap[key];
            mode = [key];
          } else if (countMap[key] === maxCount) {
            mode.push(key);
          }
        }
      }
    

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
