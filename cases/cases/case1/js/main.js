//animation

function addShineEffect() {
    document.querySelectorAll(".btn-about").forEach(button => {
        button.classList.add("shine");
        setTimeout(() => button.classList.remove("shine"), 500);
    });
}

addShineEffect();
setInterval(addShineEffect, 5000);


//first slider

document.addEventListener("DOMContentLoaded", function () {
    new Swiper(".mySwiper", {
        loop: true,
        autoplay: false,
        navigation: {
            nextEl: ".custom-next",
            prevEl: ".custom-prev"
        },
        effect: "fade",
        fadeEffect: {
            crossFade: true
        }
    });
});
//second slider

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
            1424: { slidesPerView: 4 },
            1024: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            480: { slidesPerView: 1 },
        }
    });
});
//language
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => { 
        const langBtn = document.getElementById("lang-btn");
        const langList = document.getElementById("lang-list");

        if (!langBtn || !langList) return;  

        langBtn.addEventListener("click", function () {
            if (langList.style.opacity === "1") {
                langList.style.opacity = "0";
                langList.style.visibility = "hidden";
                langList.style.transform = "translateY(-10px)";
            } else {
                langList.style.opacity = "1";
                langList.style.visibility = "visible";
                langList.style.transform = "translateY(0)";
            }
        });

        document.addEventListener("click", function (event) {
            if (!langBtn.contains(event.target) && !langList.contains(event.target)) {
                langList.style.opacity = "0";
                langList.style.visibility = "hidden";
                langList.style.transform = "translateY(-10px)";
            }
        });
    }, 500); 
});






//video

document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("promo-video");
    const playButton = document.getElementById("playButton");

    playButton.addEventListener("click", function () {
        video.play();
        playButton.style.display = "none";  
    });

    video.addEventListener("pause", function () {
        playButton.style.display = "flex";  
    });
});

//buttons down&up
    document.addEventListener("DOMContentLoaded", function () {
        const scrollDownBtn = document.getElementById("scroll-down");
        const scrollUpBtn = document.getElementById("scroll-up");
    
        if (scrollDownBtn) {
            scrollDownBtn.addEventListener("click", function () {
                window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
            });
        }
    
        if (scrollUpBtn) {
            window.addEventListener("scroll", function () {
                if (window.scrollY > window.innerHeight) {
                    scrollUpBtn.style.display = "flex";
                } else {
                    scrollUpBtn.style.display = "none";
                }
            });
    
            scrollUpBtn.addEventListener("click", function () {
                window.scrollTo({ top: 0, behavior: "smooth" });
            });
        }
    });
    


//pdf
document.getElementById("open-pdf-btn").addEventListener("click", function () {
    let imgWindow = window.open("", "_blank");

    imgWindow.document.write(`
        <html>
        <head>
            <title>Просмотр изображения</title>
            <style>
                body { margin: 0; display: flex; justify-content: center; align-items: center; height: 100vh; background-color: white; }
                img { max-width: 100vw; max-height: 100vh; object-fit: contain; }
                .close-btn {
                    width: 60px;
                    height: 60px;
                    background: transparent;
                    border: none;
                    position: absolute;
                    top: 50%;
                    left: 47%;
                    z-index: 100;
                }
                .close-btn:hover,
                .close-btn:focus{
                    background: transparent !important;
                    border: none !important;
                }
            </style>
        </head>
        <body>
            <button class="close-btn" onclick="window.close()">
                <img src="images/icons/zoom-red.svg" alt="Закрыть">
            </button>
            <img src="images/pdf-img/plan1.svg" alt="Просмотр">
        </body>
        </html>
    `);
});

