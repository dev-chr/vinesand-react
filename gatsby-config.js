module.exports = {
  siteMetadata: {
    title: 'Chris Adamczyk, Sandvine Project',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/icon.png'
      },
    },
    'gatsby-plugin-offline',
  ],
}
