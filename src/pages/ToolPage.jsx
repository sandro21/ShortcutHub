import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { shortcuts } from '../data';

import './ToolPage.css';

function ToolPage() {
  const { toolName } = useParams();

  const formattedToolName = toolName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const toolData = shortcuts[toolName];
  const categories = toolData?.categories || [];

  return (
    <div className="container">
      <div className="header1">
        <Link to="/">
          <img
            src="/ShortcutHub/icon.png"
            alt="Shortcut Hub Logo"
            className="logo"
          />
        </Link>
        <div className="tool-header">
          <img
            src={`/ShortcutHub/icons/${toolName.toLowerCase()}.png`}
            alt={formattedToolName}
            className="tool-logo"
          />
          <h1>{formattedToolName} Shortcuts</h1>
        </div>
      </div>

      <div className="shortcuts-section">
        {categories.length === 0 ? (
          <p>No shortcuts available for this tool yet.</p>
        ) : (
          categories.map((category, index) => (
            <div key={index} className="shortcut-category">
              <h2 className="category-title">{category.name}</h2>
              <table className="shortcuts-table">
                {index === 0 && (
                  <thead>
                    <tr>
                      <th className="shortcut-header">Action</th>
                      <th className="shortcut-header">Mac</th>
                      <th className="shortcut-header">Windows</th>
                    </tr>
                  </thead>
                )}
                <tbody>
                  {category.shortcuts.map((shortcut, idx) => (
                    <tr key={idx} className="shortcut-row">
                      <td className="shortcut-description">{shortcut.description}</td>
                      <td className="shortcut-mac">{shortcut.mac}</td>
                      <td className="shortcut-win">{shortcut.windows}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ToolPage;
