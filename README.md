# 🔗 Shortcut Hub

**Your central place for software keyboard shortcuts across design, development, productivity, and OS tools.**

## 🌟 Overview

Shortcut Hub is a beautifully designed web app that aggregates keyboard shortcuts for popular software tools. Whether you're a designer using Figma, a developer working in VS Code, or a productivity geek living in Notion — this app helps you find all the shortcuts you need in one place.

## 🖼️ Preview

![Shortcut Hub Screenshot](public/screenshot.png)  
*(Add your own screenshot if needed)*

## 🚀 Features

- 🌐 Categorized by Design, Development, Productivity, OS, and 3D Tools
- 🎨 Fully responsive and styled with a modern, dark-themed UI
- ⚡ Hover animations, clickable tool cards, platform badges
- 🔍 Dynamically generated tool pages
- 🧭 Easy-to-use routing with React Router

## 📁 Folder Structure

📦 shortcut-hub/ ├── public/ │ └── icons/ # All tool icons (e.g., figma.png, vscode.png) ├── src/ │ ├── App.jsx # Main app routing and homepage │ ├── data.js # Shortcut tool categories and links │ ├── index.css # Tailored styling with dark theme │ ├── pages/ │ │ └── ToolPage.jsx # Dynamic page for each tool │ ├── components/ │ │ ├── Category.jsx # Renders a category of tools │ │ └── ToolLink.jsx # (Optional, for tool link structure) └── README.md # You're reading it!

markdown
Copy code

## 🛠️ Built With

- ⚛️ React
- 🎨 CSS with custom variables and animations
- 🗂️ React Router
- 🧪 Vite (Recommended for fast dev environment)

## 🧑‍💻 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/yourusername/shortcut-hub.git
cd shortcut-hub
2. Install dependencies
bash
Copy code
npm install
3. Run locally
bash
Copy code
npm run dev
4. Build for production
bash
Copy code
npm run build
🧩 Future Plans
 Add actual shortcut content to tool pages

 Add search functionality

 Mobile optimizations

 Deploy to GitHub Pages / Vercel

📄 License
MIT License. Feel free to fork and improve!
