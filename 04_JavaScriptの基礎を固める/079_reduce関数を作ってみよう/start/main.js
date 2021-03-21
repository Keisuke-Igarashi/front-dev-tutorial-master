const str = 'animation';
const strArry = str.split('');

function tag(accu, curr) {
    return `${accu}<${curr}>`;
}

function reduce(arry,callback,defaultValue){
    let accu = defaultValue;
    for(let i=0; i < arry.length; i++){
        let curr = arry[i];
        console.log(curr);
        accu = callback(accu,curr);
        console.log(accu);
    }

    return accu;
}

const result = reduce(strArry,tag,"");
console.log(result);
// const result = strArry.reduce(tag, "");
// console.log(result);