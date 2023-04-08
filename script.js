//complete this code
class Person {
	(name, age)
}

class Student extends Person {
	study() {
		console.log(`${Person.name} is studying`);
	}
}

class Teacher extends Person {
	teach() {
		console.log(`${Person.name} is teaching`);
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
