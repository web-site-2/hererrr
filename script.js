// script.js

// ====================
// Screen Navigation
// ====================
const screens = [...document.querySelectorAll(".screen")];
const loginForm = document.getElementById("login-form");
const passwordInput = document.getElementById("password-input");
const errorMessage = document.getElementById("error-message");
const roseBtn = document.getElementById("rose-btn");
const replayBtn = document.getElementById("replay-btn");
const nextButtons = document.querySelectorAll(".next-btn");

function goToScreen(number) {
  screens.forEach((screen) => screen.classList.remove("active"));
  const target = document.getElementById(`screen-${number}`);
  if (target) target.classList.add("active");
}

// Login check
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const entered = passwordInput.value.trim().toLowerCase();

  if (entered === "love") {
    errorMessage.textContent = "";
    passwordInput.value = "";
    goToScreen(2);
  } else {
    errorMessage.textContent = "كلمة السر غير صحيحة... حاولي مرة أخرى بلطف 💗";
  }
});

// Rose click
roseBtn.addEventListener("click", () => goToScreen(3));

// Next buttons
nextButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const next = Number(btn.dataset.next);
    goToScreen(next);
  });
});

// Replay flow
replayBtn.addEventListener("click", () => {
  goToScreen(1);
});

// ====================
// Carousel
// ====================

// ضع هنا مسارات صورك الخاصة (مثال: assets/photo1.jpg)
const memoryImages = [
  "assets/photo1.jpg",
  "assets/photo2.jpg",
  "assets/photo3.jpg",
  "assets/photo4.jpg"
];

const carouselImage = document.getElementById("carousel-image");
const prevSlide = document.getElementById("prev-slide");
const nextSlide = document.getElementById("next-slide");

let currentImageIndex = 0;

function renderImage() {
  carouselImage.src = memoryImages[currentImageIndex];
}

prevSlide.addEventListener("click", () => {
  currentImageIndex = (currentImageIndex - 1 + memoryImages.length) % memoryImages.length;
  renderImage();
});

nextSlide.addEventListener("click", () => {
  currentImageIndex = (currentImageIndex + 1) % memoryImages.length;
  renderImage();
});

renderImage();

// ====================
// Relationship Timer
// ====================
const timerEl = document.getElementById("relationship-timer");
// تاريخ البداية: 15 مايو 2023
const startDate = new Date("2023-05-15T00:00:00");

function updateRelationshipTimer() {
  const now = new Date();
  const diffMs = now - startDate;

  const totalSeconds = Math.floor(diffMs / 1000);
  const days = Math.floor(totalSeconds / (24 * 60 * 60));
  const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  timerEl.textContent = `${days} يوم ${hours} ساعة ${minutes} دقيقة ${seconds} ثانية`;
}

updateRelationshipTimer();
setInterval(updateRelationshipTimer, 1000);

// ====================
// Floating Hearts
// ====================
const heartsContainer = document.getElementById("hearts-container");

function createHeart() {
  const heart = document.createElement("span");
  heart.className = "heart";
  heart.textContent = "❤";

  const startLeft = Math.random() * 100;
  const size = 12 + Math.random() * 20;
  const duration = 6 + Math.random() * 5;

  heart.style.left = `${startLeft}vw`;
  heart.style.bottom = `-20px`;
  heart.style.fontSize = `${size}px`;
  heart.style.animationDuration = `${duration}s`;
  heart.style.opacity = (0.35 + Math.random() * 0.4).toFixed(2);

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, duration * 1000);
}

setInterval(createHeart, 550);
