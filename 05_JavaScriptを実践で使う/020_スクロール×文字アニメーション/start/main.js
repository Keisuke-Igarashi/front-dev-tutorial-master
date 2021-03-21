document.addEventListener('DOMContentLoaded', function () {
    
});
const els = document.querySelectorAll('.animate-title');
const cb = (entry,observer) => {
    entry.forEach(entry => {

        if(entry.isIntersecting){
            const ta = new TextAnimation(entry.target);
            ta.animate();
            observer.unobserve(entry.target);
        }else{
        }
        
    });
};
const option = {
    root: null,
    rootMargin: "0px 0px 0px 0px",
    threshold:[0, 0.5, 1]
}
const io = new IntersectionObserver(cb, option);

els.forEach(els =>{
    io.observe(els);
})
