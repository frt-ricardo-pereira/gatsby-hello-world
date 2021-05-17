exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions
    const result = await graphql(`
      {
        allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            limit: 1000
          ) {
            edges {
              node {
                id
                frontmatter {
                  slug
                }
              }
            }
          }
        }
    `)
  
    // Handle errors
    if (result.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`)
      return
    }
  
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.slug,
        component: require.resolve(`./src/templates/${String(node.frontmatter.slug)}.js`),
        context: {
          id: node.id
        },
      })
    })
  }