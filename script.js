function openLetter() {
  const envelope = document.querySelector(".envelope");
  envelope.classList.add("open");

  createHearts();
  createButterflies();
  createBoom();
}

/* ❤️ Hearts */
function createHearts() {
  for (let i = 0; i < 20; i++) {
    let heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = "80%";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
  }
}

/* 🦋 Butterflies */
function createButterflies() {
  for (let i = 0; i < 10; i++) {
    let b = document.createElement("div");
    b.className = "butterfly";
    b.innerHTML = "🦋";
    b.style.left = Math.random() * window.innerWidth + "px";
    b.style.top = Math.random() * window.innerHeight + "px";
    document.body.appendChild(b);

    setTimeout(() => b.remove(), 6000);
  }
}

/* 💥 Boom effect */
function createBoom() {
  let boom = document.createElement("div");
  boom.className = "boom";
  boom.innerHTML = "💥";
  boom.style.left = "50%";
  boom.style.top = "40%";
  document.body.appendChild(boom);

  setTimeout(() => boom.remove(), 1000);
}
