class Student {
    constructor(id, name, avatar, link) {
        this.id = id
        this.name = name
        this.avatar = avatar
        this.link = link
    }
}

let arrStudent = [
    new Student(1,'Tom','https://www.upsieutoc.com/images/2019/04/17/avatar1.jpg','https://www.google.com/'),
    new Student(2,'Jeary','https://www.upsieutoc.com/images/2019/04/17/avatar2.jpg','https://www.google.com/'),
    new Student(3,'Pill','https://www.upsieutoc.com/images/2019/04/17/avatar3.jpg','https://www.google.com/'),
    new Student(4,'Alex','https://www.upsieutoc.com/images/2019/04/17/avatar4.jpg','https://www.google.com/'),
    new Student(5,'Chip','https://www.upsieutoc.com/images/2019/04/17/avatar5.jpg','https://www.google.com/') 
]

module.exports = {Student,arrStudent}