import { createReadStream } from 'node:fs';
import http from 'node:http'

const server = http.createServer((req, res) => {
    console.log(req.method);
    console.log(req.url);
    if (req.url == '/') {
        const readStream = createReadStream('./public/index.html');
        readStream.pipe(res);
    } else {
        const readStream = createReadStream(`./public${req.url}`);
        readStream.pipe(res);

        readStream.on("error", (err) => {
            const readStream = createReadStream(`./public/pages/404.html`);
            readStream.pipe(res);;

            readStream.on("error", (err) => {
                res.write(err.message)
            })
        });
    }
});


server.listen(3000, '0.0.0.0', () => {
    console.log("Server Up");
    console.log(`Running at URL: http://localhost:3000`);
});