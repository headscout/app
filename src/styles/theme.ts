export const styles = {
  lightTheme: `
    --bg-gradient-from: #f5f7fa;
    --bg-gradient-to: #c3cfe2;
    --text-color: #2c3e50;
    --container-bg: white;
    --container-shadow: rgba(0,0,0,0.1);
    --container-border: #e0e0e0;
    --heading-color: #e74c3c;
    --text-color-secondary: #34495e;
    --feature-bg: #f8f9fa;
    --feature-heading: #2c3e50;
    --feature-text: #34495e;
    --nav-bg: #ffffff;
    --nav-text: #2c3e50;
    --nav-hover: #e74c3c;
    --nav-border: #eaeaea;
  `,
  darkTheme: `
    --bg-gradient-from: #1a1a1a;
    --bg-gradient-to: #2d3436;
    --text-color: #e0e0e0;
    --container-bg: #2d2d2d;
    --container-shadow: rgba(0,0,0,0.3);
    --container-border: #404040;
    --heading-color: #ff6b6b;
    --text-color-secondary: #b8b8b8;
    --feature-bg: #363636;
    --feature-heading: #74b9ff;
    --feature-text: #a0a0a0;
    --nav-bg: #1a1a1a;
    --nav-text: #e0e0e0;
    --nav-hover: #ff6b6b;
    --nav-border: #2d2d2d;
  `,
  globalStyles: `
    nav {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      background: var(--nav-bg);
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 2px 10px var(--container-shadow);
      border-bottom: 1px solid var(--nav-border);
      z-index: 1000;
    }

    .nav-brand {
      font-size: 1.5rem;
      font-weight: bold;
      color: var(--heading-color);
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .nav-links {
      display: flex;
      gap: 2rem;
      align-items: center;
    }

    .nav-link {
      color: var(--nav-text);
      text-decoration: none;
      font-size: 1rem;
      transition: color 0.3s ease;
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
    }

    .nav-link:hover {
      color: var(--nav-hover);
    }

    .nav-link.active {
      background: var(--feature-bg);
      color: var(--nav-hover);
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      margin: 0;
      padding: 0;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, var(--bg-gradient-from) 0%, var(--bg-gradient-to) 100%);
      color: var(--text-color);
      transition: all 0.3s ease;
      padding-top: 4rem;
    }

    .container {
      text-align: center;
      padding: 2rem;
      background: var(--container-bg);
      border-radius: 1rem;
      box-shadow: 0 10px 20px var(--container-shadow);
      max-width: 600px;
      width: 90%;
      border: 1px solid var(--container-border);
      transition: all 0.3s ease;
    }

    h1 {
      color: var(--heading-color);
      margin-bottom: 1rem;
      font-size: 2.5rem;
      text-shadow: 0 2px 4px rgba(0,0,0,0.2);
    }

    p {
      font-size: 1.2rem;
      line-height: 1.6;
      color: var(--text-color-secondary);
      margin-bottom: 1.5rem;
    }

    .features {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
      margin-top: 2rem;
    }

    .feature {
      padding: 1.5rem;
      background: var(--feature-bg);
      border-radius: 0.5rem;
      border: 1px solid var(--container-border);
      transition: transform 0.2s, box-shadow 0.2s;
    }

    .feature:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px var(--container-shadow);
    }

    .feature h3 {
      color: var(--feature-heading);
      margin-bottom: 0.5rem;
    }

    .feature p {
      color: var(--feature-text);
      margin-bottom: 0;
      font-size: 1rem;
    }

    .theme-toggle {
      position: static;
      margin-left: 1rem;
      padding: 10px 20px;
      border-radius: 20px;
      border: 2px solid var(--container-border);
      background: var(--container-bg);
      color: var(--text-color);
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 1rem;
      transition: all 0.3s ease;
    }

    .theme-toggle:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px var(--container-shadow);
    }

    @media (max-width: 768px) {
      .nav-links {
        display: none;
      }
      
      .nav-menu-button {
        display: block;
      }
    }
  `
}; 