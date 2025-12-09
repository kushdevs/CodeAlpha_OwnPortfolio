// Smooth fade-in animation
document.addEventListener("scroll", () => {
  const elements = document.querySelectorAll("section");
  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 150) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0px)";
    }
  });
});

const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// Load saved mode
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  toggleBtn.textContent = "☀️";
} else {
  body.classList.add("light");
}

// Toggle
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  body.classList.toggle("light");

  // Change icon
  if (body.classList.contains("dark")) {
    toggleBtn.textContent = "☀️";   // Sun icon for light
    localStorage.setItem("theme", "dark");
  } else {
    toggleBtn.textContent = "🌙";   // Moon icon for dark
    localStorage.setItem("theme", "light");
  }
});
