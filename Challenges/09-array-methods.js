// console.log(students);
// sayName('seth');

// have access to students from data.js

const updatedStudents = students.map(function (student) { // i can call the parameter whatever i want
    // console.log(student) // always console log to make sure i am iterating over the array to have access to every item of the objects in the array
    student.role = 'student'; //after the dot i can put whatever i want but in this case it is "role"
    return student;
});
// console.log(updatedStudents);

// this how you add a role of "student" to an array


const highScores = students.filter(function (student) { // 1. we are iterating over the array and setting up a filter. 
    if(student.score >= 80) { // setting a condition ---- i can change the score and it changes the array
        return student; //if the condition is met i return that particular item
    } //if the condition is NOT met i am returning undefined which will be false
});

console.log(highScores)






