const btn = document.querySelector('#btn');
const h1 = document.querySelector('#main-title');
console.log(btn);
console.log(h1);



function hello(){
    alert('hello');
    this.style.color = 'red';
}

function changefontcolor(){
    h1.style.color = 'red';
}

function changeBgColor(){
    h1.style.backgroundColor = 'green';
}

btn.addEventListener('click',hello);
btn.addEventListener('click',changefontcolor);
btn.addEventListener('click', changeBgColor);
