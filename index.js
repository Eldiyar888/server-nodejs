const http = require("http");
const url = require("url");

const port = 3000;

const users = [
  { id: "1", name: "Yuri", age: 30 },
  { id: "2", name: "Ivan", age: 24 },
  { id: "3", name: "Kostya", age: 44 },
];

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  console.log(parsedUrl);
  if (req.method === "GET" && parsedUrl.path === "/users" && parsedUrl.query && parsedUrl.query.id) {
    const data = users.filter(item => item.id == parsedUrl.query.id)
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(data));
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

server.listen(port, () => {
  console.log(`server start on ${port}`);
  console.log('new')
});

