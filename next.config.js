const { withExpo } = require("@expo/next-adapter");

module.exports = withExpo({
  experimental: {
    transpilePackages: [
      "react-native",
      "expo",
      // Add the failing package here, and restart the server...
    ],
  },
});
