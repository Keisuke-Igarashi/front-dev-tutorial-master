document.addEventListener('DOMContentLoaded',function(){
   const el = document.querySelector('.animate-title');
   //console.log(el);
   const str = el.innerHTML.trim().split("");
   console.log(str);
//    let strhtml = '';
   let strhtml2 = str.reduce(function(accu,cuur){
        cuur = cuur.replace(/\s+/,'&nbsp');
        return accu += `<span class="char">${cuur}</span>`;
   },"");

   console.log(strhtml2);

//    for(let i of str){
//        strhtml += `<span class="char">${i}</span>`;
//    }

//    console.log(strhtml);
   el.innerHTML = strhtml2;

});