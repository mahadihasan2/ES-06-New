const filter = [1, 2, 4, 6, 7, 9, 10, 15, 36, 32, 18]
const bigNumber = filter.filter(big => big > 20);
const smallNumber = filter.filter(small => small < 20);
console.log(bigNumber, smallNumber)