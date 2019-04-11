class Person{
    constructor(name, height){
        this.name = name;
        this.height = height
    }
    get ten(){
        return this.name
    }
    set setupTen(ten){
        this.name = ten
    }
}
const teo = new Person('Teo', 160)
teo.setupTen = 'Teo Nguyen' // set
console.log(teo.ten)  // get ten() 