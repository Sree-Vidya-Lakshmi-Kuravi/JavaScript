const themeSwitcherBtn = document.getElementById("theme-switcher-button");
const themeDropdown = document.getElementById("theme-dropdown");
const themeMessage = document.getElementById("theme-message");
const themeItems = document.querySelectorAll('[role="menuitem"]');

// Themes array
const themes = [
  { name: "light", message: "Light theme activated." },
  { name: "dark", message: "Dark theme activated." }
];

// Toggle dropdown
themeSwitcherBtn.addEventListener("click", () => {
  const isExpanded = themeSwitcherBtn.getAttribute("aria-expanded") === "true";

  themeSwitcherBtn.setAttribute("aria-expanded", String(!isExpanded));

  if (isExpanded) {
    themeDropdown.setAttribute("hidden", "");
  } else {
    themeDropdown.removeAttribute("hidden");
  }
});

// Handle theme selection
themeItems.forEach(item => {
  item.addEventListener("click", () => {
    const themeName = item.id.replace("theme-", "");

    // Remove old themes
    document.body.className = "";

    // Add new theme
    document.body.classList.add(`theme-${themeName}`);

    // Show message
    const selectedTheme = themes.find(t => t.name === themeName);
    themeMessage.textContent = selectedTheme.message;

    // Close dropdown
    themeDropdown.setAttribute("hidden", "");
    themeSwitcherBtn.setAttribute("aria-expanded", "false");
  });
});
