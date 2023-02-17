const http = require("http");
// request - объект, описывающий весь запрос
// response - объект, описывающий весь ответ

const server = http.createServer((request, response)=>{
    const {url} = request;
    if(url === "/"){
        response.write("<h2>Home page</h2>");
    } else if(url === "/contacts") {
        response.write("<h2>Contacts page</h2>");
    } else {
        response.write("<h2>Not found</h2>");
    }
    response.end();
});

// const server = http.createServer((request, response)=>{
//     // console.log(request.url);
//     // console.log(request.headers["user-agent"]);
//     // console.log(request.method);

//     response.write("<h2>Добро пожаловать на наш сайт!</h2>");
//     response.end();
// });

server.listen(3000, ()=> {
    console.log("Сервер запущен!");
});