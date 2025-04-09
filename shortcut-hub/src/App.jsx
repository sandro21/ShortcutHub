import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { categories } from './data';
import './index.css';
import ToolPage from './pages/ToolPage';

function Homepage() {
  return (
    <div className="zoom"> {/* Add a wrapper for scaling */}
      <div className="container">
        <header>
          <img
            src="/icon.png"
            alt="Shortcut Hub Logo"
            className="logo"
          />
          <div>
            <h1 style={{ marginBottom: '4px' }}>Shortcut Hub</h1>
            <p style={{ marginTop: '0' }}>Every shortcut for your favorite tools, centralized and searchable.</p>
          </div>
        </header>

        {/* White line between header and body */}
        <hr className="divider" />

        <div className="categories">
          {categories.map((category) => (
            <section key={category.name} className="category">
              <h2>{category.name}</h2>
              <div className="tool-grid">
                {category.tools.map((tool) => (
                  <Link
                    key={tool.name}
                    to={`/tools/${tool.name.toLowerCase().replace(/ /g, '-')}`}
                    className="tool-card" // Make the entire card clickable
                  >
                    <img
                      src={`icons/${tool.name.toLowerCase().replace(/ /g, '-')}.png`}
                      alt={tool.name}
                      className="tool-icon"
                      style={{ width: '80px', height: '80px' }}
                    />
                    <h3 className="tool-name" style={{ fontSize: '18px', marginTop: '9px' }}>{tool.name}</h3>
                    <div style={{ marginTop: '15px' }} className="platforms">
                      <img
                        src="/appleicon.png"
                        alt="Apple"
                        className="platform-icon"
                        style={{ width: '20px', height: '20px' }}
                      />
                      <img
                        src="/windowsicon.png"
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
          <p>© 2025 Shortcut Hub</p>
        </footer>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/tools/:toolName" element={<ToolPage />} />
      </Routes>
    </Router>
  );
}

export default App;