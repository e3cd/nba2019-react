const express = require("express");
const proxy = require("http-proxy-middleware");
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(__dirname));
app.use(
  "/proxy",
  proxy({
    pathRewrite: {
      "^/proxy/": "/"
    },
    target: "https://server.com",
    secure: false
  })
);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
});

app.listen(port, () => {
  console.log(path.join(__dirname, "./build/"));
  console.log(`Listening on ${port}`);
});
