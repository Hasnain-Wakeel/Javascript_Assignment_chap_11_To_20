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
// console.log(fruits.push("cherry"));
// console.log("Updated fruits array:", fruits);



// Removing the last fruit from the array
// fruits.pop();
// console.log("After removing last fruit:", fruits);



// Adding a new fruit at the beginning of the array

// fruits.unshift("pineapple");
// console.log("After adding a new fruit at the beginning:", fruits);



// Removing the first fruit from the array

// fruits.shift();
// console.log("After removing the first fruit:", fruits);



// insert a new element at a specific index in the array

// fruits.splice(4,0,"apricot");
// console.log("After adding Apricot at index 4:", fruits);



// created new array using slice method without changing the original array

// var newArray = fruits.slice(1, 3);
// console.log("New array using slice method:", newArray);
// console.log("Original array after slice:", fruits);



//*******5. Loops **************/



// Inverse Table of 5 


// console.log("Inverse Table of 5 : ");
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





// ------------- Extra Code For Practice----------------


// Prompt user for number
// var num = parseInt(prompt("Enter a number for table:"));

// // Prompt user for type
// var type = prompt("Type 'normal' for 1 to 10 or 'inverse' for 10 to 1:");

// // Decide loop based on type
// console.log(`Table of ${num} (${type}):`);

// if(type.toLowerCase() === "normal"){
//     for(var i = 1; i <= 10; i++){
//         console.log(num + " * " + i + " = " + (num * i));
//     }
// } else if(type.toLowerCase() === "inverse"){
//     for(var i = 10; i >= 1; i--){
//         console.log(num + " * " + i + " = " + (num * i));
//     }
// } else {
//     console.log("Invalid type! Type 'normal' or 'inverse'.");
// }

