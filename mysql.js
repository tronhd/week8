// var mysql      = require('mysql');
// var connection = mysql.createConnection({
//   host     : 'example.org',
//   user     : 'bob',
//   password : 'secret'
// });
 
// connection.connect(function(err) {
//   if (err) {
//     console.error('error connecting: ' + err.stack);
//     return;
//   }
 
//   console.log('connected as id ' + connection.threadId);
// });

// Exercise 1
// Fast Food app (Frontend)
// Create an html text input box, our customers are going to put their orders in here. Their orders are going to look like: " french fries: 1, shakes: 3"
// Add an order button. When we click this button it will send our order to the kitchen.
// Attach a Javascript event listener to the order button and listen for the click event. We are going to need to query the order button and then attach the event listener to it.
// In the listener take the customer's order and save it to a variable named customerOrder. log the customer's order to the console.
// Clear the contents in the input box. We want to free it up for the next customer's order
// Bonus Make a string with the customer's order in it and repeat back to the customer what they ordered.

var menu=[
  ["wafffle fries", 50],
  ["blizzard", 70],
  ["cheessy gordita crunch", 70],
  ["cheese burger", 60],
  ["cookout style burgers", 60],
  ["sweet tea", 40],
  ["cheese curds", 50],
  ["mcgriddle", 40],
  ["chick-fil-A nuggets", 1000],
  ["ultimate fondue", 13]
];

var order = document.getElementById("order");
var input = document.getElementById("userInput");

function myPrimeFunction(){
myPrime = setInterval(function(){ displayPrime("first parameter");}, 3000);
}

function order1(){
  if(input==menu[i][i]){
    document.getElementById("demo").innerHTML;
  } else{
    console.log("error");
  }
 };

//  function seeStock(){
//   var input = document.getElementById('userInput').value;
//   var valid = false;
//   for(var i=0; i<fruits.length; i++) {
//     if(input==fruits[i][0]){
//       console.log(fruits[i][1]);
//       valid = true;
//     } 
//   } 
//   if(!valid) {
//     console.log('try again!');
//   }
//  }