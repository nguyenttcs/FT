// function getData(){
//     // return console.log
//     function sum(a,b){
//         console.log(a+b)
//     }
//     return sum
// }
// getData()(1,3)

// function getData(name){
//     // return console.log
//     function getName(){
//         console.log(`My name is ${name}`)
//     }
//     return getName;
// }
// getData('Nam')
// console.log(getData('Nam'))

// var getData = function(name){
//     function getName(){
//         console.log(`My name is ${name}`)
//     }
//     return getName();
// }
// getData('Nam')
//console.log(getData('Nam'))

const teo = {
    name : 'Teo',
    age : 20,
    getName:function (){
        console.log(this.name)
    }
}
const ti = {
    name : 'Ti',
    age : 20,
    getName:function (){
        console.log(this.name)
    }
}
const arrPerson = [ {teo:teo}, ti ]
// console.log(arrPerson[1].name)
// console.log(arrPerson[0].teo.name)


// teo.getName() //Teo

// function Person(){
//     this.name = 'Teo'
// }


class Person{
    constructor(){
        name = 'Teo'
    }
    
}
console.log(Person)
console.log(Person.name)

// let p = new Person
// console.log(p)