// console.log(students);
// sayName('seth');

// have access to students from data.js

const updatedStudents = students.map(function (student) { // i can call the parameter whatever i want
    // console.log(student) // always console log to make sure i am iterating over the array to have access to every item of the objects in the array
    student.role = 'student'; //after the dot i can put whatever i want but in this case it is "role"
    return student;
});
console.log(updatedStudents);

// this how you add a role of "student" to the array




