//JavaScript Hoisting
// function catName(name){
//     console.log("My cat's name is " + name);

// }
// catName("Ruban");/*
// The result of the code above is: "My cat's name is Tiger"

// catName("Chole")

// function catName(name){
//     console.log("My cat's name is " + name);

// }

//Only declarations are hoisted
// console.log(num);
// var num;
// num=5;

// console.log(num); //Hoisting.js:21 Uncaught ReferenceError: num is not defined
// num=6;

//Declaration –> Initialisation/Assignment –> Usage

// let a;
// a=1000; 
// console.log(a);

// hoisting
// function hoisting(){
//     a=10;
//     let b= 50;
// }
// hoisting();
// console.log(a);
// console.log(b);//Uncaught ReferenceError: b is not defined
// console.log(name);
// var name="mukul"

//Let’s look at how function scoped variables are hoisted.
// function fun(){
//     console.log(name);
//     var name ="mukul latiyan"
// }
// fun()

// function scoped;
// function fun(){
//     var name;
//     console.log(name);
//     name = "matthew hayden"
// }
// fun()

// x=1;
// console.log(x);
// var x;
// x=1;
// y=2;
// console.log(x);
// console.log(y);
// var x;
// var y;

//Hoisting of Function
// alert('x = ' + x); // display x = undefined
// var x=1;

// alert(sum(10,10));
// function sum(val,val1){
//     return val + val1;
// }
//Example: Hoisting on function expression
// console.log(Add(6,6));
// var Add = function sum(val,val1){
//     return val + val1;
// }

//Hoisting Functions Before Variables
// alert(Useme);
// var Useme;
// function Useme(){
//     console.log("Useme function Called");
// }

// car ="BMW";
// var car;
// console.log(car);

// carDetails();
// function carDetails(){
//     var model = "AUDIO";
//     console.log(model);
// }

// function carDetails(){
//     var model;
//     model="AUDI"
//     console.log(model);
// }
// carDetails()

// carDetails(); // Prints “TypeError : carDetails is not a function”
// var carDetails = function(){
//     var model = "Audio";
//     console.log(model);
// }