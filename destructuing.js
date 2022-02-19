const university = {
    name: 'Dhaka University',
    addres: 'Dhak-1221',
    student: 50043,
    Depatment: 30,
    teacher: 1040
}
const {
    name,
    addres,
    student,
    Depatment
} = university
console.log(name, addres, student, Depatment)
// console.log(university.name)
// console.log(university.addres)
// console.log(university.Depatment)
// console.log(university.name)
// console.log(university.name)
// console.log(university.name)

const company = {
    name: 'Tiger It Bangladesh',
    parmanentAddress: 'Rampura Dhaka',
    Work: {
        work1: 'Web Development',
        work2: "Seo",
        work3: 'Digital-Marketing'
    },
    ceo: {
        name1: 'Abul-Kalam',
        id: 1056,
    }

}
const {
    work1,
    work3
} = company.Work
const {
    name1,
    id
} = company.ceo
console.log(work1, name1, id, work3)