const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () =>{
    if(!menuOpen){
        menuBtn.classList.add('open');
        menuOpen = true;
    }else{
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});

ScrollReveal({ 
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400 
});

ScrollReveal().reveal('.sec1-head, .sec1-p .sec3-img .sec3-p', { delay: 500 });
ScrollReveal().reveal('.sec2-head, .sec3-head, .sec4-head, .sec3-img', { delay: 600, origin: 'left' });
ScrollReveal().reveal('.sec3-img, .main-cards, .forms',  { delay: 700, origin: 'bottom'});
ScrollReveal().reveal('.sec3-p', { delay: 600 });
// ScrollReveal().reveal('.sec3-p', { delay: 500, origin:'right' });

