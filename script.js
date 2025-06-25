const menuIcon = document.querySelector("#menu-icon");
const navLinks = document.querySelector(".nav-links");

menuIcon.onclick = () => {
  navLinks.classList.toggle("active");
};

const themeSwitch = document.getElementById("theme-switch");
const body = document.body;

// Toggle dark mode and update localStorage
function toggleDarkMode() {
  const isDark = body.classList.toggle("darkmode");
  localStorage.setItem("theme", isDark ? "dark" : "light");

  // Update icons
  const moonIcon = themeSwitch.querySelector(".fa-moon");
  const sunIcon = themeSwitch.querySelector(".fa-sun");
  moonIcon.style.display = isDark ? "none" : "inline";
  sunIcon.style.display = isDark ? "inline" : "none";
}

// Event listener for toggle button
themeSwitch.addEventListener("click", toggleDarkMode);

// Load saved theme on page load
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  const moonIcon = themeSwitch.querySelector(".fa-moon");
  const sunIcon = themeSwitch.querySelector(".fa-sun");

  if (savedTheme === "dark") {
    body.classList.add("darkmode");
    moonIcon.style.display = "none";
    sunIcon.style.display = "inline";
  } else {
    body.classList.remove("darkmode");
    moonIcon.style.display = "inline";
    sunIcon.style.display = "none";
  }
});
