

const getMean = (nums)=> {
    
    // split into numbers
    const numbers = nums.split(",").map(Number)
    const sum = numbers.reduce((acc, number) => acc + number, 0 )
    const mean = sum/numbers.length

    return mean
}



const getMedian = (nums) => {
     
  
    // split into numbers
    const numbers = nums.split(",").map(Number)

    // Sort numbers
    let sortedNumbers = numbers.sort()


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
