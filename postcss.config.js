module.exports = {
  plugins: {
    "postcss-preset-env": {
      stage: 0,
      browsers: ["Android >= 4.0", "iOS >= 7"],
    },
    "postcss-pxtorem": {
      rootValue: 37.5,
      propList: ["*"],
    },
  },
};
