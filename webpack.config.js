module.exports = {
  mode: "development",
  devtool: false,
  entry: {
    example: "./index.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              esModule: true,
              modules: {
                namedExport: true,
              },
            },
          },
        ],
      },
    ],
  },
};
