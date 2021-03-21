const child = document.querySelector('.child');
const cb = (entry,observer) => {
    entry.forEach(entry => {

        if(entry.isIntersecting){
            console.log('inview');
            // observer.unobserve(entry.target);
            entry.target.classList.add('inview');
        }else{
            console.log('outview');
            entry.target.classList.remove('inview');
        }
        
    });
};
const option = {
    root: null,
    rootMargin: "-300px -150px 0px 0px",
    threshold:[0, 0.5, 1]
}
const io = new IntersectionObserver(cb, option);
io.observe(child);
