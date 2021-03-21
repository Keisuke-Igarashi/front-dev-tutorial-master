document.addEventListener('DOMContentLoaded', function () {
    const btn = document.querySelector('#btn');
    const btn2 = document.querySelector('#btn2');
    console.log(btn);
    const ta = new aaa('.animate-title');
    const ta2 = new aaa('.animate-title-2');
    btn.addEventListener('click',ta.animation.bind(ta));
    btn2.addEventListener('click',ta2.animation.bind(ta2));

    ta.animation();
    ta2.animation();
    // ta.animation();
    // ta2.animation();
     
});

class aaa{
    constructor(el){
        console.log(this);
        this.el = document.querySelector(el);
        this.chars = this.el.innerHTML.trim().split("");
        console.log(this.el.innerHTML);
        console.log(this.el.innerHTML.trim());
        console.log(this.el.innerHTML.trim().split(""));
        console.log(this.chars);
        this.el.innerHTML = this._addspantag(this.chars);
    }
    
    _addspantag(chars){
        return chars.reduce((acc, curr) => {
            curr = curr.replace(/\s+/, '&nbsp;');
            return `${acc}<span class="char">${curr}</span>`;
        }, "");
    }

    animation(){
        this.el.classList.toggle('inview');
    }
};