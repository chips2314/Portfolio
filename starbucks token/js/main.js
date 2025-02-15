
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



document.getElementById("buySTBUX").addEventListener("click", function() {
    document.getElementById("STBUX").style.display = "block";
});

document.getElementById("buySTBUX-2").addEventListener("click", function() {
    document.getElementById("STBUX").style.display = "block";
});
document.getElementById("openModal").addEventListener("click", function() {
    document.getElementById("walletModal").style.display = "block";
});
document.getElementById("openModal-2").addEventListener("click", function() {
    document.getElementById("walletModal").style.display = "block";
});

document.querySelectorAll(".close-btn-2").forEach(btn => {
    btn.addEventListener("click", function() {
        document.getElementById("walletModal").style.display = "none";
        document.getElementById("qrModal").style.display = "none";
        document.getElementById("STBUX").style.display = "none";
    });
});

window.onclick = function(event) {
    if (event.target == document.getElementById("walletModal")) {
        document.getElementById("walletModal").style.display = "none";
    }
    if (event.target == document.getElementById("qrModal")) {
        document.getElementById("qrModal").style.display = "none";
    }
    if (event.target == document.getElementById("STBUX")) {
        document.getElementById("STBUX").style.display = "none";
    }
};

document.getElementById("modal-2").addEventListener("click", function() {
    document.getElementById("walletModal").style.display = "none"; 
    document.getElementById("qrModal").style.display = "block"; 
});




document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper('.swiper-container', {
        loop: true, 
        navigation: {
            nextEl: '.next',
            prevEl: '.prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true, 
        },
        autoplay: false,
        slidesPerView: 1, 
    });
});

