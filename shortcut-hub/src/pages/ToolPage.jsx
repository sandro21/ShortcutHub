import React from 'react';
import { useParams } from 'react-router-dom';
import './ToolPage.css';

function ToolPage() {
  const { toolName } = useParams(); // Get the tool name from the URL

  // Capitalize the first letter of the tool name
  const formattedToolName = toolName
    .split('-') // Split by dashes
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
    .join(' '); // Join back with spaces

  // Define shortcuts for VS Code
  const vscodeShortcuts = [
    { action: 'Open Command Palette', apple: 'Cmd + Shift + P', windows: 'Ctrl + Shift + P' },
    { action: 'Quick Open', apple: 'Cmd + P', windows: 'Ctrl + P' },
    { action: 'Toggle Terminal', apple: 'Ctrl + `', windows: 'Ctrl + `' },
    { action: 'Find in Files', apple: 'Cmd + Shift + F', windows: 'Ctrl + Shift + F' },
    { action: 'New File', apple: 'Cmd + N', windows: 'Ctrl + N' },
    { action: 'Save File', apple: 'Cmd + S', windows: 'Ctrl + S' },
    { action: 'Close File', apple: 'Cmd + W', windows: 'Ctrl + W' },
    { action: 'Split Editor', apple: 'Cmd + \\', windows: 'Ctrl + \\' },
    { action: 'Go to Line', apple: 'Cmd + G', windows: 'Ctrl + G' },
    { action: 'Comment Line', apple: 'Cmd + /', windows: 'Ctrl + /' },
    { action: 'Select All', apple: 'Cmd + A', windows: 'Ctrl + A' },
    { action: 'Undo', apple: 'Cmd + Z', windows: 'Ctrl + Z' },
    { action: 'Redo', apple: 'Cmd + Shift + Z', windows: 'Ctrl + Y' },
  ];

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

      {/* White line between header and body */}
      <hr className="divider" />

      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '20px' }}>
        <img
          src={`/icons/${toolName.toLowerCase()}.png`} // Dynamically load the specific app icon
          alt={formattedToolName}
          style={{ width: '50px', height: '50px' }} // Adjust size as needed
        />
        <h1>{formattedToolName}</h1>
      </div>

      {/* Shortcuts Table */}
      {toolName.toLowerCase() === 'vs-code' && (
        <div className="shortcuts">
          <h2>Shortcuts</h2>
          <table>
            <thead>
              <tr>
                <th>Action</th>
                <th>Apple</th>
                <th>Windows</th>
              </tr>
            </thead>
            <tbody>
              {vscodeShortcuts.map((shortcut, index) => (
                <tr key={index}>
                  <td>{shortcut.action}</td>
                  <td>{shortcut.apple}</td>
                  <td>{shortcut.windows}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default ToolPage;