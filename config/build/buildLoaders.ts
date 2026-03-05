import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import * as webpack from 'webpack';
import { BuildOptions } from './types/config';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const typescriptLoader = {
    // Use tsx is enought for using React 
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const cssModuleLoader = {
    test: /\.module\.s[ac]ss$/i,
    use: [
      options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          esModule: false,
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            localIdentName: options.isDev
              ? "[path][name]__[local]"
              : "[hash:base64:8]",
          },
        },
      },
      "sass-loader",
    ],
  };

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    exclude: /\.module\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      "css-loader",
      // Compiles Sass to CSS
      "sass-loader",
    ],
  };

  return [
    typescriptLoader,
    cssModuleLoader,
    cssLoader,
  ];
}