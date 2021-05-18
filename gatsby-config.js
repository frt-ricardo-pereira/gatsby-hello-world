/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [`gatsby-plugin-postcss`
            ,
             {
              resolve: `gatsby-plugin-manifest`,
              options: {
                name: `Fuse`,
                short_name: `Fuse`,
                start_url: `/`,
                background_color: `#f7f0eb`,
                theme_color: `#902026`,
                display: `standalone`,
                icon: `src/images/fuselogo.png`
             }
            },
            'gatsby-plugin-offline',
            {
              resolve: 'gatsby-plugin-netlify-cms',
              options: {
                modulePath: `${__dirname}/src/cms/cms.js`,
              },
            },
            'gatsby-plugin-react-helmet',
            {
              resolve: `gatsby-source-filesystem`,
              options: {
                name: `pages`,
                path: `${__dirname}/src/markdown-pages`,
              },
            },
            'gatsby-transformer-remark'
          ]
}
