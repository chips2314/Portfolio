window.onload = function () {
    const container = document.querySelector(".scrolling-wrapper");
    const content = document.querySelector(".scrolling-content");
    let images = document.querySelectorAll(".scroll-img");

    if (images.length === 0) {
        console.error("Картинки не найдены!");
        return;
    }

    let gap = 20;  // расстояние между картинками
    let speed = 1.5; // скорость движения (px за кадр)

    // Функция клонирования картинок, чтобы заполнить ширину экрана
    function fillContent() {
        let totalWidth = content.scrollWidth;
        while (totalWidth < window.innerWidth * 2) { 
            images.forEach((img) => {
                let clone = img.cloneNode(true);
                content.appendChild(clone);
            });
            totalWidth = content.scrollWidth;
        }
    }

    fillContent();

    let position = 0;

    function moveImages() {
        position -= speed;

        if (Math.abs(position) >= content.scrollWidth / 2) {
            position = 0;
        }

        content.style.transform = `translateX(${position}px)`;
        requestAnimationFrame(moveImages);
    }

    moveImages();

    // При ресайзе экрана перезаполняем контент
    window.addEventListener("resize", () => {
        content.innerHTML = "";
        images.forEach((img) => {
            content.appendChild(img.cloneNode(true));
        });
        images = document.querySelectorAll(".scroll-img");
        fillContent();
        position = 0;
    });
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
        $('#mobileMenu').collapse('hide');  
    });

 
    $(window).on('click', function(event) {
        if (!$(event.target).closest('#mobileMenu').length && !$(event.target).is('#openMenu')) {
            $('#mobileMenu').collapse('hide');
        }
    });

    
    $('#mobileMenu .menu-link').on('click', function() {
        $('#mobileMenu').collapse('hide');
    });
});

  
$(document).ready(function() {

    $('#closeModal').on('click', function() {
        $('#contactModal').modal('hide'); 
    });
});


