import path from "path";

const dirname = path.resolve();

const clientSideConfig = {
  entry: {
    client: "./client/index.js",
  },
  mode: "development",
  output: {
    filename: "[name].js",
    path: path.resolve(dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.m?js|jsx$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};

const serverSideConfig = {
  ...clientSideConfig,
  output: { ...clientSideConfig.output, clean: false, filename: "[name].cjs" },
  target: "node",
  entry: {
    server: "./server/index.js",
  },
};

export default [clientSideConfig, serverSideConfig];
