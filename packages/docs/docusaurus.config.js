// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Tulsa',
  // tagline: 'Dinosaurs are cool',
  url: 'https://dilan-dio4.github.io',
  baseUrl: '/tulsa/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'dilan-dio4', // Usually your GitHub org/user name.
  projectName: 'tulsa', // Usually your repo name.
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    async function docusaurusTailwindcss(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends Tailwind CSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
    "docusaurus-plugin-less"
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/dilan-dio4/tulsa/tree/main/packages/docs/',
          routeBasePath: '/',
          lastVersion: 'current',
          onlyIncludeVersions: ['current'],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.less'),
        },
        gtag: {
          trackingID: 'G-8D3RFN6QMK',
          anonymizeIP: false,
        }
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'Tulsa logo',
          src: '/tulsa/img/tulsa-min-plain.png',
          className: "logo-custom",
        },
        items: [
          {
            href: 'https://github.com/dilan-dio4/tulsa',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        disableSwitch: true
      }
    }),
};

module.exports = config;
