export class DarkModeToggle {
  constructor() {
    this.container = document.getElementById("container");
    this.toggleButton = document.querySelector(".toggle-dark-mode");
    this.moonIcon = document.getElementById("moon-icon");
    this.sunIcon = document.getElementById("sun-icon");

    this.toggleButton.addEventListener("click", this.toggle.bind(this));
    document.addEventListener("DOMContentLoaded", this.initialize.bind(this));
  }

  initialize() {
    const storedDarkMode = localStorage.getItem("darkMode");
    if (storedDarkMode === "true") {
      this.enableDarkMode();
    } else {
      this.enableLightMode();
    }
  }

  toggle() {
    if (this.container.classList.contains("dark")) {
      this.enableLightMode();
    } else {
      this.enableDarkMode();
    }
  }

  enableDarkMode() {
    this.container.classList.remove("light");
    this.container.classList.add("dark");
    this.moonIcon.classList.remove("active");
    this.sunIcon.classList.add("active");
    localStorage.setItem("darkMode", true);
  }

  enableLightMode() {
    this.container.classList.remove("dark");
    this.container.classList.add("light");
    this.moonIcon.classList.add("active");
    this.sunIcon.classList.remove("active");
    localStorage.setItem("darkMode", false);
  }
}

// Instancia a classe
const darkModeToggleInstance = new DarkModeToggle();
