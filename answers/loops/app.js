// Write a program to display the message “Hello World” 5 times             answer of question-1
// in your browser using for loop.

// var helloWorld = document.querySelector("#hello");               

// for(var i=0; i<5; i++){
//     helloWorld.innerHTML += `<li>hello world</li>`
// }



// Write a program to print numeric counting from 1 to 10.                  answer of question-2

// var count = document.querySelector("#count");               

// for(var i=1; i<=10; i++){
//     count.innerHTML += `<li>${i}</li>`
// }

// var table = document.querySelector("#table");                             answer of question-3

// var input = +prompt("Which Table Do You Want?");
// var size = +prompt("Enter size of table");

// for(var i=1; i<=size; i++){
//     table.innerHTML += `<li>${input} * ${i} = ${input * i}</li>`

// }



// You have an array                                                        answer of question-4
// A = [“Nokia”, “Samsung”, “Apple”, “Sony”, “Huawei”]
// Write each element on new line with the help of for loop.


// var arr = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"]

// var list = document.querySelector("#list")
// for(var i=0; i<arr.length; i++){
//         list.innerHTML += `<li>${arr[i]}</li>`
// }


// Write a program to print items of the following array using for          answer of question-5
// loop:
// fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"]
// var index = document.querySelector("#index")
// var list = document.querySelector("#list")
// for(var i=0; i<fruits.length; i++){
//         list.innerHTML += `<li>${fruits[i]}</li>`
// }

// for(var i=0; i<fruits.length; i++){
//     index.innerHTML += `<li>Element at index ${i} is ${fruits[i]}</li>`
// }



// Write a program to initialize an array of N items by using               answer of question-6
// prompt. Where N is number of items as entered by the user.

// var array = [];
// var size = +prompt("enter size of array");
// var printArr = document.querySelector("#print");

// for(var i=0; i<size; i++){
//     var inputt = prompt("Enter Element at index " + i)
//     array += inputt
//     printArr.innerHTML += `<li>${array}</li>`
//     array = ""
// }


// Generate the following series in your browser. See example                   answer of question-7
// output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k


// var forCounting = document.querySelector("#counting")
// for(var i=1; i<=15; i++){
//     forCounting.innerHTML += `${i},`
// }


// var backCounting = document.querySelector("#reverse")
// for(var i=10; i>0; i--){
//     backCounting.innerHTML += `${i},`
// }

// var even = document.querySelector("#even")
// for(var i=0; i<22; i++){
//     even.innerHTML += `${i},`
//     i++
// }

// var odd = document.querySelector("#odd")
// for(var i=1; i<21; i++){
//     odd.innerHTML += `${i},`
//     i++
// }


// var series = document.querySelector("#series")
// for (var i = 2; i < 22; i++) {
//     series.innerHTML += `${i}k,`
//     i++
// }



// You have an array                                                        answer of question-8
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array.
// After searching, prompt the user whether the given item is 
// found in the list or not. Example


// var array= ["cake", "apple pie", "cookie", "chips", "patties"]
// var input = prompt("Welcome To Contienetal Bakery. What Do You Want To Order Sir/Ma'am?")
// var match = document.querySelector("#match")
// var notMatch = document.querySelector("#not_match")

// for(var i=0; i<array.length; i++){
//     if(array[i] == input){
//         match.innerHTML = `${input} is available at index ${i} in our bakery`
//         break
//     } else if(array[i] != input){
//         notMatch.innerHTML = `we are sorry ${input} is not availabe in our bakery`
//     } else{

//     }

// }


// Write a program to identify the largest number in the given                  answer of question-9
// array.

var array = [24, 53, 78, 91, 12]
var arrayItems = document.querySelector("#array")
var largestItem = document.querySelector("#largest")

for(var i=0; i<array.length; i++){
    arrayItems.innerHTML = check()
}

function check(){
    if(array[i] <= array[i+1]){
        array[i++]
        check()
    } else if(array[i] >= array[i+1]){
        array[i++]
        check()
    } else{

    }
}