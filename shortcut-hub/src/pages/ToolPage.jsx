import React from 'react';
import { useParams, Link } from 'react-router-dom'; // Import Link from react-router-dom
import { shortcuts } from '../data';
import './ToolPage.css';

function ToolPage() {
  const { toolName } = useParams();

  // Format the tool name to capitalize the first letter of each word
  const formattedToolName = toolName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  // Get the shortcuts for the current tool
  const toolShortcuts = shortcuts[toolName] || [];

  return (
    <div className="container">
      {/* Header Section */}
      <div className="header1">
        <Link to="/"> {/* Navigate to the homepage */}
          <img
            src="/icon.png"
            alt="Shortcut Hub Logo"
            className="logo"
          />
        </Link>
        <div className="tool-header">
          <img
            src={`/icons/${toolName.toLowerCase()}.png`}
            alt={formattedToolName}
            className="tool-logo"
          />
          <h1>{formattedToolName} Shortcuts</h1>
        </div>
      </div>

      {/* Divider */}
      <hr className="divider" />

      {/* Shortcuts Section */}
      <div className="shortcuts-section">
        {toolShortcuts.length === 0 ? (
          <p>No shortcuts available for this tool yet.</p>
        ) : (
          <div className="shortcut-wrapper">
            {/* Header Row */}
            <div className="shortcut-row-separated header">
              <div className="shortcut-description">Name</div>
              <div className="shortcut-keys">
                <div className="shortcut-mac">Mac</div>
                <div className="vertical-divider" />
                <div className="shortcut-win">Windows</div>
              </div>
            </div>

            {/* Shortcut Rows */}
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
