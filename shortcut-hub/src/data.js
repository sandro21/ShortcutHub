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
    figma: [
      {
        mac: 'Cmd + D',
        windows: 'Ctrl + D',
        description: 'Duplicate selection'
      },
      {
        mac: 'Cmd + G',
        windows: 'Ctrl + G',
        description: 'Group selection'
      },
      {
        mac: 'Cmd + /',
        windows: 'Ctrl + /',
        description: 'Search commands'
      }
    ],
    photoshop: [
      {
        mac: 'Cmd + Z',
        windows: 'Ctrl + Z',
        description: 'Undo'
      },
      {
        mac: 'Cmd + T',
        windows: 'Ctrl + T',
        description: 'Free Transform'
      }
    ]
  };
  