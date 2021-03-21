// function hello(callback , lastname){
//     console.log(callback);
//     console.log('hello ' + callback(lastname));
// }

// function getName(){
//     return 'Keisuke Igarashi';
// }

// const getFirstName = function(){
//     return 'Igarashi';
// }

// hello(getName);
// hello(function(name){
//     return 'Igarashi ' + name ;
// }, 'Keisuke');

// hello(()=> 'Igarashi');

// function doSomething(a,b,callback){
//     const result = callback(a,b);
//     console.log(result);
// }

// doSomething(2,3,multify);
// doSomething(2,3,addition);
// doSomething(2,3,division);

// function multify(a,b){
//     return a * b;
// }

// function addition(a,b){
//     return a + b;
// }

// function division(a,b){
//     return a / b;
// }


// const arry = [1,2,3,4,5];

// function forEach(ary,callback){
//     for(let i = 0; i < ary.length; i++){
//         callback(ary[i]);
//     }
// }

// forEach(arry,double);

// function log(val){
//     console.log(val);
// }

// function double(val){
//     val = val *2;
//     log(val);
// }

// function hello(callback,lastname){
//     console.log('hello ' + callback(lastname));
// }

// // const getName = function(){
// //     return 'Keisuke Igarashi';
// // }

// hello(function(lastname){
//     return 'Keisuke ' + lastname;
// }, 'Igarashi');

function doSomething(a,b,callback){
    const result = callback(a,b);
    console.log(result);
}

// function multiply(a,b){
//     return a * b;
// }

// function add(a,b){
//     return a + b;
// }

// doSomething(2,2,multiply);
// doSomething(2,3,add);

// doSomething(2,2,function(a,b){
//     return a * b;
// });

doSomething(2,2,(a,b) => a*b);
doSomething(2,3,(a,b)=> a+b);
