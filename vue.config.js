module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: process.env.NODE_ENV === 'DEV' ? '/' : process.env.BASE_PATH
}
