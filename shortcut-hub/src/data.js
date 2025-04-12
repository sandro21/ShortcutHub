export const categories = [
    {
      name: 'Design',
      tools: [
        { name: 'Figma', link: '/figma' },
        { name: 'Sketch', link: '/sketch' },
        { name: 'Adobe XD', link: '/adobe-xd' },
        { name: 'Illustrator', link: '/illustrator' },
        { name: 'Photoshop', link: '/photoshop' },
        { name: 'InDesign', link: '/indesign' },
        { name: 'Lightroom', link: '/lightroom' },
        { name: 'After Effects', link: '/after-effects' },
        { name: 'Affinity Photo', link: '/affinity-photo' },
        { name: 'Framer', link: '/framer' },
        { name: 'InVision', link: '/invision' },
        { name: 'Miro', link: '/miro' },
        { name: 'Overflow.io', link: '/overflow.io' },
        { name: 'Principle', link: '/principle' },
      ],
    },
    {
      name: 'Development',
      tools: [
        { name: 'VS Code', link: '/vscode' },
        { name: 'Sublime Text', link: '/sublime' },
        { name: 'Atom', link: '/atom' },
        { name: 'Xcode', link: '/xcode' },
        { name: 'Android Studio', link: '/android-studio' },
        { name: 'GitHub Desktop', link: '/github-desktop' },
        { name: 'IntelliJ IDEA', link: '/intellij-idea' },
        { name: 'Postman', link: '/postman' }, // Known for shortcuts
        { name: 'Docker', link: '/docker' }, // Known for CLI shortcuts
      ],
    },
    {
      name: 'Productivity',
      tools: [
        { name: 'Notion', link: '/notion' },
        { name: 'Trello', link: '/trello' },
        { name: 'Slack', link: '/slack' },
        { name: 'Google Docs', link: '/google-docs' },
        { name: 'Google Sheets', link: '/google-sheets' },
        { name: 'Apple Calendar', link: '/apple-calendar' },
        { name: 'Chrome', link: '/chrome' },
        { name: 'Gmail', link: '/gmail' },
        { name: 'Google Calendar', link: '/google-calendar' },
        { name: 'Google Meet', link: '/google-meet' },
        { name: 'Microsoft Teams', link: '/microsoft-teams' },
        { name: 'Safari', link: '/safari' },
        { name: 'Zoom', link: '/zoom' },
      ],
    },
    {
      name: 'Operating Systems',
      tools: [
        { name: 'macOS', link: '/macos' },
        { name: 'Windows', link: '/windows' },
        { name: 'Ubuntu', link: '/ubuntu' },
      ],
    },
    {
      name: '3D',
      tools: [
        { name: 'Blender', link: '/blender' }, // Known for extensive shortcuts
        { name: 'Cinema 4D', link: '/cinema-4d' }, // Known for shortcuts
      ],
    },
  ];


  export const shortcuts = {
    figma: {
      categories: [
        {
          name: 'Basic Actions',
          shortcuts: [
            { mac: 'Cmd + D', windows: 'Ctrl + D', description: 'Duplicate selection' },
            { mac: 'Cmd + G', windows: 'Ctrl + G', description: 'Group selection' },
            { mac: 'Cmd + Shift + G', windows: 'Ctrl + Shift + G', description: 'Ungroup selection' },
            { mac: 'Cmd + Z', windows: 'Ctrl + Z', description: 'Undo' },
            { mac: 'Cmd + Shift + Z', windows: 'Ctrl + Shift + Z', description: 'Redo' },
          ],
        },
        {
          name: 'Editing',
          shortcuts: [
            { mac: 'Cmd + X', windows: 'Ctrl + X', description: 'Cut' },
            { mac: 'Cmd + C', windows: 'Ctrl + C', description: 'Copy' },
            { mac: 'Cmd + V', windows: 'Ctrl + V', description: 'Paste' },
            { mac: 'Cmd + Shift + V', windows: 'Ctrl + Shift + V', description: 'Paste in place' },
            { mac: 'Cmd + Option + C', windows: 'Ctrl + Alt + C', description: 'Copy properties' },
            { mac: 'Cmd + Option + V', windows: 'Ctrl + Alt + V', description: 'Paste properties' },
          ],
        },
        {
          name: 'View and Navigation',
          shortcuts: [
            { mac: 'Cmd + 1', windows: 'Ctrl + 1', description: 'Zoom to fit' },
            { mac: 'Cmd + 0', windows: 'Ctrl + 0', description: 'Zoom to 100%' },
            { mac: 'Cmd + +', windows: 'Ctrl + +', description: 'Zoom in' },
            { mac: 'Cmd + -', windows: 'Ctrl + -', description: 'Zoom out' },
            { mac: 'Spacebar + Drag', windows: 'Spacebar + Drag', description: 'Pan' },
          ],
        },
        {
          name: 'Text',
          shortcuts: [
            { mac: 'Cmd + Shift + L', windows: 'Ctrl + Shift + L', description: 'Align text left' },
            { mac: 'Cmd + Shift + T', windows: 'Ctrl + Shift + T', description: 'Align text center' },
            { mac: 'Cmd + Shift + R', windows: 'Ctrl + Shift + R', description: 'Align text right' },
            { mac: 'Cmd + B', windows: 'Ctrl + B', description: 'Bold text' },
            { mac: 'Cmd + I', windows: 'Ctrl + I', description: 'Italicize text' },
          ],
        },
        {
          name: 'Shapes and Objects',
          shortcuts: [
            { mac: 'R', windows: 'R', description: 'Insert rectangle' },
            { mac: 'O', windows: 'O', description: 'Insert ellipse' },
            { mac: 'L', windows: 'L', description: 'Insert line' },
            { mac: 'T', windows: 'T', description: 'Insert text' },
            { mac: 'Shift + Drag', windows: 'Shift + Drag', description: 'Constrain proportions' },
          ],
        },
      ],
    },
    photoshop: {
      categories: [
        {
          name: 'Editing',
          shortcuts: [
            { mac: 'Cmd + Z', windows: 'Ctrl + Z', description: 'Undo' },
            { mac: 'Cmd + T', windows: 'Ctrl + T', description: 'Free Transform' },
          ],
        },
      ],
    },
  };
