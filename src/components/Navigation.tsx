type NavItem = {
  text: string;
  href: string;
  active: boolean;
};

export const navItems: NavItem[] = [
  { text: "Home", href: "/", active: true },
  { text: "Features", href: "/features", active: false },
  { text: "Documentation", href: "/docs", active: false },
  { text: "About", href: "/about", active: false },
];

export const Navigation = (): string => `
  <nav>
    <a href="/" class="nav-brand">
      <span>🦊</span>
      Elysia
    </a>
    <div class="nav-links">
      ${navItems.map(item => `
        <a href="${item.href}" class="nav-link ${item.active ? 'active' : ''}">
          ${item.text}
        </a>
      `).join('')}
      <button class="theme-toggle" onclick="toggleTheme()">
        <span class="theme-icon">🌙</span>
        <span class="theme-text">Dark Mode</span>
      </button>
    </div>
  </nav>
`; 