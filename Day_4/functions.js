// function show(){
//     console.log('show function');
// }
// show();


// // non parameterized function
// function show(name){
//     console.log(`The name is ${name}`);
// }
// show("Peter Parker");


// function show(a,b){
//     console.log(`The sum is ${a+b}`);
// }
// show(3,11);


// let num1=11;
// let num2=22;
// function show(a,b){
//     console.log(`The sum is ${a+b}`);
// }
// show(num1,num2);


// 
// var--- vanila js/pure js
// let and const--- ecma script

// function------vanila JS
// arrow function/callback-----ecma script


// arrow function
// const show=()=>{   //anonymous function
//     console.log('inside arrow show function');
// }
// show();


// const show=(a)=>{   //anonymous function
//     console.log('inside arrow show function');
// }
// show(11);


// const show=()=>{   //anonymous function
//     console.log('inside arrow show function');
// }
// console.log(show);



// const add=(function(){
//     let counter=0;
//     console.log('a counter, ',counter); 
//     return function(){
//         console.log('b counter, ',counter);
//         counter+=1;
//         return counter;
//     }
// })();
// console.log(add());
// console.log(add());
// console.log(add());


// show();
// function show(){
//     console.log('show function');
// }


// display();
// const display=()=>{
//     console.log('show function');
// }


let a=20;
function show(){
    let a=10;
    console.log(a);
}
show();
console.log('a',a);