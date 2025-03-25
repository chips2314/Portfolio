
        $('#open_info').on('click', function (event) {
            event.preventDefault();
            console.log("Клик по #open_info сработал!");
            $('#welcomeModalStatus').modal('show');
        });


        const dropdownButton = document.getElementById('languageDropdown');
        const dropdownMenu = document.querySelector('.dropdown-menu');

       
        dropdownButton.addEventListener('click', (event) => {
            event.stopPropagation(); 
            dropdownMenu.classList.toggle('show'); 
        });

       
        document.addEventListener('click', () => {
            if (dropdownMenu.classList.contains('show')) {
                dropdownMenu.classList.remove('show');
            }
        });

        
        dropdownMenu.addEventListener('click', (event) => {
            event.stopPropagation();
        });



        function redirectToPage() {
            const selector = document.getElementById('dropdownField');
            const selectedValue = selector.value;

            if (selectedValue) {
                window.location.href = selectedValue;
            }
        }


        
        
    $(document).ready(function () {
        $('#welcomeModalStatus').on('hidden.bs.modal', function () {
            setTimeout(function () {
                $('#no-money-status').modal('show');
            }, 300); 
        });
    });

    $(document).ready(function () {
        $('#no-money-status').on('hidden.bs.modal', function () {
            setTimeout(function () {
                $('#no-games').modal('show');
            }, 300); 
        });
    });
    $(document).ready(function () {
        $('#no-games').on('hidden.bs.modal', function () {
            setTimeout(function () {
                $('#question-popup').modal('show');
            }, 300); 
        });
    });


    $(document).ready(function () {
        $('#stock-1').modal('show');
      });

      $(document).ready(function () {
        $('#stock-1').on('hidden.bs.modal', function () {
            setTimeout(function () {
                $('#stock-3').modal('show');
            }, 300); 
        });
    });
    
    $(document).ready(function () {
        $('#joined').modal('show');
      });

      $(document).ready(function () {
        $('#stock-1').modal('show');
      });

      $(document).ready(function () {
        $('#joined').on('hidden.bs.modal', function () {
            setTimeout(function () {
                $('#player-joined').modal('show');
            }, 300); 
        });
    });

    $(document).ready(function () {
        $('#join-battle-room-popup').modal('show');
      });
    
      $(document).ready(function () {
        $('#join-battle-room-popup').on('hidden.bs.modal', function () {
            setTimeout(function () {
                $('#started').modal('show');
            }, 300); 
        });
    });

    $(document).ready(function () {
        $('#fineshed').modal('show');
      });
        $(document).ready(function () {
        $('#fineshed').on('hidden.bs.modal', function () {
            setTimeout(function () {
                $('#congratulations').modal('show');
            }, 300); 
        });
    });

    $(document).ready(function () {
        $('#poker-room-joined').modal('show');
      });

      $(document).ready(function () {
        $('#no-money-status-free').modal('show');
      });

      $(document).ready(function () {
        $('#no-money-status-free').on('hidden.bs.modal', function () {
            setTimeout(function () {
                $('#no-money-status-free-2').modal('show');
            }, 300); 
        });
    });



    function loadChatWidget() {
        const container = document.getElementById('chat-container');
        if (!container.innerHTML) {
            const iframe = document.createElement('iframe');
            iframe.src = 'support-chat.html'; 
            iframe.style.border = 'none';
            iframe.style.position = 'fixed';
            iframe.style.bottom = '20px';
            iframe.style.right = '20px';
            iframe.style.width = '300px';
            iframe.style.height = '400px';
            iframe.style.zIndex = '1000';
            container.appendChild(iframe);
        }
    }

    const chatBody = document.getElementById('chat-body');
        const chatInput = document.getElementById('chat-input');
        const sendButton = document.getElementById('send-button');

        function appendMessage(content, sender) {
            const message = document.createElement('div');
            message.classList.add('message', sender);
            message.textContent = content;
            chatBody.appendChild(message);
            chatBody.scrollTop = chatBody.scrollHeight;
        }

        sendButton.addEventListener('click', () => {
            const userMessage = chatInput.value.trim();
            if (userMessage) {
                appendMessage(userMessage, 'user');
                chatInput.value = '';
                setTimeout(() => {
                    appendMessage('Thank you for your message!', 'assistant');
                }, 1000);
            }
        });

        chatInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                sendButton.click();
            }
        });


function checkScreenSize() {
    if (window.innerWidth < 998) {
        
        document.querySelectorAll('.toggle-btn').forEach(button => {
            button.addEventListener('click', function() {
                const detailsRow = this.closest('tr').nextElementSibling;
                const arrow = this.querySelector('.arrow');

                this.closest('tr').classList.toggle('active');
                
   
                if (this.closest('tr').classList.contains('active')) {
                    detailsRow.style.display = 'table-row';
                    arrow.innerHTML = '&#x25B2;'; 
                } else {
                    detailsRow.style.display = 'none';
                    arrow.innerHTML = '&#x25BC;'; 
                }
            });
        });
    } else {
        
        document.querySelectorAll('.toggle-btn').forEach(button => {
            button.removeEventListener('click', function() {});
        });

        
        document.querySelectorAll('.collapse').forEach(row => {
            row.style.display = 'table-row';
        });
    }
}


window.addEventListener('resize', checkScreenSize);
window.addEventListener('load', checkScreenSize);

function toggleRow() {
    let row = $("#row1");

    if (row.hasClass("hidden")) {
        row.removeClass("hidden").slideDown(300); 
    } else {
        row.slideUp(300, function () {
            row.addClass("hidden");
        });
    }
}

