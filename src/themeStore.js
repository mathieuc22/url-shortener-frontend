function updateThemeColor(themeColor) {
  let metaThemeColor = document.querySelector('meta[name="theme-color"]');
  if (!metaThemeColor) {
    metaThemeColor = document.createElement("meta");
    metaThemeColor.setAttribute("name", "theme-color");
    document.head.appendChild(metaThemeColor);
  }
  metaThemeColor.setAttribute("content", themeColor);
}

const themeStore = {
  isDark: false,
  toggleTheme() {
    this.isDark = !this.isDark;
    document.documentElement.setAttribute(
      "data-theme",
      this.isDark ? "dark" : "light"
    );

    // Mettre à jour la couleur du thème dans la balise <meta name="theme-color">
    updateThemeColor(this.isDark ? "#212529" : "#f8f9fa");
  },
};

export default themeStore;
