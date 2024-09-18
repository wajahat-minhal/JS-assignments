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


// Initialize an array with color names. Display the array                  answer 0f Q-12
// elements in your browser.


// var colours = ["Red", "Blue", "Purple", "Green"]
// var color = document.querySelector("#color");
// color.innerHTML = colours;

// a. Ask the user what color he/she wants to add to the 
// beginning & add that color to the beginning of the array. 
// Display the updated array in your browser.


// b. Ask the user what color he/she wants to add to the end & 
// add that color to the end of the array. Display the updated 
// array in your browser.
// c. Add two more color to the beginning of the array. Display 
// the updated array in your browser.
// d. Delete the first color in the array. Display the updated 
// array in your browser.
// e. Delete the last color in the array. Display the updated 
// array in your browser.
// f. Ask the user at which index he/she wants to add a color & 
// color name. Then add the color to desired position/index. 
// . Display the updated array in your browser.
// g. Ask the user at which index he/she wants to delete 
// color(s) & how many colors he/she wants to delete. Then 
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your 
// browser.





// Write a program to store student scores in an array & sort               answer 0f Q-13
// the array in ascending order using Array’s sort method.


// var students_score = [320, 230, 480, 120]
// console.log(students_score.sort())


// Write a program to sort the below mentioned array:                       answer 0f Q-14
// var fruits = [“strawberry”, “apple”, “orange”, “banana”];

// var list1 = document.querySelector("#unorder");
// var list2 = document.querySelector("#ordered");
// var fruits = ["strawberry", "apple", "orange", "banana"];
// list1.innerHTML = fruits
// list2.innerHTML = fruits.sort()


// Write a program to initialize an array with city names. Copy             answer 0f Q-15
// 3 array elements from cities array to selectedCities array. 


// var cities = ["Karachi", "Lahore", "Islamabad", "Peshawar", "Quetta"]
// var city = document.querySelector("#city");
// var selCity = document.querySelector("#sel_city");

// city.innerHTML = cities;
// selCity.innerHTML = cities.slice(2,4)


// Write a program to create a single string from the below                    answer 0f Q-16
// mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)


// var arr = ["This", "is", "my", "cat"];
// var array = document.querySelector("#array");
// var string = document.querySelector("#string");

// array.innerHTML = arr;
// string.innerHTML = arr.join(" ");


// Create a new array. Store values one by one in such a way                    answer 0f Q-17
// that you can access the values in the order in which they were 
// stored. (FIFO-First In First Out)

// Create an empty array
// var fifoArray = [];

// Add elements one by one (enqueue)
// fifoArray.push("Keyboard");
// fifoArray.push("Mouse");
// fifoArray.push("Monitor");
// fifoArray.push("Printer");

// console.log("FIFO Array:", fifoArray);

// Access values in the order they were added (dequeue)
// console.log("First Element:", fifoArray.shift()); // 1
// console.log("Second Element:", fifoArray.shift()); // 2
// console.log("Third Element:", fifoArray.shift()); // 3
// console.log("Third Element:", fifoArray.shift()); // 4


// Create a new array. Store values one by one in such a way                    answer 0f Q-18
// that you can access the values in reverse order. (Last In-First 
// Out)


// var fifoArray = [];

// Add elements one by one (enqueue)
// fifoArray.push("Keyboard");
// fifoArray.push("Mouse");
// fifoArray.push("Monitor");
// fifoArray.push("Printer");

// // console.log("FIFO Array:", fifoArray);

// // Access values in the order they were added (dequeue)
// console.log("First Element:", fifoArray.pop()); // 1
// console.log("Second Element:", fifoArray.pop()); // 2
// console.log("Third Element:", fifoArray.pop()); // 3
// console.log("Third Element:", fifoArray.pop()); // 4



// Write a program to store phone manufacturers (Apple,                     Question 0f Q-19
// Samsung, Motorola, Nokia, Sony & Haier) in an array. Display 
// the following dropdown/select menu in your browser using 
// document.write() method:


// Declare and initialize an empty multidimensional array.                  answer 0f Q-20
// (Array of arrays)

// var multiArr = [[],[]]
// console.log(multiArr)


// Declare and initialize a multidimensional array representing             answer 0f Q-21
// the following matrix:

// var multiArr = [
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1]
// ]
// console.log(multiArr[0])
// console.log(multiArr[1])
// console.log(multiArr[2])