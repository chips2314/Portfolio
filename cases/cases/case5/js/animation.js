window.onload = function () {
    const container = document.querySelector(".scrolling-wrapper");
    const content = document.querySelector(".scrolling-content");
    let images = document.querySelectorAll(".scroll-img");

    if (images.length === 0) {
        console.error("Картинки не найдены!");
        return;
    }

    let imgWidth = images[0].offsetWidth;
    let gap = 10; 
    let speed = 2; 
    let totalWidth = (imgWidth + gap) * images.length;

    images.forEach((img) => {
        let clone = img.cloneNode(true);
        content.appendChild(clone);
    });

    images = document.querySelectorAll(".scroll-img");

    let position = 0;

    function moveImages() {
        position -= speed;
        if (position <= -totalWidth) {
            position = 0;
        }
        content.style.transform = `translateX(${position}px)`;
        requestAnimationFrame(moveImages);
    }

    moveImages();
};

document.querySelector(".btn-up").addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth" 
    });
  });
  
$(document).ready(function() {
    console.log("jQuery работает!");

    
    $('#openMenu').on('click', function() {
        $('#mobileMenu').collapse('show');
    });

  
    $('#closeMenu').on('click', function() {
        $('#mobileMenu').removeClass('show');
    });
    
   
    $(window).on('click', function(event) {
        if (!$(event.target).closest('#mobileMenu').length && !$(event.target).is('#openMenu')) {
            $('#mobileMenu').collapse('hide');
        }
    });
});

  
$(document).ready(function() {

    $('#closeModal').on('click', function() {
        $('#contactModal').modal('hide'); // Закрывает модальное окно правильно
    });
});


