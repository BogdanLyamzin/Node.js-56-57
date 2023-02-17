const express = require("express");

const app = express(); // app - веб-сервер

app.get("/", (request, response)=> {
    response.send("<h2>Home page</h2>");
});

app.get("/contacts", (request, response)=> {
    console.log(request.url);
    console.log(request.method);
    response.send("<h2>Contacts page</h2>");
})

app.listen(3000, ()=> console.log("Server running"));