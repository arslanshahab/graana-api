import http from "http";

const app = http.createServer((req, res) => {
  if (req.url === "/") {
    // res.write('Request received')
    res.end("Request received for /");

  }
  if (req.url === "/products") {
    res.end(JSON.stringify(["prod1", "prod2", "prod3"]));
  }
  if (req.method === "GET" && req.url === "/products") {
    res.end(JSON.stringify(["prod1", "prod2", "prod3"]));
  }
  if (req.method === "POST" && req.url === "/products") {
      // data save
    res.end(JSON.stringify(["prod1", "prod2", "prod3"]));
  }
  if (req.method === "GET" && req.url === "/users") {
    res.end(JSON.stringify(["users1", "users2", "users3"]));
  }
});

app.listen(4000);

console.log("Server listening on port: 4000");
