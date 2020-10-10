class Student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
}

class Bootcamp {
    constructor(name, level, students = []) {
        this.name = name;
        this.level = level;
        this.students = students;

    }

    registerStudent(student) {
        if (this.students.filter(stn => stn.email === student.email).length) {
            console.log(`Sorry, but ${student.email} is already registered.`)
        } else {
            console.log(`${student.email} is now registered`);
            this.students.push(student);
        }
        return this.students; 
    }
}
//Instantiate objects
const newSOne = new Student('Rick', 'rick@mail.com', 'Universe312');
const newSTwo = new Student('Morty', 'morty@mail.com', 'Seattle');
const bootcampOne = new Bootcamp('React', 'Intermediate');
//Run register method
bootcampOne.registerStudent(newSTwo);
bootcampOne.registerStudent(newSOne);
//Try to register twice 
bootcampOne.registerStudent(newSTwo);
//Log students registered array
console.log(bootcampOne.students);
