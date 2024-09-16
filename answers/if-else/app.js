// Write a program to check whether the given input number is               answer of Q-1
// divisible by 3 or else show a message “Number is not divisible 
// by 3”.


// var number = prompt("Enter a Number ");
// if(number%3 != 0){
//     console.log("number is not divisible by 3")

// }

// else{
//     console.log("number is divisible by 3")
// }


// Write a program that checks whether the given input is an even               answer of Q-2
// number or an odd number


// var evenOrOdd = prompt("Enter a Number");

// if (evenOrOdd%2 != 0){
//     console.log("the number is odd")

// } else {
//     console.log("the number is even")
// }



// Write an if/else statement with the following condition:                 answer of Q-3
// If the variable age is greater than 18, output "Old enough", 
// otherwise output "Too young"


// var age = prompt("Enter a age");

// if (age > 18){
//     console.log("old enough")

// } else {
//     console.log("too young")
// }


// Write a program that prompts the user for their name, and then           answer of Q-4
// displays a special greeting to that person if their name is the 
// same as yours. If the name entered by the user is anything 
// other than your name, your code should not produce any 
// output


// var username = prompt("Enter a name");
// var myName = "wajahat";

// if (username == myName){
//     console.log("Welcome to our page " + username + " how can we help you")

// } else {
//     console.log("")
// }



// Write a program to check whether the given input number is               switch case converted into ifelse
// divisible by 3 or not by using Switch Case statements. Show a 
// message “Number is not divisible by 3” or “Number is divisible 
// by 3”

// var input = +prompt("enter a number");
// var dividend = 3;

// if (input%dividend == 0){
//     console.log("Number is Divisible by 3")

// } else{
//     console.log("Number is Not Divisible by 3")
// }



// Write a program that takes a character(number or string) in a            answer of Q-6
// variable & checks whether the given input is a number, 
// uppercase letter or lower case letter. (Hint: ASCII codes:-
// A=65, Z=90, a=97, z=122)

// var numOrChar = prompt("enter your input");

// if(numOrChar >= 48 && numOrChar <=57){

//     console.log("the input value is number")

// } else if(numOrChar >= 65 && numOrChar <=90){

//     console.log("the input value is Upper case letter")

// } else if(numOrChar >= 97 && numOrChar <=122){

//     console.log("the input value is lower case letter")

// } else {
//     console.log("it is special character")
// }



// Write a program to create a calculator for +, -, *, /, % using          switch case converted into ifelse
// switch case statements. (number1, number2 and operator will 
// be input)



// var num1 = +prompt("enter number 1");
// var num2 = +prompt("enter number 2");
// var option = prompt("+, -, *, /, % ?");

// if(option  == "+"){
//     console.log("The sum is ", num1 + num2)

// } else if(option  == "-"){
//     console.log("The subtraction is ", num1 - num2)

// } else if(option  == "*"){
//     console.log("The multiplication is ", num1 * num2)

// } else if(option  == "/"){
//     console.log("The division is ", num1 / num2)

// } else if(option  == "%"){
//     console.log("The remainder is ", num1 % num2)

// } else {
//     console.log("invalid operation")
// }



// Write a program that takes time as input from user in 24 hours           answer of Q-8
// clock format like: 1900 = 7pm. Implement the following case 
// using if, else & else if statements


// var time = prompt("enter a time in 2400 format");

// var num = 0;

// if(time < num && time >2400 ){
//     console.log("please enter a correct time")
// } else if(time >= num && time < 1200 ){
//     console.log("Good Morning")
// } else if(time >= 1200 && time < 1700 ){
//     console.log("Good afternoon!")
// } else if(time >= 1700 && time < 2100 ){
//     console.log("Good evening!")
// } else if(time >= 2100 && time < 2400 ){
//     console.log("Good night!")
// } else{
//     console.log("Please inter correct time!")
// }



// Write a program that takes a calendar year in YYYY format in             answer of Q-9
// a variable. Check & notify the user whether it is a leap year or 
// not.


// var year = prompt("enter a year in YYYY format");


// Write a program that                                                 answer of Q-10
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then give 
// message “ Please enter your password”
// ii. Check if both passwords are same. If they are same, 
// show message “Correct! The password you entered 
// matches the original password”. Show “Incorrect 
// password” otherwise.

// var corrPass = "Undefeatable";
// var input = prompt("Enter a Password");

