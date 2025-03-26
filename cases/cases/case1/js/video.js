//video

document.getElementById("open-video-btn").addEventListener("click", function () {
    let videoModal = document.getElementById("video-modal");
    let videoFrame = document.getElementById("video-frame");

    videoFrame.src = "images/video/doc_2024-09-08_19-26-33.mp4"; 

    videoModal.style.display = "flex";
});

document.querySelector(".close-btn").addEventListener("click", function () {
    let videoModal = document.getElementById("video-modal");
    let videoFrame = document.getElementById("video-frame");

    videoFrame.src = "";  
    videoModal.style.display = "none";
});

document.getElementById("video-modal").addEventListener("click", function (event) {
    let modalContent = document.querySelector(".modal-content");
    if (!modalContent.contains(event.target)) {
        document.getElementById("video-modal").style.display = "none";
        document.getElementById("video-frame").src = "";
    }
});

document.getElementById("open-video-btn-2").addEventListener("click", function () {
    let videoModal = document.getElementById("video-modal");
    let videoFrame = document.getElementById("video-frame");

    videoFrame.src = "images/video/doc_2024-09-08_19-27-11.mp4"; 

    videoModal.style.display = "flex";
});

document.querySelector(".close-btn").addEventListener("click", function () {
    let videoModal = document.getElementById("video-modal");
    let videoFrame = document.getElementById("video-frame");

    videoFrame.src = "";  
    videoModal.style.display = "none";
});

document.getElementById("video-modal-2").addEventListener("click", function (event) {
    let modalContent = document.querySelector(".modal-content");
    if (!modalContent.contains(event.target)) {
        document.getElementById("video-modal").style.display = "none";
        document.getElementById("video-frame").src = "";
    }
});

