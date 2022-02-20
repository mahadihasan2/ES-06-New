const numbers = [5, 8, 9, 10, 30]
const output2 = [];

// NewSystem 
const dobbuleIt = number => number * 2
for (const number of numbers) {
    const result = dobbuleIt(number)
    output2.push(result)
}


// console.log(output2)

// 1. loop korci 
// 2. Element diya Function ke call korci
// 3. Result akta array er modhe push korci

// // Old System 
// function dobbule(number) {
//     return number * 2
// }

// const output = numbers.map(dobbuleIt)
// const output = numbers.map(number => number * 2)
const output = numbers.map(x => x * 2)
console.log(output)
const squere = numbers.map(x => x * x)
console.log(squere)