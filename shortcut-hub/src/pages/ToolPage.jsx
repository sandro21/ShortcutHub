import React from 'react';
import { useParams } from 'react-router-dom';
import { shortcuts } from '../data';
import './ToolPage.css';

function ToolPage() {
  const { toolName } = useParams();

  const formattedToolName = toolName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const toolShortcuts = shortcuts[toolName] || [];

  return (
    <div className="container">
      <header>
        <img
          src="/icon.png"
          alt="Shortcut Hub Logo"
          className="logo"
        />
        <div>
          <h1 className="title">Shortcut Hub</h1>
          <p className="subtitle">Every shortcut for your favorite tools, centralized and searchable.</p>
        </div>
      </header>

      <hr className="divider" />

      <div className="tool-header">
        <img
          src={`/icons/${toolName.toLowerCase()}.png`}
          alt={formattedToolName}
          className="tool-logo"
        />
        <h1>{formattedToolName}</h1>
      </div>

      <div className="shortcuts-section">
        {toolShortcuts.length === 0 ? (
          <p>No shortcuts available for this tool yet.</p>
        ) : (
          <div className="shortcut-wrapper">
            {/* Header row */}
            <div className="shortcut-row-separated header">
              <div className="shortcut-description">Name</div>
              <div className="shortcut-keys">
                <div className="shortcut-mac">Mac</div>
                <div className="vertical-divider" />
                <div className="shortcut-win">Windows</div>
              </div>
            </div>

            {/* Shortcut rows */}
            {toolShortcuts.map((shortcut, index) => (
              <div className="shortcut-row-separated" key={index}>
                <div className="shortcut-description">{shortcut.description}</div>
                <div className="shortcut-keys">
                  <div className="shortcut-mac">{shortcut.mac}</div>
                  <div className="vertical-divider" />
                  <div className="shortcut-win">{shortcut.windows}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ToolPage;
