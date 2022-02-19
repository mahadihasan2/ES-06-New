// Declared Variable Based on the name of an object property

const myobject = {
    x: 46,
    y: 89,
    z: 43,
    q: 90,
    p: 765
};
const {
    x,
    y,
    p
} = myobject
console.log(x, y, p)

// Destructuring array
const [a, b, c] = [32, 67, 78, 90]
console.log(a, b, c)

// object Destructuring 
const {
    name,
    work
} = {
    name: 'Hossen',
    taka: 590,
    work: 'Baridara',
    addres: 'Narsingdi'
}
console.log(name, work)

// chaning Js 
// Array Chaning by object 
const pori = {
    name: 'Porimoni',
    salary: 890000,
    habby: 'Mukter'
}
console.log(pori.salary)