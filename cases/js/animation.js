document.addEventListener('DOMContentLoaded', function () {

 // чтобы точечки прыгали 
 const sparkleContainer = document.getElementById('sparkles');
 for (let i = 0; i < 50; i++) {
     const sparkle = document.createElement('div');
     sparkle.className = 'sparkle';
     sparkle.style.top = `${Math.random() * 100}vh`;
     sparkle.style.left = `${Math.random() * 100}vw`;
     sparkle.style.animationDuration = `${Math.random() * 5 + 3}s`;
     sparkleContainer.appendChild(sparkle);
 }
});
// чтобы страничка вниз плыла
document.getElementById('scroll-btn').addEventListener('click', () => {
    window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth'
    });
});
// чтобы картики листались 
document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".mySwiperGallery", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            480: { slidesPerView: 1 },
        }
    });
});