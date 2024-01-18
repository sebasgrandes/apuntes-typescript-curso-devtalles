// ! si le das ctrl + . -> install type@express (es una dependencia) entonces ya podras usar ts en/conss express
import express from "express";

// const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.status(400).json({
        ok: false,
        msg: "No hay token en la peticion",
    });

    res.json({
        ok: true,
        msg: "Todo salio bien",
    });
    // res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
