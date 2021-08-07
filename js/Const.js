//Introduction to the JavaScript const keyword
// const RATE = "rub";
// RATE = 0.1;
// console.log(RATE);

// JavaScript const and Objects
// const person ={age:20};
// person.age = 30
// console.log(person.age);

// const person = Object.freeze({age: 10});
// person.age =20;
// console.log(person);

// const company = Object.freeze({
//     name: 'ABC corp',
//     address: {
//         street: 'North 1st street',
//         city: 'San Jose',
//         state: 'CA',
//         zipcode: 95134
    
//     }
    
// })
// company.address.country = 'USA'; 
// console.log(company);


//JavaScript const in a for loop

// let scores = [75,80,95];

// for(let score of scores) {
//     console.log(score);
// }
// let scores =[78,54,87,98,27]
// for( const score of scores) {
//     console.log(score);
// }

//TypeError: Assignment to constant variable.
// const x=12;
// x=13;
// x+=1;
// console.log(x);

//Example 2: It explains the const variable which contains the Block Scope.
// const x=22;
// {
//     const x=90;
//     console.log(x);
// }
// {
//     const x=77;
//     console.log(x);
// }
// {
//     const x=45;
//     console.log(x);
// }
// console.log(x);

//Example 3: It explains the const variable and assigned it after declaration.
//Uncaught SyntaxError: Missing initializer in const declaratio
// const x;
// x=12;
// console.log(x);

//Example 4: It explains the const variable cannot be Hoisted.

// x=3;
// console.log(x); //Uncaught SyntaxError: Missing initializer in const declaration
// const x;

// const arr1 = ["Shagufta", "Javascript", "tutorial", "developer"];
// console.log(arr1.toString());
// arr1[2] = "web";
// console.log(arr1.toString());

//Example 6: It explains that the object properties can be modified only reference to object cannot be changed.
// const person ={
//     first_name : "John",
//     last_name:"Smith",
//     Age:20,
//     About: "Web Developer"
// }
// console.log(person);
// // It is possible
// person.first_name = "John";
// person.last_name = "Doe";
// person.Age = 22;
// person.About = "Commerce undergraduate";
// console.log(person);
