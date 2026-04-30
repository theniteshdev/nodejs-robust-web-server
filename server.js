import http from 'node:http'

const server = http.createServer((req, res) => {
    console.log(req.method);
    console.log(req.url);

    res.write("Hello World from nodejs server");
    res.end();
});


server.listen(3000, '0.0.0.0', () => {
    console.log("Server Up");
    console.log(`Running at URL: http://localhost:3000`);
});