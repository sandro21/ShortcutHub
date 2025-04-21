# 🔗 Shortcut Hub

A clean and interactive website that organizes keyboard shortcuts from the most popular design, development, productivity, and operating system tools — all in one place.

---

---

## ✨ Features

- 🎯 Organized by categories like Design, Development, Productivity, OS, and 3D
- 🧭 Easy navigation with React Router
- 🧑‍💻 Dynamic routing to each tool's page
- 🎨 Stylish dark theme with hover animations
- 📱 Responsive layout
- 🍎 Windows and macOS icons for cross-platform clarity

---

## 🧱 Project Structure

```
/public
  └── /icons                → App icons (e.g. figma.png, vscode.png)
  └── icon.png              → Main site logo

/src
  ├── App.jsx               → Main app with routes and homepage
  ├── data.js               → Static data for tool categories and links
  ├── index.css             → Custom styling (dark theme, animations)
  ├── /pages
  │   └── ToolPage.jsx      → Tool-specific display page
  ├── /components
  │   ├── Category.jsx      → Renders each tool category
  │   └── ToolLink.jsx      → (Optional) Individual tool link component

README.md                   → You’re here!
```

---

## 🛠 Tech Stack

- **React**
- **React Router**
- **CSS (Custom)**
- **Vite (optional for faster dev build)**

---

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/shortcut-hub.git
   cd shortcut-hub
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run locally**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

---

## 📌 Available Categories & Tools

### 🎨 Design
Figma, Sketch, Adobe XD, Illustrator, Photoshop, InDesign, Lightroom, After Effects, Affinity Photo, Framer, InVision, Miro, Overflow.io, Principle

### 🧑‍💻 Development
VS Code, Sublime Text, Atom, Xcode, Android Studio, GitHub Desktop, IntelliJ IDEA, Postman, Docker

### ✅ Productivity
Notion, Trello, Slack, Google Docs, Google Sheets, Apple Calendar, Chrome, Gmail, Google Calendar, Google Meet, Microsoft Teams, Safari, Zoom

### 🖥️ Operating Systems
macOS, Windows, Ubuntu

### 🧊 3D
Blender, Cinema 4D

---

## 📍 Future Plans

- [ ] Add actual shortcut listings to each tool
- [ ] Search bar for quick access
- [ ] Light/Dark toggle
