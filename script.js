function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Dark mode toggle functionality
const desktopThemeToggle = document.getElementById('theme-toggle');
const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
const body = document.body;

// Function to toggle theme
function toggleTheme() {
  body.classList.toggle('dark-mode');
  
  // Save theme preference
  if (body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark-mode');
  } else {
      localStorage.setItem('theme', 'light-mode');
  }
}

// Theme toggle event listeners
desktopThemeToggle.addEventListener('click', toggleTheme);
mobileThemeToggle.addEventListener('click', toggleTheme);

// Apply the correct theme on page load
document.addEventListener('DOMContentLoaded', (event) => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark-mode') {
      body.classList.add('dark-mode');
  }
});
