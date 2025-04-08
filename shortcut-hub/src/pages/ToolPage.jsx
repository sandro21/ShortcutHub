import React from 'react';
import { useParams } from 'react-router-dom';

function ToolPage() {
  const { toolName } = useParams(); // Get the tool name from the URL

  // Capitalize the first letter of the tool name
  const formattedToolName = toolName
    .split('-') // Split by dashes
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
    .join(' '); // Join back with spaces

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
    </div>
  );
}

export default ToolPage;