// if(corrPass == input) {
//     console.log("Correct! The password you entered matches the original password")
// } else{
//     console.log("Incorrect password")
// }


// Write a program that adds an else statement to the following             answer of Q-11
// script to display “You are not Fahad”
// var firstName = "Ali";
// if (firstName === "Fahad") {
//  document.write("Hello Fahad!");
// }

// var firstName = "Ali";
// if (firstName === "Fahad") {
//     console.log("Hello Fahad!");
// } else{
//     console.log("You are not Fahad")
// }


// This if/else statement does not work. Try to fix it:             answer of Q-12
//  var greeting;
//  var hour = 13;
//  if (hour < 18) {
//  greeting = "Good day";
//  else
//  greeting = "Good evening";
//  }


// var greeting;
//  var hour = 13;
//  if (hour < 18) {
//  greeting = "Good day";
//  console.log(greeting)
//  } else{
//  greeting = "Good evening";
//  console.log(greeting)
//  }


// Write a JavaScript program that accept two integers and                  answer of Q-13         
// display the larger. Also show if the two integers are equal.

// var num1 = prompt("Enter number 1");
// var num2 = prompt("Enter number 2");

// if(num1 > num2){
//     console.log("The given integer " + num1 + " is greater then " + num2)
// } else if(num1 == num2){
//     console.log("The given integer " + num1 + " is equal to " + num2)

// } else{
//     console.log("The given integer " + num1 + " is less then " + num2)
// }


// Write a program that takes input a number from user & state              answer of Q-14
// whether the number is positive, negative or zero.


// var num1 = prompt("Enter number 1");

// if(num1 < 0){
//     console.log("The given integer " + num1 + " is negative")
// } else if(num1 > 0){
//     console.log("The given integer " + num1 + " is positive")

// } else{
//     console.log("The given integer " + num1 + " is zero")
// }


// Ask the user what the current hour is. If the hour is between                answer of Q-15
// 6 and 9 a.m., tell the user, "Breakfast is served." If the hour is 
// between 11 a.m. and 1 p.m., tell the user, "Time for lunch." If 
// the hour is between 5 and 8 p.m., tell the user, "It's dinner 
// time." For any other hours, tell the user, "Sorry, you'll have to 
// wait, or go get a snack." (Hint: Store the hour in 24 hours clock 
// format i.e. 14 for 2pm , 15 for 3pm)



// var time = prompt("Enter a time")

// if (time >= 6 && time <= 9) {
//     console.log("Breakfast is served")
// } else if (time >= 11 && time <= 13) {
//     console.log("Time for lunch.")
// } else if (time >= 17 && time <= 20) {
//     console.log("It's a Dinner Time.")
// } else {
//     console.log("Sorry, you'll have to wait, or go get a snack.")
// }


// Write a program that stores value in a variable & tell whether               answer of Q-16
// the type of that variable is a "number", "string", "boolean" or 
// “undefined”


// var input = prompt("enter a value");

// var number = typeof(+input);
// console.log(number)

// var string = typeof(input);
// console.log(string)

// if(typeof(input) == Number){
//     console.log("The given input Data type is number")
// } else if(typeof(input) == String){
//     console.log("The given input Data type is string")
// } else if(typeof(input) == Boolean){
//     console.log("The given input Data type is Boolean")
// } else {
//     console.log("The given input Data type is undefiend")                not completed
// }


// Write a program that takes a character (i.e. string of length 1)             answer of Q-17
// and returns true if it is a vowel, false otherwise.

// var char = prompt("enter a character");

// if(char === "a"){
//     console.log("True")
// } else if(char === "e"){
//     console.log("True")
// } else if(char === "i"){
//     console.log("True")
// } else if(char === "0"){
//     console.log("True")
// } else if(char === "u"){
//     console.log("True")
// } else{
//     console.log("False")
// }



// Choose the correct comparison operator to display "true",                answer of Q-18
// when:
// 10 is NOT equal to 8.


// if(10 != 8){
//     console.log("True")
// } else {
//     console.log("False")
// }



// Use a switch statement to rewrite the following JavaScript               answer of Q-19
// code. Prompt the user for the number of a month rather than 
// setting it to 8:



// Use a conditional (ternary) operator for this exercise:                      answer of Q-20
// If the variable age is a value below 18, the value of the variable 
// voteable should be "Too young",
// otherwise the value of voteable should be "Old enough".

// Same as Q-3