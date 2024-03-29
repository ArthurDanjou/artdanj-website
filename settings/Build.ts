// Build Configuration: https://go.nuxtjs.dev/config-build
export default {
  babel: {
    plugins: [
      ['@babel/plugin-proposal-private-methods', { loose: true }]
    ],
  },
  postcss: {
    preset: {
      features: {
        "focus-within-pseudo-class": false
      }
    }
  }
}
