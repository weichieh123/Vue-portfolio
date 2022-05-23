module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Vue-portfolio/'
    : '/',
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/scss/global.scss";
      `,
      },
    },
  },
};
