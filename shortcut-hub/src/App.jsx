import React from 'react';
import { categories } from './data';
import './index.css';

function Homepage() {
  return (
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

      <div className="categories">
        {categories.map((category) => (
          <section key={category.name} className="category">
            <h2>{category.name}</h2>
            <div className="tool-grid">
              {category.tools.map((tool) => (
                <div key={tool.name} className="tool-card">
                  <img
                    src={`icons/${tool.name.toLowerCase().replace(/ /g, '-')}.png`}
                    alt={tool.name}
                    className="tool-icon"
                  />
                  <h3 className="tool-name">{tool.name}</h3>
                  <div className="platforms">
                    <span className="platform"></span>
                    <span className="platform">Windows</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <footer>
        <p>© 2025 Shortcut Hub</p>
      </footer>
    </div>
  );
}

export default Homepage;