// let x=1;

// if(x===1){
//     let x=2;
//     console.log(x);// 2
// }
// console.log(x);//1

// function varTest(){
//     var x=1;
//     {
//         var x=2;
//         console.log(x);
//     }
//     console.log(x);
//     return x;
// }
// console.log(varTest());

//Problem #2: Variable oversharing in loops
// var messages = ["Hi","I am a we apge!","alert()"]
// for(var i=0; i<messages.length; i++){
//     alert(messages[i]);
// }
// var messages = ["Meow!", "I'm a talking cat!", "Callbacks are fun!"];
// for(var i=0; i<messages.length; i++){
//     setTimeout(function(){
//         cat.say(messages[i]);
//     },i*1500)
// }



//Introduction to the JavaScript let keyword
// let x=10;
// if(x==10){
//     let x=20;
//     console.log(x);//20
// }
// console.log(x);

// var a=10;
// console.log(window.a);
// let b=20;
// console.log(window.b);

//JavaScript let and callback function in a for loop
// for(var i=0;i<5;i++){
//     setTimeout(function(){
//         console.log(i);
//     },1000)
// }

//Immeadite callback function in a for loop
// for(var i=0;i<5;i++){
//     (function(j){
//         setTimeout(function(){
//             console.log(j);
//         },1000)
//     })(i)
// }

// for(let i=0;i<5;i++){
//     setTimeout(function(){
//         console.log(i);
//     },1000)
// }

// for(let i=0;i<5;i++){
//     setTimeout(()=>console.log(i),1000)
// }


//const keyWord

// const number =42;

// try{
//     number=99;
// }catch(err){console.log(err);}

// console.log(number);

//Destructuring assignment
// let a,b,rest;
// [a,b] =[10,20];
// console.log(a);

// console.log(b);

// [a,b, ...rest] = [10,20,30,40,50];

// console.log(rest);
// const { bar } = foo; // where foo = { bar:10, baz:12 };
// console.log(bar);

// let a= 10;
// a=20;
// a=a +5;
// console.log(a)

// const rate = 0.1;
// console.log(rate);
// rate=3.65;
// console.log(rate);

