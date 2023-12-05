module.exports = (api) => ({
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "entry",
        corejs: 3,
        targets: api.caller((caller) => caller && caller.target === "node")
          ? { node: "current" }
          : { chrome: "58", ie: "11" },
      },
    ],
    "@babel/preset-typescript",
    "@babel/preset-react",
  ],
});

// module.exports = {
//   presets: [
//     [
//       "@babel/preset-env",
//       {
//         targets: { node: "current" },
//         useBuiltIns: "entry", // alternative mode: "entry"/ "usage"
//       },
//     ],
//     "@babel/preset-typescript",
//     "@babel/preset-react",
//   ],
// };
