/** LOOPS ASSIGNMENT **/
//TASK 01: CREATING A LESSON PLAN
//OBJECTIVE:Create a list of lesson objects in typescript with alternating statuses to indicate whether each 
//lesson is runnng this year.
//STEPS TO FOLLOW:
//1.CREATE A BLANK ARRAY:Start by setting up an empty array named mywork that will hold objects.
//2.USE LOOP TO CREATE LESSONS: Write a for loop that runs from 1 to 10.In each iteration:
/*  *Create an object representing a lesson.
    *Each lesson should have a name propety,which is a string like "lesson 1",
    "Lesson 2",etc
    *Each lesson should have a status property, which alternate between true and false.This means "Lesson 1"will have
    status:true,"Lesson 2" will have status false and so on.
*/
//3.ADD THE LESSON TO THE ARRAY:Push each lesson object into the mywork array.
//4.PRINT THE RESULT:Finally,log the mywork array to the console to see the list of lessons
//HINTS
//use the tenary opertor to set the status property based on whether the lesson number is odd or even.
//the modulus opertor % can help determine if a number is even or odd.
console.log("OUTPUT OF TASK 01");
var myWork = [];
for (var lesson = 1; lesson <= 10; lesson++) {
    var lessons = {
        name: "lesson".concat(lesson),
        status: lesson % 2 == 0 ? true : false,
    };
    myWork.push(lessons);
}
console.log(myWork);
//TASK 02: GUESSING GAME (Using while loop)
//OBJECTIVE:Create a simple number guessing game where the user tries to guess a randomly generatrd number between
//and a specified maximum value using a predefined set of guesses.
//STEPS TO FOLLOW:
//1.SET A MAXIMUM VALUE:Create a variable to store the maximum value for the number guessing game.
//2.GENERATE A RANDOM NUMBER:Use math.random() and math.floor() to generate a random number between 1 and the maximum
//  value.Log this value to the console for development purposes.
//3.TRACK THE GUESS STATUS: Create a variable to track whether the user guess is correct.Set it to false initially.
//4.SIMULATE USER GUESSES:Use an array to store a series of predefined guesses.
//5.ITERATE OVER GUESSES:Use a while loop to iterte over the predefined guesses until the correct guess is made.
//6.CHECK THE USER'S GUESS:Inside the loop,check if the current guess matches the random number.Provide feedback if the 
//  guess is too high or too low.
console.log();
console.log("OUTPUT OF TASK 02");
var maxValue = 10;
var randomNumber = Math.floor(Math.random() * maxValue) + 1;
console.log("The random number was ".concat(randomNumber));
var guessStatus = false;
var userGuess = [1, 2, 3, 4, 5, 7, 8, 9, 10];
var u = 1;
while (u <= userGuess.length && !guessStatus) {
    if (u === randomNumber) {
        guessStatus = true;
        console.log("your guessed number is correct");
        break;
    }
    else if (u > randomNumber) {
        console.log("Your guessed number is too high");
    }
    else {
        console.log("Your guessed number is too low");
    }
    u++;
}
//TASK 03: COUNTER INCREMENT (Using do-while loop)
//OBJECTIVE:Create a program that increments a counter by a specified step value using a do...while loop and prints 
//the counter value to the console until it reaches or exceeds 100.
//STEPS TO FOLLOW: 
//1.Set the starting counter to 0:Create a variable counter and initialize it to 0.
//2.Create a variable,step to increase your counter by:Define a variable step to hold the value by which the counter 
//will be incremented.
//3.Add a do...while loop:In the loop,print the counter to the console and increment it by the step amount each iteration.
//4.Continue to the loop until the counter is equal to or more than 100:The loop should run as long as the counter is less than 100.
console.log();
console.log("OUTPUT OF TASK 03");
var counter = 0;
var step = 1;
do {
    console.log(counter);
    counter += step;
} while (counter < 100);
//TASK 04:EXPLORING THE OBJECTS WITH for...in LOOP
//OBJECTIVE:Practice working with objects in typescript and iterating over their properties using a for...in loop.
//Instructions:
//1.Create a simple object with three items:Define an object called myObject with three properties: item1,item2,item3,
//each with corresponding string values.
//2.Use a for...in loop to get properties names and values from the object: 
//Iterate through the properties of myObject using a for...in loop.
//Inside the loop,print each property's name and its corresponding value to the console.
console.log();
console.log("OUTPUT OF TASK 04");
var myObject = {
    item1: "Laptop",
    item2: "Mobile",
    item3: "Headphone",
};
for (var key in myObject) {
    console.log("".concat(key, ": ").concat(myObject[key]));
}
//TASK 05:EXPLORING ARRAYS WITH LOOPS (USING LOOP)
//OBJECTIVE:Practice working with arrays in typescript and using for loops and for...of loops to iterate through array element.
//Instructions:
//1.Create an empty array:
//Define an empty array called myArray.
//2.Run a loop 10 times.adding a new incrementing value to the array:
//Use a for loop to iterate 10 times.
//In each iteration,add a new incrementing value(starting from 1)to the myArray.
//3.Log the array into the console:
//After populating the array,log the myArray into the console.
//4.Use the for loop to iterate through the array:
//Use a for loop to iterate through the array elements.
//Adjust the number of iteration based on the number of values in the array.
//Output each array element along with its index into the console.
//5.Use the for...of loop to the output the value into the console from the array:
//Use a for...of loop to iterate through the array elements.
//Output each array element directly into the console.
console.log();
console.log("OUTPUT OF TASK 05");
var myArray = [];
for (var newIncrement = 1; newIncrement <= 10; newIncrement++) {
    var a = newIncrement - 1;
    console.log("The value of index ".concat(a, " is ").concat(myArray.push(newIncrement)));
}
for (var _i = 0, myArray_1 = myArray; _i < myArray_1.length; _i++) {
    var elements = myArray_1[_i];
    console.log(elements);
}
