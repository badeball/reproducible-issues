const http = require("http");
const lipsum = require("./lipsum");

const PORT = 8080;

http.createServer(function (req, res) {
  res.setHeader("Content-Type", "application/json");
  res.write(JSON.stringify(lipsum));
  res.end();
}).listen(PORT, () => {
  console.log(`Available on http://localhost:${PORT}`);
});
