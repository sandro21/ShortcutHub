import React from 'react';
import { categories } from './data';
import './index.css';

function Homepage() {
  return (
    <div className="container">
      <header>
        <h1>Shortcut Hub</h1>
        <p>Every shortcut for your favorite tools, centralized and searchable.</p>
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