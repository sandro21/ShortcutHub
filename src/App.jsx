import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { categories } from './data';
import './index.css';
import ToolPage from './pages/ToolPage';

function Homepage() {
  return (
    <div className="zoom">
      <div className="container">
        <header>
          <img
            src="/ShortcutHub/icon4.png"
            alt="Shortcut Hub Logo"
            className="logo"
          />
          <div>
            <h1>Shortcut Hub</h1>
            <p>
            Easily accessible library for all the shortcuts
            </p>
          </div>
        </header>
        <div className="categories">
          {categories.map((category) => (
            <section key={category.name} className="category">
              <h2>{category.name}</h2>
              <div className="tool-grid">
                {category.tools.map((tool) => (
                  <Link
                    key={tool.name}
                    to={`/tools/${tool.name.toLowerCase().replace(/ /g, '-')}`}
                    className="tool-card"
                  >
                    <img
                      src={`/ShortcutHub/icons/${tool.name.toLowerCase().replace(/ /g, '-')}.png`}
                      alt={tool.name}
                      className="tool-icon"
                      style={{ width: '80px', height: '80px' }}
                    />
                    <h3 className="tool-name" style={{ fontSize: '18px', marginTop: '9px' }}>
                      {tool.name}
                    </h3>
                    <div style={{ marginTop: '15px' }} className="platforms">
                      <img
                        src="/ShortcutHub/appleicon.png"
                        alt="Apple"
                        className="platform-icon"
                        style={{ width: '20px', height: '20px' }}
                      />
                      <img
                        src="/ShortcutHub/windowsicon.png"
                        alt="Windows"
                        className="platform-icon"
                        style={{ width: '18px', height: '18px', marginLeft: '-5px', marginTop: '2px' }}
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        <footer>
          <p>Made with ❤️ by SK</p>
          <p>© 2025 Shortcut Hub</p>
        </footer>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router basename="/ShortcutHub">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/tools/:toolName" element={<ToolPage />} />
      </Routes>
    </Router>
  );
}

export default App;
