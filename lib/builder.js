const MIN_NODE_VERSION = "6.10";
const DOCKER_NODE_VERSION = "10";
const BROWSER_TARGETS = {
  browsers: [
    "last 5 versions",
    "FireFox >= 44",
    "Safari >= 7",
    "Explorer 11",
    "last 4 Edge versions"
  ]
};

module.exports = (api, opts, env) => {
  // see docs about api at https://babeljs.io/docs/en/config-files#apicache
  api.assertVersion("^7.0.0");

  if (env === "ui") {
    return {
      presets: [
        "@babel/react",
        "@babel/flow",
        ["@babel/env", { targets: BROWSER_TARGETS }]
      ],
      plugins: [
        "react-hot-loader/babel",
        "@babel/transform-runtime",
        "@babel/proposal-class-properties",
        "@babel/plugin-proposal-object-rest-spread",
        "@babel/syntax-dynamic-import",
        "emotion"
      ]
    };
  } else if (env === "test") {
    return {
      presets: [
        [
          "@babel/env",
          {
            targets: {
              node: MIN_NODE_VERSION
            }
          }
        ],
        "@babel/flow",
        "@babel/react"
      ],
      plugins: [
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-proposal-object-rest-spread",
        "babel-plugin-dynamic-import-node",
        "emotion"
      ]
    };
  } else if (env === "docker") {
    return {
      presets: [
        ["@babel/env", { targets: { node: DOCKER_NODE_VERSION } }],
        "@babel/flow"
      ],
      plugins: [
        "@babel/plugin-proposal-object-rest-spread",
        "@babel/proposal-class-properties"
      ]
    };
  } else {
    // registry or something else
    return {
      presets: [
        [
          "@babel/env",
          {
            targets: { node: MIN_NODE_VERSION }
          }
        ],
        "@babel/flow"
      ],
      plugins: [
        "@babel/plugin-proposal-object-rest-spread",
        "@babel/proposal-class-properties"
      ]
    };
  }
};
