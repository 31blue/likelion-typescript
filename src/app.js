import http from "node:http";

const HOSTNAME = "localhost";
const PORT = 4000;

const server = http.createServer((request, response) => {
  console.log(request.url);
  console.log(request.name);

  response.end(`
    <!doctype html>
    <html lang="ko-KR">
    <head>
        <meta charset="UTF-8">
        <title>Typescript 에센셜</title>
    </head>
    <body>
        <h1>Typescript 에센셜</h1>
    </body>
    </html>
  `);
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
