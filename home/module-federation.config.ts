export const mfConfig = {
  name: "home",

  filename: "remoteEntry.js",

  exposes: {
    "./Header": "./src/components/Header.tsx",

    "./Footer": "./src/components/Footer.tsx",
    "./styles": "./src/index.css",
  },

  shared: {
    react: { singleton: true, requiredVersion: undefined },
    "react-dom": { singleton: true, requiredVersion: undefined },
  },
};
