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
// let a = {}
// let b = a
// let c = {}

// console.log(a === c) //false
// console.log('a+b', a === b) //true
// console.log(a === a) //true

// different between == vs ===

// 1 == '1'
// console.log(1 === '1')

// basic concept in the hosting
// var myName = 'aliraza'

// const guessName = () => {
//   console.log(myName) //undefined

//   var myName = 'zaidi'
//   console.log(myName) //zaidi
// }
// console.log(myName)
// guessName()

// var array1 = [4, 6, 8, 9, 10]
// var array2 = [6, 4, 10, 8, 9]

// const newarray = array1.every((ele) => {
//   if (array2.indexOf(ele) > -1) {
//     return (ele = array2[array2.indexOf(ele)])
//   }
// })
// console.log(newarray)
console.time('codeStart')
let arry = [1, 2, 4, 5, 10, 6, 7, 4]
let newarry = [...new Set(arry)]

console.timeEnd('codeStart')
