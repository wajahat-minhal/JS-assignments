//Addition                                      //Answer of Q-1 & 2

// var num1 = +prompt("enter a first number; "); 
// var num2 = +prompt("enter a second number; "); 
// var sum = num1 + num2;
// console.log(sum);


//Subtraction

// var num1 = +prompt("enter a first number; "); 
// var num2 = +prompt("enter a second number; "); 
// var sub = num1 - num2;
// console.log(sub);

//Multiplication

// var num1 = +prompt("enter a first number; "); 
// var num2 = +prompt("enter a second number; "); 
// var mul = num1 * num2;
// console.log(mul);


//Division

// var num1 = +prompt("enter a first number; "); 
// var num2 = +prompt("enter a second number; "); 
// var div = num1 / num2;
// console.log(div);


//Modulus


// var num1 = +prompt("enter a first number; "); 
// var num2 = +prompt("enter a second number; "); 
// var mod = num1 % num2;
// console.log(mod);




// var unKnown = "";                                //Answer of Q-3
// console.log("Value after variable declaration is: " + unKnown)

// unKnown = 5;
// console.log("Initial Value after variable declaration is: " + unKnown)

// unKnown = 5 + 1;
// console.log("Incremented Value: " + unKnown)

// unKnown = 5 + 1 + 7;
// console.log("Value after addition is: " + unKnown)

// unKnown = 5  + 7;
// console.log("Value after decrement is: " + unKnown)

// unKnown = (5 + 7) % 3;
// console.log("The remainder is: " + unKnown)





// var ticketPrice = 600;                          //Answer of Q-4
// var quantity = prompt("How many Tickets do you want to purchase: ");
// var totalPrice = ticketPrice * quantity;

// if(quantity == 1){
//     console.log("Total Cost to buy " + quantity + " ticket of a movie is: " + totalPrice +"PKR");

// } else if(quantity>=2){
//     console.log("Total Cost to buy " + quantity + " tickets of a movie is: " + totalPrice +"PKR");

// } else{
//     console.log("Total Cost to buy " + quantity + " tickets of a movie is: 0PKR");
// }





//Answer of Q-6
// var option = prompt("select an option in which you want to convert temperature: \n 1.Convert to Celsius \n 2.Convert to Fahrenheit")



// if (option == 1) {
//     var farh = +prompt("Enter a temperature; ");
//     var celsius = (farh - 32) * 5/9;
//     console.log("The temperature is " + celsius)
// } else if (option == 2) {
//     var cel = +prompt("Enter a temperature; ");
//     var fahrenheit = (cel * 9 / 5) + 32;
//     console.log("The temperature is " + fahrenheit)
// } else{
//     console.log("Please choose an right option!")
// }



//Answer of Q-7
// var biryani = 600;
// var quorma = 800;
// var shipchar = 100;

// var option = +prompt("Choose any option you want to order.\n 1.Biryani \n 2.Quorma")
// var plates = +prompt("How many plates do you want to order?")


// if (option == 1) {
//     if (plates == 1) {
//         console.log("Price of Biryani is: " + biryani + " PKR.")
//         console.log("No of plate Ordered is: " + plates)
//         console.log("Shipping Charges is: " + shipchar)

//         var totalCost = (biryani * plates) + shipchar;
//         console.log("Total Cost of Your Order is: " + totalCost)
//     } else if (plates >= 2) {
//         console.log("Price of Biryani is: " + biryani + " PKR.")
//         console.log("No of plate Ordered is: " + plates)
//         console.log("Shipping Charges is: " + shipchar)

//         var totalCost = (biryani * plates) + shipchar;
//         console.log("Total Cost of Your Order is: " + totalCost)

//     } else {
//         console.log("Choose a write option!")
//     }


// } else if (option == 2) {
//     if (plates == 1) {
//         console.log("Price of Biryani is: " + quorma + " PKR.")
//         console.log("No of plate Ordered is: " + plates)
//         console.log("Shipping Charges is: " + shipchar)

//         var totalCost = (quorma * plates) + shipchar;
//         console.log("Total Cost of Your Order is: " + totalCost)
//     } else if (plates >= 2) {
//         console.log("Price of Biryani is: " + quorma + " PKR.")
//         console.log("No of plate Ordered is: " + plates)
//         console.log("Shipping Charges is: " + shipchar)

//         var totalCost = (quorma * plates) + shipchar;
//         console.log("Total Cost of Your Order is: " + totalCost)

//     } else {
//         console.log("Choose a write option!")
//     }

// } else{
//     console.log("Choose a write option!")
// }



//Answer of Q-8

// var engMarks = +prompt("enter your marks");
// var mathsMarks = +prompt("enter your marks");
// var phyMarks  = +prompt("enter your marks");
// var chemMarks = +prompt("enter your marks");
// var islMarks = +prompt("enter your marks");

// var obtainedMarks = engMarks+mathsMarks+phyMarks+chemMarks+islMarks;
// var totalMarks = 500;

// var percentage = (obtainedMarks/totalMarks) *100

// console.log("Your Percentage is: " + percentage + " %")



//Asnwer of Q-9

// var usdDollar = 104.80;
// var saudiRiyal = 28;

// var currency = +prompt("Select a Currency: \n 1.USD dollar \n 2.Saudi Riyal \n 3.both" )


// if(currency==1){
//     var amount = +prompt("enter amount to convert: ")
//     var pakistaniRupee = amount * usdDollar;
//     console.log("Your Amount in Pakistan Rupees is: " + pakistaniRupee)
// } else if(currency==2){
//     var amount = +prompt("enter amount to convert: ")
//     var pakistaniRupee = amount * saudiRiyal;
//     console.log("Your Amount in Pakistan Rupees is: " + pakistaniRupee)
// } else if(currency==3){
//     var amount = +prompt("enter amount to convert: ")
//     var usdTORupee = amount * usdDollar;
//     var amount = +prompt("enter amount to convert: ")
//     var riyalToRupee = amount * saudiRiyal;

//     var totalAmount = usdTORupee + riyalToRupee;
//     console.log("Your Total Amount in Pakistani Rupees is: " + totalAmount)
     
// } else{
//     console.log("Please Select An Write Option!")
// }