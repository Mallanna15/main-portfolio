const toggle = document.getElementById("theme-toggle");
const html = document.documentElement;

toggle.addEventListener("click", () => {
  const isDark = html.getAttribute("data-theme") === "dark";
  html.setAttribute("data-theme", isDark ? "light" : "dark");
  toggle.textContent = isDark ? "🌙" : "☀️";
});

