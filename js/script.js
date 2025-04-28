import { DarkModeToggle } from "./toggleDarkMode.js";

// Switch Dark Mode
const darkModeToggleInstance = new DarkModeToggle();
const toggleButton = document.querySelector(".toggle-dark-mode");
if (toggleButton) {
  toggleButton.addEventListener(
    "click",
    darkModeToggleInstance.toggle.bind(darkModeToggleInstance)
  );
}
