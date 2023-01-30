// console.log(students);
// sayName('seth');

// have access to students from data.js




// MAP METHOD 

/* #### updatedStudents VID 79

// 1. add role:'student' property to each object
//    using MAP method
// 2. assign to 'updatedStudents' variable and log */


const updatedStudents = students.map(function (student) { // i can call the parameter whatever i want
    // console.log(student) // always console log to make sure i am iterating over the array to have access to every item of the objects in the array
    student.role = 'student'; //after the dot i can put whatever i want but in this case it is "role"
    return student;
});
// console.log(updatedStudents);

// this how you add a role of "student" to an array









// FILTER METHOD

/* #### highScores VID 80.

// 1. filter array and return only scores >= 80
// 2. assign to 'highScores' variable and log */





const highScores = students.filter(function (student) { // 1. we are iterating over the array and setting up a filter. 
    if(student.score >= 80) { // setting a condition ---- i can change the score and it changes the array
        return student; //if the condition is met i return that particular item
    } //if the condition is NOT met i am returning undefined which will be false
});

// console.log(highScores)


// ALTERNATIVE WAY OF filter method VID 81.


// const highScores = students.filter(function (student) { // 1. we are iterating over the array and setting up a filter. 
//     if(student.score >= 80) return student;
//     // return student.score >= 80; // i am returning a condition
// });

// console.log(highScores)





// FIND METHOD VID 82.


// The biggest DIFFERENCE between find method and filter method is
// when using find method we get back the OBJECT.
// when using filter method we get back the ARRAY.

// #### specificId

// in this case i will get back the object

// 1. find specific id in array
// 2. assign to 'specificId' variable and log

const specificId = students.find(function(banana){
    return banana.id === 5;
});

console.log(specificId)

// we get back the specfic object in this case is because our items in data.js are objects





// in this case of find method we get back SPECIFIC STRING and the actual string of orange in the array.

const fruits = ['banana','orange'];

const random = fruits.find(function (fruit){
    return fruit === 'orange'
}) 

console.log(random)

// we use find to only look for 1 item we get back the object instead of the whole array 
// which is ehat the filter method does.










