// Countdown
function updateCountdown() {
  const wedding = new Date("2026-05-10T09:36:00");
  const now = new Date();
  const diff = wedding - now;
  if (diff <= 0) {
    document.getElementById("cd-days").textContent = "0";
    document.getElementById("cd-hours").textContent = "0";
    document.getElementById("cd-mins").textContent = "0";
    document.getElementById("cd-secs").textContent = "0";
    return;
  }
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const mins = Math.floor((diff % 3600000) / 60000);
  const secs = Math.floor((diff % 60000) / 1000);
  document.getElementById("cd-days").textContent = String(days).padStart(
    2,
    "0",
  );
  document.getElementById("cd-hours").textContent = String(hours).padStart(
    2,
    "0",
  );
  document.getElementById("cd-mins").textContent = String(mins).padStart(
    2,
    "0",
  );
  document.getElementById("cd-secs").textContent = String(secs).padStart(
    2,
    "0",
  );
}
updateCountdown();
setInterval(updateCountdown, 1000);

// Scroll reveal
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 },
);
reveals.forEach((r) => observer.observe(r));

// RSVP submit
document.getElementById("rsvpForm").addEventListener("submit", function () {
  setTimeout(() => {
    this.style.display = "none";
    document.getElementById("rsvpThanks").style.display = "block";
  }, 1200);
});


//Disable right click
document.addEventListener("contextmenu", (e) => e.preventDefault());
