const express = require('express');
const https = require('https');
const fs = require('fs');

const app = express();
const port = 443;

const options = {
    key: fs.readFileSync('./keys/server-key.key'),
    cert: fs.readFileSync('./keys/server-cert.crt')
};

app.get('/', (req, res) => {
   res.send('Hello this my server-https in NodeJS, over HTTPS!!') 
});

const server = https.createServer(options, app);
server.listen(port, () => {
    console.log(`Server is listening on https://localhost:${port} over HTTPS`);
});

/* 
app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port} over HTTP`);
}); */