const { createProxyMiddleware } = require("http-proxy-middleware") //v1.x.x

module.exports = {
  siteMetadata: {
    title: `Covid 19 Globe`,
    description: `A visualization of the Corona Virus using React Globe CoronaTab Api.`,
    author: `HarendraThind`,
    cameraOptions: {
      enableZoom: false,
    },
    focusOptions: {
      enableDefocus: false,
    },
    globeOptions: {
      cloudsSpeed: 0.1,
      cloudsOpacity: 0.05,
      glowCoefficient: 0.1,
      glowColor: "#fff9e6",
      glowPower: 5,
      glowRadiusScale: 0.2,
      texture: "https://harendra1993.github.io/assets/images/earth.jpg",
    },
    lightOptions: {
      ambientLightColor: "#babc95",
      ambientLightIntensity: 1,
      pointLightIntensity: 1,
      pointLightPositionRadiusScales: [-1, 1.5, -2.5],
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],

  developMiddleware: app => {
    app.use(
      "/api/",
      createProxyMiddleware({
        changeOrigin: true,
        target: "https://api.coronatab.app/",
        pathRewrite: {
          "/api/": "",
        },
      })
    )
  },
}
