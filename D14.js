class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        return `Hello, I am ${this.name} and my age is ${this.age}`;
    }

    updateAge(newAge) {
        this.age = newAge;
        return `Edited: My age is ${this.age}`;
    }

    static genericGreeting() {
        return "Hello, welcome!";
    }
}

console.log(Person.genericGreeting());
const person = new Person('Sankalpa', 21);
console.log(person.greeting());
console.log(person.updateAge(22));

class Student extends Person {

    static studentCount = 0;

    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
        Student.studentCount++;
    }

    getStudentID() {
        return `Student ID of ${this.name}: ${this.studentId}`;
    }

    setStudentID(newId) {
        this.studentId = newId;
        return `Student ID has been updated to: ${this.studentId}`;
    }
}

const student = new Student('Sankalpa', 22, 'np05cp4s');
console.log(student.getStudentID());
const student1 = new Student("Jane", 20, "S12345");
console.log(`Total number of students: ${Student.studentCount}`);

// Update student ID
console.log(student.setStudentID('np05cp4s002'));
console.log(student.getStudentID());
