// Neon particle background
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 1;
    this.speedX = (Math.random() - 0.5) * 2;
    this.speedY = (Math.random() - 0.5) * 2;
    this.color = Math.random() > 0.5 ? "#00ffcc" : "#ff0077";
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
    if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.shadowBlur = 15;
    ctx.shadowColor = this.color;
    ctx.fill();
  }
}

function init() {
  particles = [];
  for (let i = 0; i < 100; i++) {
    particles.push(new Particle());
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animate);
}

init();
animate();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});

document.addEventListener('DOMContentLoaded', () => {
  const loginBtn = document.getElementById('loginBtn');
  const loadingBar = document.getElementById('loadingBar');
  const progress = loadingBar.querySelector('.progress');

  loginBtn.addEventListener('click', () => {
    // optional: validate fields here before starting
    loadingBar.style.display = 'block';
    progress.style.width = '0%';

    let width = 0;
    const interval = setInterval(() => {
      width += 2;
      progress.style.width = width + '%';
      if (width >= 100) {
        clearInterval(interval);
        // small delay so full bar is visible
        setTimeout(() => {
          window.location.href = '../index/index.html';
        }, 200);
      }
    }, 50);
  });
});

// Handle form submission
const finishForm = document.getElementById("finishForm");
const successMsg = document.getElementById("successMsg");

finishForm.addEventListener("submit", (e) => {
  e.preventDefault(); // stop real reload

  finishForm.style.display = "none";   // hide form
  successMsg.style.display = "block";  // show checkmark
});

// Make gender checkboxes mutually exclusive (only if using checkboxes)
const genderChecks = document.querySelectorAll('input[name="gender"][type="checkbox"]');
genderChecks.forEach(cb => cb?.addEventListener('change', () => {
  if (cb.checked) {
    genderChecks.forEach(other => { if (other !== cb) other.checked = false; });
  }
}));

// Handle login form submit
const form = document.getElementById("loginForm");
const loadingBar = document.getElementById("loadingBar");
const progress = loadingBar.querySelector(".progress");

form.addEventListener("submit", function(e) {
  e.preventDefault();


// Show loading bar
  loadingBar.style.display = "block";
  progress.style.width = "0%";

  let width = 0;
  const interval = setInterval(() => {
    if (width >= 100) {
      clearInterval(interval);
      // Simulate login success after loading
     window.location.href = "index\index.html";
      // 👉 Replace with: window.location.href = "home.html";
    } else {
      width += 2;
      progress.style.width = width + "%";
    }
  }, 50); // Speed of progress bar
});