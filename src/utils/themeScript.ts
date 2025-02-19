export const themeScript = `
  function toggleTheme() {
    const html = document.documentElement;
    const button = document.querySelector('.theme-toggle');
    const icon = button.querySelector('.theme-icon');
    const text = button.querySelector('.theme-text');
    
    if (html.getAttribute('data-theme') === 'dark') {
      html.setAttribute('data-theme', 'light');
      icon.textContent = '☀️';
      text.textContent = 'Light Mode';
    } else {
      html.setAttribute('data-theme', 'dark');
      icon.textContent = '🌙';
      text.textContent = 'Dark Mode';
    }
  }
`; 