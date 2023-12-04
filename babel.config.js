module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          extensions: [
            ".ios.js",
            ".android.js",
            ".ios.jsx",
            ".android.jsx",
            ".js",
            ".jsx",
            ".json",
            ".ts",
            ".tsx",
          ],
          root: ["."],
          alias: {
            "@components": "./src/components/index.ts",
            "@navigations": "./src/navigations",
            "@context": "./src/context",
            "@pages": "./src/pages/index.ts",
          },
        },
      ],
    ],
  };
};
