// Topic 1 : Comparison Operators -----------------------------------------------------------

// Ex no 1

// var num1 = Number(prompt("Enter first number:"));
// var num2 = Number(prompt("Enter second number:"));
// if (num1 === num2) {
//     console.log("The numbers are equal.");
// }
// else {
//     console.log("The numbers are not equal.");
// }




// Topic 2 : Conditional Statements -----------------------------------------------------------



// Ex no 1

// var userAge = Number(prompt("Enter Your Age : "))
// if (userAge >= 18 ){
//     console.log("You are Eligible")
// }
// else {
//     console.log("You are not Eligible")
// }


// Ex no 2

// var marks = Number(prompt("Enter your marks:"));
// if (marks >= 80 && marks <= 100) {
//     console.log("Excellent! You achieved A Grade ");
// } 
// else if (marks >= 60 && marks < 80) {
//     console.log("Good! You achieved B Grade");
// } 
// else if (marks >= 40 && marks < 60) {
//     console.log("Average! You scored C Grade");
// } 
// else if (marks < 40 && marks >= 0) {
//     console.log("You failed!");
// }
// else {
//     console.log("Invalid Input");
// }



// Ex no 3

// var score = Number(prompt("Enter your score:"));
// if (score > 90 && score <= 100) {
//     console.log("Excellent");
// }
// else if (score >= 70 && score <= 90) {
//     console.log("Good");
// }
// else if (score < 70 && score >= 0) {
//     console.log("Needs Improvement");
// }
// else {
//     console.log("Invalid Input");
// }



// Ex no 4

// var fruits = ["apple","mango","banana","orange","grapes"];
// console.log(`The first fruit is : ${fruits[0]}`)
// console.log(`The last fruit is : ${fruits[4]}`)
// console.log(`The third fruit is : ${fruits[fruits.length - 2]}`)     // output : orange ....
                                                  //    5 - 2 = 3 , // 3 is the index .....
                                                  // and orange is on index 3 .....


// ------------------------------------------------------------------------------------------------



// Adding fruit to the array
// fruits.push("Orange");
// console.log("Updated fruits array:", fruits);



// Removing the last fruit from the array
// fruits.pop();
// console.log("After removing last fruit:", fruits);



// Adding a new fruit at the beginning of the array
// fruits.unshift("Pineapple");
// console.log("After adding a new fruit at the beginning:", fruits);



// Removing the first fruit from the array
// fruits.shift();
// console.log("After removing the first fruit:", fruits);



// insert a new element at a specific index in the array
// fruits.splice(2,0,"Grapes");
// console.log("After adding Grapes at index 2:", fruits);



// created new array using slice method without changing the original array
// var newarry = fruits.slice(1, 3);
// console.log("New array using slice method:", newarry);
// console.log("Original array after slice:", fruits);



//*******5. Loops **************/



// inverse Table of 5


// console.log("Inverse Table of 5:");
// for (var i=5; i<=5; i++) {
//     for (var j=10; j>=1; j--){
//         console.log(i + " * " + j + " = " + (i * j));
//     }
// }
// console.log("Inverse Table of 5 completed.");




// Flag veriable to control the loop
// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var target = Number(prompt("Enter a number to find in the array between 1 to 10:"));
// var found = false;
// for (var i = 0; i < numbers.length; i++) {
//     if (numbers[i] === target) {
//         console.log("Number found at index:", i);
//         found = true;
//         break; // Exit the loop once the number is found
        
//     } 
// } 
// if (found === false) {
//     console.log("Number not found in the array.");
// }




