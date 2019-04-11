// const ti = {
//     name : 'Ti',
//     age : 20,
//     getName:function (){
//         console.log(this.name)
//     }
// }
// const teo = {
//     name : 'Teo',
//     age : 20,
//     getName:function (){
//         console.log(this.name)
//     }
// }

class Person{
    constructor(ten, tuoi, school){
        this.name = ten
        this.age = tuoi
        this.school = school
    }
    getName(){
        console.log(this.name)
    }
    gotoSchool(){
        console.log(this.name +' dang hoc o ' + this.school.name)
        // console.log(`${this.name} dang hoc o ${this.school.name}`)
    }
}
// const school = {
//     name : 'KPT',
//     address: 'Charminton'
// }
class School{
    constructor(){
        this.name = 'KPT',
        this.address = 'Charminton'
    }
}
const school = new School;
const ti = new Person('Ti Nguyen',20,school)
ti.gotoSchool()



// const teo = new Person('Teo Nguyen',22)
// ti.name = 'Ti'
// ti.getName()
// console.log(ti.age)

// console.log(ti, teo)