module.exports = {
  siteMetadata: {
    title: `Lanyard`,
    description: `The Agenda PWA (progressive web app) for your conference!`,
    url: "https://lanyard.app",
    image: `${__dirname}/src/images/gatsby-icon.png`,
    author: `@antstackio`,
    keywords:
      "lanyard, tech conferences, agenda app, gatsby, pwa, conference app, progressive web app",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ff9900`,
        theme_color: `#ff9900`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-157716734-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
      },
    },
  ],
}
