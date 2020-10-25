function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
 
Person.prototype.speak = function() {
    console.log(`Hello my name is ${this.firstName} ${this.lastName}`);
}
 
function Student(firstName, lastName, course) {
    Person.call(this, firstName, lastName); // super(firstName, lastName)

    this.course = course;
}
 
// Student.prototype = Object.create(Person.prototype)
Object.setPrototypeOf(Student, Person);

Student.prototype.getGrades = function() {
    console.log(`my grade is 6 in my course: ${this.course}`);
}

Student.prototype.toString = function() {

    console.log(this.firstName);
}
 
let student = new Student('Dario', 'Georgiev', 'JS Advanced');
 
student.getGrades();
student.toString();
console.log(student.course);

/* implementing New keyword
function createNew(constructor, ...args) {
    // Create new object
    let newObject = {};
 
    // Set prototype
    Object.setPrototypeOf(newObject, constructor.prototype)
 
    // Call constructor with context
    constructor.apply(newObject, args);
 
    // Return new object
    return newObject;
} 

// let person2 = createNew(Student, 'Pesho', 'Georgiev') */