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


// chat
document.addEventListener("DOMContentLoaded", function () {
    const chatWidget = document.getElementById("chatWidget");
    const openChatBtn = document.getElementById("openChat");
    const closeChatBtn = document.getElementById("closeChat");
    const sendMessageBtn = document.getElementById("sendMessage");
    const chatInput = document.getElementById("chatInput");
    const chatBody = document.querySelector(".chat-body");

  
    openChatBtn.addEventListener("click", function () {
        chatWidget.style.display = "flex";
        openChatBtn.style.display = "none";
    });


    closeChatBtn.addEventListener("click", function () {
        chatWidget.style.display = "none";
        openChatBtn.style.display = "flex";
    });


    sendMessageBtn.addEventListener("click", function () {
        let messageText = chatInput.value.trim();
        if (messageText !== "") {
            let messageElement = document.createElement("div");
            messageElement.classList.add("message", "user-message");
            messageElement.textContent = messageText;
            chatBody.appendChild(messageElement);

            chatInput.value = ""; 
            chatBody.scrollTop = chatBody.scrollHeight; 
        }
    });


    chatInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            sendMessageBtn.click();
        }
    });
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
// password-eye
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('togglePassword').addEventListener('click', function () {
        var passwordField = document.getElementById('password');
        var eyeIcon = document.getElementById('eyeIcon');
    
        if (passwordField.type === 'password') {
            passwordField.type = 'text';
            eyeIcon.src = 'image/authorization/eye-open.svg'; 
        } else {
            passwordField.type = 'password';
            eyeIcon.src = 'image/authorization/eye-close.svg';
        }
    });
  
    document.getElementById('togglePassword2').addEventListener('click', function () {
        var passwordField = document.getElementById('password2');
        var eyeIcon = document.getElementById('eyeIcon2');
  
        if (passwordField.type === 'text') {
            passwordField.type = 'password'; 
            eyeIcon.src = 'image/authorization/eye-close.svg';
        } else {
            passwordField.type = 'text'; 
            eyeIcon.src = 'image/authorization/eye-open.svg'; 
        }
    });
  });


// colors
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("td.text-right span").forEach(span => {
        switch (span.textContent.trim()) {
            case "Completed":
                span.style.color = "#3EFF5E";
                break;
            case "Canceled":
                span.style.color = "#FF3E3E";
                break;
            case "Pending":
                span.style.color = "#FCAF17";
                break;
        }
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






