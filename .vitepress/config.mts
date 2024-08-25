import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: "Decision Toolkit",
  description: "Decision Toolkit",
  head: [['link', { rel: 'icon', href: '/dsntk-logo.png' }]],
  themeConfig: {
    logo: '/dsntk-logo.png',
    nav: [
      {text: 'Home', link: '/' },
      {
        text: 'Guide',
        items: [
          { text: 'Overview', link: '/guide/overview' },
          { text: 'Installation', link: '/guide/installation' },
          { text: 'Getting Started', link: '/guide/getting-started' },
          { text: 'Command Line', link: '/guide/commands' }
        ]
      },
      {
        text: 'References',
        items: [
          { text: 'FEEL', collapsed: true, link: '/references/feel/feel'}
        ]
      }
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Overview', link: '/guide/overview' },
          { text: 'Installation', link: '/guide/installation' },
          { text: 'Getting Started', link: '/guide/getting-started' },
          { text: 'Command Line', link: '/guide/commands' }
        ],
      },
      {
        text: 'References',
        items: [
          { text: 'FEEL', collapsed: true, link: '/references/feel/feel',
            items: [
              { text: 'Arithmetic', collapsed: true, link: '/references/feel/arithmetic/arithmetic',
                items: [
                  { text: 'Addition', link: '/references/feel/arithmetic/addition' }
                ]
              },
              { text: 'Built-in functions', collapsed: true, link: '/references/feel/bifs/bifs'}
            ]
          }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/DecisionToolkit' }
    ],
    search: {
      provider: 'local'
    }
  },
  srcDir: "pages"
})
