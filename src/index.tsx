import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import { styles } from "./styles/theme";
import { Navigation } from "./components/Navigation";
import { Feature, features } from "./components/Feature";
import { themeScript } from "./utils/themeScript";

// Base HTML template
const BaseHtml = ({ children }: { children: string }) => `
  <!DOCTYPE html>
  <html lang="en" data-theme="dark">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome to Elysia</title>
      <style>
        :root[data-theme="light"] { ${styles.lightTheme} }
        :root[data-theme="dark"] { ${styles.darkTheme} }
        ${styles.globalStyles}
      </style>
    </head>
    <body>
      ${children}
      <script>${themeScript}</script>
    </body>
  </html>
`;

// Main content component
const MainContent = (): string => `
  ${Navigation()}
  <div class="container">
    <h1>👋 Welcome to Elysia 🦊🍋</h1>
    <p>Your high-performance web framework is up and running!</p>
    <div class="features">
      ${features.map(feature => Feature(feature)).join('')}
    </div>
  </div>
`;

// Initialize app with HTML plugin
const app = new Elysia()
  .use(html())
  .get("/", ({ html: htmlPlugin }) => 
    htmlPlugin(
      BaseHtml({
        children: MainContent()
      })
    )
  )
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
); 