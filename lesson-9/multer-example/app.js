const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs/promises");
const {nanoid} = require("nanoid");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const tempDir = path.join(__dirname, "temp");

const multerConfig = multer.diskStorage({
    destination: tempDir,
    filename: (req, file, cb) =>{
        cb(null, file.originalname);
    }
});

const upload = multer({
    storage: multerConfig
})

const books = [];

app.get("/api/books", (req, res)=> {
    res.json(books);
})
// upload.fields([{name: "cover", maxCount: 1}, {name: "subcover", maxCount: 2}])
// upload.array("cover", 8)
const booksDir = path.join(__dirname, "public", "books");
app.post("/api/books", upload.single("avatar"), async(req, res)=> {
    console.log('req.file', req.file)
    const {path: tempUpload, originalname} = req.file;
    const resultUpload = path.join(booksDir, originalname);
    await fs.rename(tempUpload, resultUpload);
    const cover = path.join("books", originalname);
    const newBook = {
        id: nanoid(),
        ...req.body,
        cover,
    };
    books.push(newBook);

    res.status(201).json(newBook)
})

app.listen(3000);