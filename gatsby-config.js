/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Fuse`,
    description: `We aim at integrating refugees and vulnerable migrants using a truly global language coding. Through a free 7-months programming course we give the necessary`,
    author: `Ana Muller`,
    keywords: `refugees, coding, integration, javascript, react, git, html, css , course, databases, HackYourFuture, hack your future, final project, program, helping, donate, github`,
    image: "static/img/fuselogo.png",
    siteUrl: "https://fuse.org",
  },
  plugins: [
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Fuse`,
        short_name: `Fuse`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#902026`,
        display: `standalone`,
        icon: `static/img/fuselogo.png`,
      },
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "uploads",
        path: `${__dirname}/static/img`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "images",
        path: `${__dirname}/src/img`,
      },
    },

    `gatsby-plugin-image`,
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [          
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
        ],
      },
    },

    {
      resolve: `gatsby-plugin-sitemap`,
      options: {},
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        policy: [{ userAgent: "*" }],
      },
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
  ],
}
