const express = require('express');
const app = express();

app.use(express.json());
app.post('/getmeip', getMeIp);
const dns = require("dns");

function getMeIp(req, res) {
    const body = req.body;
    const url = body.website_name;
    let ip;
    dns.resolve4(url, (err, addresses) => {
        if (err) {
            console.err(err);
            return;
        }
        ip=addresses[0];
        console.log(addresses[0])
        res.status(200).send(addresses[0])
    });
    
    
}

app.listen(7000);