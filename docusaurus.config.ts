import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Agentiqs.ai',
  tagline: 'Optimize Your AI Agents with Next-Generation Tooling',
  favicon: 'img/favicon.svg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs.agentiqs.ai',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  // Make sure assets use relative paths
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-Y5XEY8GCLJ',
          anonymizeIP: true,
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'mcp-kit-python',
        path: 'mcp-kit-python',
        routeBasePath: 'mcp-kit-python',
        sidebarPath: './mcp-kit-python/sidebarsMcpKitPython.ts',

        // Set this to true if we want to show docs for the latest version.
        // This would require us to push docs from main via CI.
        includeCurrentVersion: true,
      },
    ],
  ],

  themeConfig: {
    image: 'img/agentiqs-social-card.png',
    navbar: {
      title: '',
      logo: {
        alt: 'Agentiqs.ai',
        srcDark: 'img/agentiqs-for-dark-bg.png',
        src: 'img/agentiqs-for-light-bg.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'sidebarMcpKitPython',
          docsPluginId: 'mcp-kit-python',
          position: 'left',
          label: 'mcp-kit-python',
        },
        // Re-enable if we want to have a version dropdown in the top navbar
        // {
        //   type: 'docsVersionDropdown',
        //   position: 'left',
        //   docsPluginId: 'mcp-kit-python',
        // },
        {
          to: '/blog',
          label: 'Blog',
          position: 'right',
        },
        {
          href: 'https://agentiqs.ai',
          label: 'agentiqs.ai',
          position: 'right',
        },
      ],
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'mcp-kit-python',
              to: '/mcp-kit-python/docs',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/mcp-kit',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/DuD2qD2Vbz',
            },
            // {
            //   label: 'X',
            //   href: 'https://x.com/agentiqs',
            // },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/agentiqs',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/agentiqs-ai/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Agentiqs.ai`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
