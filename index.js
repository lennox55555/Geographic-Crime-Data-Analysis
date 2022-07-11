const express = require('express');
const app = require('express')();
const PORT = 8080;

app.use(express.json())

app.listen (
    PORT,
    () => console.log(`its alive on http://localhost:${PORT}`)
)

app.get('/shirts', (req, res) => {
    res.status(200).send({
        tshirt: '-[]-',
        size: 'large'
    })
});

app.post('/shirts/:id', (req, res) => {

    const  { id } = req.params;
    const { logo } = req.body;

    if (!logo) {
        res.status(418).send({message: 'We need a logo!'})
    }

    res.send({
        tshirt: `-[]- with your ${logo} and ID of ${id}`,

    });

});