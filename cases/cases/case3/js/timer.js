document.addEventListener("DOMContentLoaded", function () {

  // Дата окончания: 14 марта 2026 (00:00:00)
  const endDate = new Date("March 14, 2026 00:00:00").getTime();

  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = endDate - now;

    if (distance <= 0) {
      daysEl.textContent = "00";
      hoursEl.textContent = "00";
      minutesEl.textContent = "00";
      secondsEl.textContent = "00";
      clearInterval(timer);
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.textContent = String(days).padStart(2, "0");
    hoursEl.textContent = String(hours).padStart(2, "0");
    minutesEl.textContent = String(minutes).padStart(2, "0");
    secondsEl.textContent = String(seconds).padStart(2, "0");
  }

  updateCountdown();  
  const timer = setInterval(updateCountdown, 1000);

});

document.addEventListener("DOMContentLoaded", function () {

  const canvas = document.getElementById("particles-bg");
  const ctx = canvas.getContext("2d");

  let particles = [];
  const particleCount = 120; // больше частиц

  function resizeCanvas() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }

  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();

  class Particle {
    constructor() {
      this.init();
    }

    init() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;

      this.size = Math.random() * 4 + 2; // размер 2–6px

      this.speedX = (Math.random() - 0.5) * 0.15;
      this.speedY = (Math.random() - 0.5) * 0.15;

      this.opacity = 0;
      this.maxOpacity = Math.random() * 0.5 + 0.3;

      this.fadeSpeed = Math.random() * 0.002 + 0.003;
      this.state = "fadeIn";  
      this.visibleTime = Math.random() * 400 + 200;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;

    
      if (this.state === "fadeIn") {
        this.opacity += this.fadeSpeed;
        if (this.opacity >= this.maxOpacity) {
          this.opacity = this.maxOpacity;
          this.state = "visible";
        }
      }

 
      else if (this.state === "visible") {
        this.visibleTime--;
        if (this.visibleTime <= 0) {
          this.state = "fadeOut";
        }
      }

  
      else if (this.state === "fadeOut") {
        this.opacity -= this.fadeSpeed;
        if (this.opacity <= 0) {
          this.init();  
        }
      }

    
      if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
        this.init();
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);

      ctx.fillStyle = `rgba(64, 224, 208, ${this.opacity})`;

      ctx.shadowColor = "rgba(64, 224, 208, 0.9)";
      ctx.shadowBlur = 20;

      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      p.update();
      p.draw();
    });

    requestAnimationFrame(animate);
  }

  animate();

});