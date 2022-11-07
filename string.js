//  pass by value are premitive data type////

// let myName = 'aliraza'
// let newName = myName
// myName = 'zaidi'
// console.log(myName)
// console.log(newName)

//  pass by refrences////
// object and array both are  non-premitive data type therefore they pass by reference/////
// yah par hum na memory ka refrences dia hai value nai de///

// const obj1 = {
//   id: 1,
//   name: 'aliraza',
// }
// const obj2 = obj1
// obj2.name = 'zaidi'
// console.log(obj1)
// console.log(obj2)

// let arrName = [
//   'aliraza',
//   {
//     name: 'ali',
//     pass: 'deve',
//   },
//   {
//     name: 'raza',
//     pass: 'reactjs',
//   },
// ]
// console.log(
//   arrName.indexOf({
//     name: 'ali',
//     pass: 'deve',
//   }),
// )
// const obj = {
//   name: 'aaa',
//   id: 1,
// }
// const obj1 = {
//   name: 'aaa',
//   id: 1,
// }
// console.log(obj1 !== obj ? 'yes' : 'no')

// let arrName = [
//   {
//     name: 'ali',
//     pass: 'deve',
//   },
//   {
//     name: 'raza',
//     pass: 'reactjs',
//   },
//   'aliraza',
// ]
// console.log(arrName.indexOf('aliraza'))

// two different object with same  values are never equal
let a = {}
let b = a
let c = {}

console.log(a === c) //false
console.log('a+b', a === b) //true
console.log(a === a) //true
