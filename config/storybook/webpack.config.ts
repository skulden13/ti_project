/* eslint-disable no-param-reassign */
import webpack, { RuleSetRule } from 'webpack';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { BuildPaths } from '../build/types/config';

export default ({ config }: {config: webpack.Configuration}) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };
  config.resolve = config.resolve || {};
  config.resolve.modules = [paths.src, 'node_modules'];
  config.resolve.extensions = [...(config.resolve.extensions || []), '.ts', '.tsx'];

  config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }

    return rule;
  });

  config.module.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });
  config.module.rules.push(buildCssLoader(true));
  config.plugins.push(
    new webpack.NormalModuleReplacementPlugin(
      /^(app|pages|widgets|features|entities|shared)\/(.*)$/,
      (resource) => {
        const [, layer, requestPath] = resource.request.match(
          /^(app|pages|widgets|features|entities|shared)\/(.*)$/,
        ) || [];

        if (layer && requestPath) {
          // eslint-disable-next-line no-param-reassign
          resource.request = path.resolve(paths.src, layer, requestPath);
        }
      },
    ),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(true),
      __API__: JSON.stringify(''),
    }),
  );

  return config;
};
