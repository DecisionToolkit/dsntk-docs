import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: "Decision Toolkit",
  description: "Decision Toolkit",
  head: [['link', { rel: 'icon', href: '/decision-toolkit-small.svg' }]],
  themeConfig: {
    logo: '/decision-toolkit-small.svg',
    nav: [
      {text: 'Home', link: '/' },
      {
        text: 'Guide',
        items: [
          { text: 'Overview', link: '/guide/overview' },
          { text: 'Installation', link: '/guide/installation' },
          { text: 'Getting started', link: '/guide/getting-started' },
          { text: 'Command line', link: '/guide/commands' },
          { text: 'Serving DMN™ models', link: '/guide/commands/command-srv' },
          { text: 'Evaluating DMN™ models', link: '/guide/commands/command-edm' },
          { text: 'Parsing DMN™ models', link: '/guide/commands/command-pdm' },
          { text: 'Testing DMN™ models', link: '/guide/commands/command-tdm' },
          { text: 'Exporting DMN™ models', link: '/guide/commands/command-xdm' },
          { text: 'Evaluating decision tables', link: '/guide/commands/command-edt' },
          { text: 'Parsing decision tables', link: '/guide/commands/command-pdt' },
          { text: 'Testing decision tables', link: '/guide/commands/command-tdt' },
          { text: 'Exporting decision tables', link: '/guide/commands/command-xdt' },
          { text: 'Recognizing decision tables', link: '/guide/commands/command-rdt' },
          { text: 'Evaluating FEEL expressions', link: '/guide/commands/command-efe' },
          { text: 'Parsing FEEL expressions', link: '/guide/commands/command-pfe' },
          { text: 'Testing FEEL expressions', link: '/guide/commands/command-tfe' },
          { text: 'Exporting FEEL expressions', link: '/guide/commands/command-xfe' },
          { text: 'Saving examples', link: '/guide/commands/command-exs' }
        ]
      },
      {
        text: 'Metrics',
        items: [
          { text: 'Overview', link: '/metrics/overview'},
          { text: 'DMN™ compatibility', link: '/metrics/dmn-compatibility'},
          { text: 'Performance', link: '/metrics/performance'},
          { text: 'Testing', link: '/metrics/testing'},
        ]
      },
      {
        text: 'v0.0.5',
        items: [
          { text: 'Release notes', link: 'https://github.com/DecisionToolkit/dsntk-rs/releases'},
          { text: 'Changelog', link: 'https://github.com/DecisionToolkit/dsntk-rs/blob/v0.0.5/CHANGELOG.md'}
        ]
      }
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Overview', link: '/guide/overview' },
          { text: 'Installation', link: '/guide/installation' },
          { text: 'Getting started', link: '/guide/getting-started' },
          { text: 'Command line', link: '/guide/commands' },
          { text: 'Serving DMN™ models', link: '/guide/commands/command-srv' },
          { text: 'Evaluating DMN™ models', link: '/guide/commands/command-edm' },
          { text: 'Parsing DMN™ models', link: '/guide/commands/command-pdm' },
          { text: 'Testing DMN™ models', link: '/guide/commands/command-tdm' },
          { text: 'Exporting DMN™ models', link: '/guide/commands/command-xdm' },
          { text: 'Evaluating decision tables', link: '/guide/commands/command-edt' },
          { text: 'Parsing decision tables', link: '/guide/commands/command-pdt' },
          { text: 'Testing decision tables', link: '/guide/commands/command-tdt' },
          { text: 'Exporting decision tables', link: '/guide/commands/command-xdt' },
          { text: 'Recognizing decision tables', link: '/guide/commands/command-rdt' },
          { text: 'Evaluating FEEL expressions', link: '/guide/commands/command-efe' },
          { text: 'Parsing FEEL expressions', link: '/guide/commands/command-pfe' },
          { text: 'Testing FEEL expressions', link: '/guide/commands/command-tfe' },
          { text: 'Exporting FEEL expressions', link: '/guide/commands/command-xfe' },
          { text: 'Saving examples', link: '/guide/commands/command-exs' }
        ]
      },
      {
        text: 'Metrics', collapsed: true,
        items: [
          { text: 'Overview', link: '/metrics/overview'},
          { text: 'DMN™ compatibility', link: '/metrics/dmn-compatibility'},
          { text: 'Performance', link: '/metrics/performance'},
          { text: 'Testing', link: '/metrics/testing'},
        ]
      },
      {
        text: 'DMN™', collapsed: true,
        items: [
          { text: 'FEEL', collapsed: true, link: '/dmn/feel/feel',
            items: [
              { text: 'Arithmetic', collapsed: true, link: '/dmn/feel/arithmetic/arithmetic',
                items: [
                  { text: 'Addition', link: '/dmn/feel/arithmetic/addition' }
                ]
              },
              { text: 'Built-in functions', collapsed: true, link: '/dmn/feel/bifs/bifs'}
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
