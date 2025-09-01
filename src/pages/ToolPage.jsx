import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { shortcuts } from '../data';

import './ToolPage.css';

function ToolPage() {
  const { toolName } = useParams();
  const [selectedPlatform, setSelectedPlatform] = useState('windows'); // Default to Windows

  const formattedToolName = toolName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const toolData = shortcuts[toolName];
  const categories = toolData?.categories || [];

  const handlePlatformSwitch = (platform) => {
    setSelectedPlatform(platform);
  };

  return (
    <div className="tool-page">
      {/* Header with gradient background */}
      <div className="app-header-section">
        <div className="app-header">
          {/* Back button and logo container */}
          <Link to="/" className="back-container">
            <div className="back-arrow">←</div>
            <img
              src="/ShortcutHub/icon3.png"
              alt="Shortcut Hub Logo"
              className="back-logo"
            />
          </Link>
          
          {/* App info container */}
          <div className="app-info-container">
            <img
              src={`/ShortcutHub/icons/${toolName.toLowerCase()}.png`}
              alt={formattedToolName}
              className="app-icon"
            />
            <h1 className="app-name">{formattedToolName}</h1>
          </div>

          {/* Platform switcher */}
          <div className="platform-switcher">
            <div className="platform-option" onClick={() => handlePlatformSwitch('windows')}>
              <img
                src="/ShortcutHub/windowsicon.png"
                alt="Windows"
                className="platform-icon"
              />
            </div>
            <div className="platform-option" onClick={() => handlePlatformSwitch('apple')}>
              <img
                src="/ShortcutHub/appleicon.png"
                alt="Apple"
                className="platform-icon"
              />
            </div>
            {/* Moving gradient selector */}
            <div className={`gradient-selector ${selectedPlatform}`}></div>
          </div>
        </div>
      </div>

      {/* Content area with dark background */}
      <div className="content-section">
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
    </div>
  );
}

export default ToolPage;
