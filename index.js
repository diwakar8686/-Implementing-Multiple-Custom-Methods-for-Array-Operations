function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}
function sumOfArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}
function sortAndConcat(arr1, arr2) {
    const sortedArr1 = arr1.slice().sort((a, b) => a - b);
    const sortedArr2 = arr2.slice().sort((a, b) => a - b);
    return sortedArr1.concat(sortedArr2);
}
const array1 = [12, 7, 5, 3, 10];
const array2 = [8, 2, 4, 9, 11];
const evenNumbers1 = filterEvenNumbers(array1);
const evenNumbers2 = filterEvenNumbers(array2);
const sum1 = sumOfArray(array1);
const sum2 = sumOfArray(array2);
const sortedConcatenatedArray = sortAndConcat(array1, array2);
console.log("Even numbers from array1:", evenNumbers1);
console.log("Even numbers from array2:", evenNumbers2);
console.log("Sum of array1:", sum1);
console.log("Sum of array2:", sum2);
console.log("Sorted and concatenated array:", sortedConcatenatedArray);
