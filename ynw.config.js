module.exports = {
  common: {
    targets: { browsers: ["ie >= 11"] },
    target: "web",
    externals: {},
    port: 9999,
    analyzer: false,
    alias: {
      "@store": "./main/store",
      "@script": "./main/script",
      "@comps": "./main/component",
      "@const": "./main/constant",
      "@hook": "./main/hook",
    },
    envPrefix: "",
    extractCSS: true,
    splitModules: false,
    cssModules: true,
    dllPath: "",
    themePath: "",
    dist: "",
    copy: [],
    devServer: {
      proxy: {
        "/api": {
          target: "",
          changeOrigin: true,
        },
      },
    },
  },
  pages: {},
};

/**
 * ----------------------------------------
 * node-sass 版本与node版本保持一致
 * ----------------------------------------
 */
