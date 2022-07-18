const express = require('express');
const app = express();

app.use(express.json());
app.get('/products ', getProduct);
app.post('/products/create ', createProduct);
app.patch('/products/:productId ', updateProduct);
app.delete('/products/:productId ', deleteProduct);

async function getProduct(req, res) {
    let data=await fetch("http://localhost:3000/products");
    let result= await data.json()
    res.status(200).send(result);

}
async function createProduct(req, res) {
    try {
        await fetch(`http://localhost:3000/products`,{
            method :"POST",
            body : JSON.stringify(req.body),
            headers : {"Content-Type" : "application/json"}
        });
    } catch (error) {
        console.log(error)
    }
    res.status(200).send("add Successfully");

}
async function updateProduct(req, res) {
    let productId = req.params.productId
    const body = req.body;
    try {
        await fetch (`http://localhost:3000/products/${productId}`,{
            method :"PATCH",
            body : JSON.stringify(body),
            headers : {"Content-Type" : "application/json"}
        });
    } catch (error) {
        console.log(error);
    }
    res.status(200).send(addresses[0]);

}
async function deleteProduct(req, res) {
    let productId = req.params.productId
    try {
        await fetch(`http://localhost:3000/products/${productId}`,{
            method :"DELETE"
        });
    } catch (error) {
        console.log(error);
    }
    res.status(200).send("deleted SucessFully");

}

app.listen(7000);