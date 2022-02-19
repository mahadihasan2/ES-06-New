// 1. Let And Constant 

const friend = 'Rakib'
let friends = 'Monir' + 'Emran'
friends = 'Hamid'
console.log(friends)
//2.  Defult Parameter and sparte oparetor
function findMax(array = []) {
    const max = Math.max(...array)
    return max
}

const biggest = findMax([])
console.log(biggest)
// 3. Template String 
const myOpinions = `My Name is ${friends}.I have a Mobile Samsung Gelaxci J71`
console.log(myOpinions)

// 4. Arrow Function 
const number = x => x * x
const numbers = number(12)
console.log(numbers)