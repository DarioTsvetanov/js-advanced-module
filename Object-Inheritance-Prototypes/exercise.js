class Person {

    constructor(firstName, lastName) {

        this.firstName = firstName;
        this.lastName = lastName;
    }

    speak() {

        console.log(`Hello my name is ${this.firstName} ${this.lastName}`);
    }
}

class Student extends Person {

    constructor(firstName, lastName, course) {

        super(firstName, lastName);

        this.course = course;
    }

    getGrades() {

        console.log(`my grade is 6 in my course: ${this.course}`);
    }
}
let student = new Student('Pesho', 'Georgiev', 'JS Advanced');
student.getGrades();
console.log(student.course);