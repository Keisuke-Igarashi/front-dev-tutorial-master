const arry = [1,2,3,4,5];

arry.reduce(function(accu,curr){   
    console.log(accu,curr);
    return accu + curr;
},null)

// const str = 'animation';
// // console.log(str);
// const strArry = str.split("");
// const result = strArry.reduce(function(accu,curr){
//     //return accu+"<"+curr+">";
//     return `${accu}<${curr}>`;
// },"")

// console.log(result);
