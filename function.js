const getMean = (numbers)=> {
    
    // split into numbers
    // const numbers = nums.split(",").map(Number)
    const sum = numbers.reduce((acc, number) => acc + number, 0 )
    const mean = sum/numbers.length

    return mean
}



const getMedian = (nums) => {
     
  
    // split into numbers
    const numbers = nums.split(",").map(Number)

    // Sort numbers
    let sortedNumbers = numbers.sort((a, b) => a - b)


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

    return newAverage

}


const getMode = (nums) => {

    const numbers = nums.split(",").map(Number)
    
    // sort the numbers
    let sortedNumbers = numbers.sort((a, b) => a - b)

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
    
    
      return mode;
}



module.exports = {
    getMean, 
    getMedian, 
    getMode
  };
  