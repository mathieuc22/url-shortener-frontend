const themeStore = {
    isDark: false,
    toggleTheme() {
      this.isDark = !this.isDark;
      document.documentElement.setAttribute('data-theme', this.isDark ? 'dark' : 'light');
    },
  };
  
  export default themeStore;