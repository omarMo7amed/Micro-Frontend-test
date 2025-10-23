export const mfConfig = {
  name: "login",
  filename: "remoteEntry.js",
  remotes: {
    home: "home@http://localhost:3000/remoteEntry.js",
    pdp: "pdp@http://localhost:3001/remoteEntry.js",
    cart: "cart@http://localhost:3002/remoteEntry.js",
    login: "login@http://localhost:3003/remoteEntry.js",
  },
  exposes: {
    "./Login": "./src/app",
    "./auth": "./src/hooks/auth",
  },
  shared: {
    react: { singleton: true, requiredVersion: undefined },
    "react-dom": { singleton: true, requiredVersion: undefined },
  },
};
