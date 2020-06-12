// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'jeanbairro.com',
  titleTemplate: 'jeanbairro.com - %s',
  plugins: [
    {
      use: `gridsome-plugin-netlify-cms`
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'post/*.md',
      }
    } 
  ],
}