document.getElementById("open-pdf-btn-2").addEventListener("click", function () {
    let imgWindow = window.open("", "_blank");

    imgWindow.document.write(`
        <html>
        <head>
            <title>Просмотр изображения</title>
            <style>
                body { margin: 0; display: flex; justify-content: center; align-items: center; height: 100vh; background-color: white; }
                img { max-width: 100vw; max-height: 100vh; object-fit: contain; }
                .close-btn {
                    width: 60px;
                    height: 60px;
                    background: transparent;
                    border: none;
                    position: absolute;
                    top: 50%;
                    left: 47%;
                    z-index: 100;
                }
                .close-btn:hover,
                .close-btn:focus{
                    background: transparent !important;
                    border: none !important;
                }
            </style>
        </head>
        <body>
            <button class="close-btn" onclick="window.close()">
                <img src="images/icons/zoom-red.svg" alt="Закрыть">
            </button>
            <img src="images/pdf-img/plan2.svg" alt="Просмотр">
        </body>
        </html>
    `);
});
document.getElementById("open-pdf-btn-3").addEventListener("click", function () {
    let imgWindow = window.open("", "_blank");

    imgWindow.document.write(`
        <html>
        <head>
            <title>Просмотр изображения</title>
            <style>
                body { margin: 0; display: flex; justify-content: center; align-items: center; height: 100vh; background-color: white; }
                img { max-width: 100vw; max-height: 100vh; object-fit: contain; }
                .close-btn {
                    width: 60px;
                    height: 60px;
                    background: transparent;
                    border: none;
                    position: absolute;
                    top: 50%;
                    left: 47%;
                    z-index: 100;
                }
                .close-btn:hover,
                .close-btn:focus{
                    background: transparent !important;
                    border: none !important;
                }
            </style>
        </head>
        <body>
            <button class="close-btn" onclick="window.close()">
                <img src="images/icons/zoom-red.svg" alt="Закрыть">
            </button>
            <img src="images/pdf-img/plan3.svg" alt="Просмотр">
        </body>
        </html>
    `);
});
document.getElementById("open-pdf-btn-4").addEventListener("click", function () {
    let imgWindow = window.open("", "_blank");

    imgWindow.document.write(`
        <html>
        <head>
            <title>Просмотр изображения</title>
            <style>
                body { margin: 0; display: flex; justify-content: center; align-items: center; height: 100vh; background-color: white; }
                img { max-width: 100vw; max-height: 100vh; object-fit: contain; }
                .close-btn {
                    width: 60px;
                    height: 60px;
                    background: transparent;
                    border: none;
                    position: absolute;
                    top: 50%;
                    left: 47%;
                    z-index: 100;
                }
                .close-btn:hover,
                .close-btn:focus{
                    background: transparent !important;
                    border: none !important;
                }
            </style>
        </head>
        <body>
            <button class="close-btn" onclick="window.close()">
                <img src="images/icons/zoom-red.svg" alt="Закрыть">
            </button>
            <img src="images/pdf-img/plan4.svg" alt="Просмотр">
        </body>
        </html>
    `);
});
document.getElementById("open-pdf-btn-5").addEventListener("click", function () {
    let imgWindow = window.open("", "_blank");

    imgWindow.document.write(`
        <html>
        <head>
            <title>Просмотр изображения</title>
            <style>
                body { margin: 0; display: flex; justify-content: center; align-items: center; height: 100vh; background-color: white; }
                img { max-width: 100vw; max-height: 100vh; object-fit: contain; }
                .close-btn {
                    width: 60px;
                    height: 60px;
                    background: transparent;
                    border: none;
                    position: absolute;
                    top: 50%;
                    left: 47%;
                    z-index: 100;
                }
                .close-btn:hover,
                .close-btn:focus{
                    background: transparent !important;
                    border: none !important;
                }
            </style>
        </head>
        <body>
            <button class="close-btn" onclick="window.close()">
                <img src="images/icons/zoom-red.svg" alt="Закрыть">
            </button>
            <img src="images/pdf-img/plan5.svg" alt="Просмотр">
        </body>
        </html>
    `);
});

//download pdf

document.getElementById("download-btn").addEventListener("click", function() {
    fetch("/pdf/plan_ZK_mexica_002_06.pdf")  
        .then(response => response.blob())
        .then(blob => {
            let link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = "plan_ZK_mexica_002_06.pdf"; 
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        })
        .catch(error => console.error("Ошибка при скачивании PDF:", error));
});
document.getElementById("download-btn-2").addEventListener("click", function() {
    fetch("/pdf/plan_ZK_mexica_002_02_b.pdf")  
        .then(response => response.blob())
        .then(blob => {
            let link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = "plan_ZK_mexica_002_06.pdf"; 
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        })
        .catch(error => console.error("Ошибка при скачивании PDF:", error));
});
document.getElementById("download-btn-3").addEventListener("click", function() {
    fetch("/pdf/plan_ZK_mexica_002_02.pdf")  
        .then(response => response.blob())
        .then(blob => {
            let link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = "plan_ZK_mexica_002_06.pdf"; 
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        })
        .catch(error => console.error("Ошибка при скачивании PDF:", error));
});
document.getElementById("download-btn-4").addEventListener("click", function() {
    fetch("/pdf/plan_ZK_mexica_002_04.pdf")  
        .then(response => response.blob())
        .then(blob => {
            let link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = "plan_ZK_mexica_002_06.pdf"; 
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        })
        .catch(error => console.error("Ошибка при скачивании PDF:", error));
});
document.getElementById("download-btn-5").addEventListener("click", function() {
    fetch("/pdf/plan_ZK_mexica_002_05.pdf")  
        .then(response => response.blob())
        .then(blob => {
            let link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = "plan_ZK_mexica_002_06.pdf"; 
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        })
        .catch(error => console.error("Ошибка при скачивании PDF:", error));
});


