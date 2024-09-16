// Declare an empty array using JS literal notation to store            answer of Q-1
// student names in future.

// var students_Names = [];
// console.log(typeof(students_Names));


// Declare an empty array using JS object notation to store             answer of Q-2
// student names in future.

// var students_Names = new Array();
// console.log(typeof(students_Names));



// Declare and initialize a strings array.              answer of Q-3

// var arr = ["wajahat", "minhal"]
// console.log(arr)


// Declare and initialize a numbers array.              answer of Q-4

// var num = [10, 7, 4, 5]
// console.log(num)


// Declare and initialize a boolean array.              answer of Q-5

// var bool = [true, false, false, true]
// console.log(typeof(bool));


// Declare and initialize a mixed array.                answer of Q-6

// var mixArr = ["wajahat", 20, true]
// console.log(mixArr)

// Declare and Initialize an array and store available mobile           answer of Q-7
// networks in Pakistan.

// var networks = ["jazz", "ufone", "zong", "telenor", "onic"]
// console.log(networks)

// Declare and Initialize an array and store available education            answer of Q-8
// qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, 
// M. Phil., PhD). Show the listed qualifications in your browser 
// like:


// var education = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"]
// var deg = document.querySelector("#degree");
//  for(var i=0; i<education.length; i++){
//     deg.innerHTML += education[i]
//     deg.innerHTML += "<br/>"
//  }



// Declare and initialize an empty array to store top movies of             answer of Q-9
// 2015. Add movies one by one in an array. Display the elements 
// & length of array in your browser. (Use array’s length method)


// var movies = ["1)Avengers", "2)Spectre", "3)Jurassic world", "4)Inside Out"]
// var movie = document.querySelector("#movies");
// var length = document.querySelector("#len")
//  for(var i=0; i<movies.length; i++){
//     movie.innerHTML += movies[i]
//     movie.innerHTML += "<br/>"  
//  }
//  length.innerHTML = "length of the array is: " + movies.length;


// Declare and Initialize an array with your favorite cars. Show                answer of Q-10
// a. First index of the array
// b. Car at first index of the array
// c. Last index of the array
// d. Car at last index of the array


// var cars = ["Audi", "BMW", "Mercedes", "Bugati", "Lamborghini"]

// var list = document.querySelector("#car");
// var first_index = document.querySelector("#first_ind");
// var car_first_index = document.querySelector("#first_car");
// var last_index = document.querySelector("#last_ind");
// var car_last_index = document.querySelector("#last_car");

// for (var i=0 ; i<cars.length ; i++){
//     list.innerHTML += cars[i]
//     list.innerHTML += " "
// }

// first_index.innerHTML = "first index of the array: " + cars.indexOf("Audi")
// car_first_index.innerHTML = "car at first index of the array: " + cars.splice(0, 1)
// last_index.innerHTML = "last index of the array: " + cars.indexOf("Lamborghini")
// car_last_index.innerHTML = "car at last index of the array: " + cars.splice(-1, 1)


// Write a program to store 3 student names in an array. Take               answer 0f Q-11
// another array to store score of these three students. Assume 
// that total marks are 500 for each student, display the scores & 
// percentages of students like:

// var student_1 = document.querySelector("#student_1");
// var student_2 = document.querySelector("#student_2");
// var student_3 = document.querySelector("#student_3");

// var names = ["Wajahat Minhal", "Saad Ali", "Wasif Khan"]
// var score = [330, 370, 400]
// var total_marks = 500;

// student_1.innerHTML = "Score of Wajahat Minhal is: " + score[0] + ". Percentage: " + score[0] / total_marks *100
// student_2.innerHTML = "Score of Saad Ali is: " + score[1] + ". Percentage: " + score[1] / total_marks *100
// student_3.innerHTML = "Score of Wasif Khan is: " + score[2] + ". Percentage: " + score[2] / total_marks *100
