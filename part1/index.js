const express = require('express');
const app = express();

app.use(express.json());
app.post('/getmeip', getMeIp);
const dns = require("dns");

function getMeIp(req, res) {
    const body = req.body;
    const url = body.website_name;
    dns.resolve4(url, (err, addresses) => {
        if (err) {
            console.err(err);
            return;
        }
        res.status(200).send(addresses[0])
    });
    
    
}

app.listen(6000);