const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/item",
    createProxyMiddleware({
      target: "https://y-system.synology.me:8081",
      changeOrigin: true,
    })
  );
};
