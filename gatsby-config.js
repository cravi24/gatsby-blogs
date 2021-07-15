module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "gatsby-blogs",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "nXQF4QgYJPCGCd5E0ZV5v_Cee7del1G8EooP-k6arng",
        spaceId: "",
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-gatsby-cloud",
  ],
};
