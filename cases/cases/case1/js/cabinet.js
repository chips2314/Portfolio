document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        const menuButton = document.querySelector(".navbar-toggler");
        console.log("Кнопка после задержки:", menuButton);

        if (menuButton) {
            menuButton.addEventListener("click", function () {
                console.log("Клик по кнопке");
                document.body.classList.toggle("mobile-menu-open");
            });
        }
    }, 500);
});

document.getElementById('toggle-btn').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('expanded');
    document.getElementById('content').classList.toggle('expanded');
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
// password-eye
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('togglePassword').addEventListener('click', function () {
        var passwordField = document.getElementById('password');
        var eyeIcon = document.getElementById('eyeIcon');
    
        if (passwordField.type === 'password') {
            passwordField.type = 'text';
            eyeIcon.src = 'images/cabinet/icons/eye-open.svg'; 
        } else {
            passwordField.type = 'password';
            eyeIcon.src = 'images/cabinet/icons/eye-close.svg';
        }
    });
  
    document.getElementById('togglePassword2').addEventListener('click', function () {
        var passwordField = document.getElementById('password2');
        var eyeIcon = document.getElementById('eyeIcon2');
  
        if (passwordField.type === 'text') {
            passwordField.type = 'password'; 
            eyeIcon.src = 'images/cabinet/icons/eye-close.svg';
        } else {
            passwordField.type = 'text'; 
            eyeIcon.src = 'images/cabinet/icons/eye-open.svg'; 
        }
    });
  });

  // checkbox
  function selectOnlyOne(checkedBox) {
    document.querySelectorAll('.custom-checkbox').forEach(box => {
        if (box !== checkedBox) box.checked = false;
    });
}

// table
document.querySelectorAll('.expandable-row').forEach(row => {
    row.addEventListener('click', () => {
      const expandedRow = row.nextElementSibling;
      if (expandedRow && expandedRow.classList.contains('expanded-content')) {
        expandedRow.style.display = expandedRow.style.display === 'table-row' ? 'none' : 'table-row';
      }
    });
  });

  window.onload = function() {
    const cells = document.querySelectorAll('#Table td');
    
    cells.forEach(cell => {
      const text = cell.textContent.trim();
      
      if (text === 'Canceled') {
        cell.style.color = '#FF2B2B'; 
      } else if (text === 'Complete') {
        cell.style.color = '#37FFB6'; 
      } else if (text === 'Processed') {
        cell.style.color = '#F8D256'; 
      }
    });
    
    const statusElements = document.querySelectorAll('#status');
    
    statusElements.forEach(statusElement => {
      const text = statusElement.textContent.trim();
      
      if (text === 'Canceled') {
        statusElement.style.color = '#FF2B2B'; 
      } else if (text === 'Complete') {
        statusElement.style.color = '#37FFB6'; 
      } else if (text === 'Processed') {
        statusElement.style.color = '#F8D256'; 
      }
    });
  };
const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('toggle-btn');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');  
const sidebarMenu = document.getElementById('sidebar-menu');  

 
toggleBtn.addEventListener('click', () => {
    if (window.innerWidth > 768) {
         
        sidebar.classList.toggle('collapsed');
        
    }
});

 
mobileMenuBtn.addEventListener('click', () => {
    sidebarMenu.classList.toggle('hide-menu');  
});

 
document.addEventListener('DOMContentLoaded', () => {
    sidebar.classList.remove('no-transition');  
});



// dropdown
document.querySelectorAll('.custom-dropdown').forEach(dropdown => {
    dropdown.addEventListener('click', function () {
        this.querySelector('.custom-dropdown-menu').classList.toggle('show');
    });
});

document.addEventListener('click', function (event) {
    document.querySelectorAll('.custom-dropdown-menu').forEach(menu => {
        if (!menu.parentElement.contains(event.target)) {
            menu.classList.remove('show');
        }
    });
});
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

