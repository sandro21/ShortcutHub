import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { shortcuts } from '../data';

import './ToolPage.css';

function ToolPage() {
  const { toolName } = useParams();
  const [selectedPlatform, setSelectedPlatform] = useState('windows'); // Default to Windows
  const headerSectionRef = useRef(null);

  const formattedToolName = toolName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const toolData = shortcuts[toolName];
  const categories = toolData?.categories || [];

  const handlePlatformSwitch = (platform) => {
    setSelectedPlatform(platform);
  };

  useEffect(() => {
    const handleScroll = () => {
      const headerSection = headerSectionRef.current;
      const contentSection = document.querySelector('.content-section');
      
      if (headerSection && contentSection) {
        const headerRect = headerSection.getBoundingClientRect();
        const contentRect = contentSection.getBoundingClientRect();
        const scrollY = window.scrollY;
        
        // Header becomes sticky when scrolled past its original position
        if (scrollY > 100) {
          headerSection.classList.add('sticky');
          
          // Check if content section has reached the top of viewport
          if (contentRect.top <= 0) {
            // Content is pushing the header up, so remove sticky
            headerSection.classList.add('pushed-up');
          } else {
            headerSection.classList.remove('pushed-up');
          }
        } else {
          headerSection.classList.remove('sticky');
          headerSection.classList.remove('pushed-up');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="tool-page">
      {/* Header with gradient background */}
      <div className="app-header-section" ref={headerSectionRef}>
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
      
      {/* App info container - moved out of header */}
      <div className="app-info-container">
        <img
          src={`/ShortcutHub/icons/${toolName.toLowerCase()}.png`}
          alt={formattedToolName}
          className="app-icon"
        />
        <h1 className="app-name">{formattedToolName}</h1>
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
                <div className="shortcuts-container">
                  <div className="shortcuts-header">
                    <div className="header-action">Action</div>
                    <div className="header-shortcut">Shortcut</div>
                  </div>
                  <div className="shortcuts-list">
                    {category.shortcuts.map((shortcut, idx) => {
                      const shortcutText = selectedPlatform === 'windows' ? shortcut.windows : shortcut.mac;
                      const formattedShortcut = shortcutText.replace(/CMD/gi, '⌘');
                      
                      return (
                        <div key={idx} className="shortcut-item">
                          <div className="action-text">{shortcut.description}</div>
                          <div className="shortcut-container">
                            {formattedShortcut}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default ToolPage;
