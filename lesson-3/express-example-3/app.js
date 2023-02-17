const express = require("express");
const moment = require("moment");
const fs = require("fs/promises");
const cors = require("cors");

const books = require("./books");

const app = express();

// const corsMiddleware = cors();
// app.use(corsMiddleware);
app.use(cors())
/*
app.use( async(req, res, next)=> {
    const {method, url} = req;
    const date = moment().format("DD-MM-YYYY_hh:mm:ss");
    await fs.appendFile("./public/server.log", `\n${method} ${url} ${date}`);
    next();
})
*/
/*
app.use((req, res, next)=> {
    console.log("First middleware");
    next();
})

app.use((req, res, next)=> {
    console.log("Second middleware");
    next();
})
*/
app.get("/products", async(req, res)=> {
    res.json([]);
});

app.get("/books", async(req, res)=> {
    res.json(books);
})

app.use((req, res)=> {
    res.status(404).json({
        message: "Not found"
    })
})

app.listen(3000);