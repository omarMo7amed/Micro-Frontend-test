export const mfConfig = {
  name: "home",

  filename: "remoteEntry.js",

  remotes: {
    home: "home@http://localhost:3000/remoteEntry.js",
    pdp: "pdp@http://localhost:3001/remoteEntry.js",
    cart: "cart@http://localhost:3002/remoteEntry.js",
    login: "login@http://localhost:3003/remoteEntry.js",
  },

  exposes: {
    "./Header": "./src/components/Header.tsx",
    "./products": "./src/products.ts",
    "./Footer": "./src/components/Footer.tsx",
    "./styles": "./src/index.css",
  },

  shared: {
    react: { singleton: true, requiredVersion: undefined },
    "react-dom": { singleton: true, requiredVersion: undefined },
  },
};
