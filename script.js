const themeToggleBtn = document.getElementById("theme-toggle");

themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    themeToggleBtn.textContent = "☀️";
  } else {
    themeToggleBtn.textContent = "🌙";
  }
});
