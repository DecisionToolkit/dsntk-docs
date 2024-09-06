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
        text: 'v0.0.7',
        items: [
          { text: 'Release', link: 'https://github.com/DecisionToolkit/dsntk-rs/releases/tag/v0.0.7'},
          { text: 'Changelog', link: 'https://github.com/DecisionToolkit/dsntk-rs/blob/v0.0.7/CHANGELOG.md'}
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
