const fs = require("fs/promises");
// const fs = require("fs").promises;

/*
const readFile = async() => {
    const text = await fs.readFile("./files/file.txt", "utf-8");
    console.log(text);
    // const buffer = await fs.readFile("./files/file.txt");
    // const text = buffer.toString();
    // console.log(text)
}

readFile()
*/
/*
const addText = async()=> {
    await fs.appendFile("./files/file2.txt", "\nТак говорил Заратустра");
}

addText();
*/
/*
const replaceText = async()=> {
    const result = await fs.writeFile("./files/file3.txt", "Ницше");
    console.log(result);
}

replaceText();
*/
// fs.readFile("./files/file.txt")
//     .then(data => console.log(data))
//     .catch(error => console.log(error.message))

// fs.readFile("./files/file.txt", (error, data) => {
//     console.log(error);
//     console.log(data);
// })