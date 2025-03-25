
function loadPage(page) {
    fetch(`${page}.html`)  
        .then(response => {
            if (!response.ok) {
                throw new Error(`Ошибка загрузки страницы: ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("content").innerHTML = data; 
        })
        .catch(error => {
            console.error(error);
            document.getElementById("content").innerHTML = `<p>Ошибка: ${error.message}</p>`;
        });
}


function loadComponent(id, file) {
    fetch(file)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Ошибка загрузки ${file}: ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(id).innerHTML = data;  
        })
        .catch(error => console.error(error));
}

function initHeaderNavigation() {
    const headerButtons = document.querySelectorAll("#header [data-page]");

    headerButtons.forEach(button => {
        button.addEventListener("click", event => {
            const page = button.getAttribute("data-page");
            loadPage(page); 

            headerButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
        });
    });
}


function loadHeader() {
    fetch("header.html")
        .then(response => {
            if (!response.ok) {
                throw new Error(`Ошибка загрузки header: ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("header").innerHTML = data;
            initHeaderNavigation(); 
        })
        .catch(error => {
            console.error(error);
            document.getElementById("header").innerHTML = `<p>Ошибка загрузки хедера: ${error.message}</p>`;
        });
}

function loadNavbar() {

    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar").innerHTML = data; 

            const navbarButtons = document.querySelectorAll("[data-page]");

            navbarButtons.forEach(button => {
                button.addEventListener("click", event => {
                    const page = button.getAttribute("data-page"); 
                    loadPage(page); 

                    navbarButtons.forEach(btn => btn.classList.remove('active'));
  
                    button.classList.add('active');
                    history.pushState({ page }, "", `#${page}`); 
                });
            });
        })
        .catch(error => {
            console.error(error);
            document.getElementById("navbar").innerHTML = `<p>Ошибка загрузки навбара: ${error.message}</p>`;
        });
}

document.addEventListener("DOMContentLoaded", () => {
    loadHeader();
    loadComponent("footer", "footer.html");
    loadNavbar();

    const defaultPage = "index-page";
    loadPage(defaultPage);

    window.addEventListener("popstate", event => {
        const page = event.state?.page || defaultPage;
        loadPage(page);
    });
});


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


