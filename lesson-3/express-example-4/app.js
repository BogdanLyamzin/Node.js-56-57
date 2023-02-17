const express = require("express");
const cors = require("cors");

const booksRouter = require("./routes/api/books");

const app = express();

app.use(cors());

app.use("/api/books", booksRouter);

app.listen(3000);

