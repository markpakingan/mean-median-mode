const { getMean, getMedian, getMode } = require("./function")


// test("getMean should return an average", function() {
//     let average = getMean(1,3,5,7,9)
//     expect(average).toEqual(5)
// })


describe('getMean', () => {
  test('calculates the mean correctly for an array of numbers', () => {
    const numbers = [1, 2, 3, 4, 5];
    const mean = getMean(numbers);
    expect(mean).toBe(3); // Assert that the calculated mean is 3
  });
});