const express = require("express");
const app = express();
const port = 5001;

// ROUTE
app.get("/greeting", (request, response) => {
    response.send(`<h1>Hello, stranger! 👋🏾</h1>`);
});

app.get("/greeting/:name", (request, response) => {
    response.send(`<h1>Peace ${request.params.name}! ✌🏾<br/> Good to see ya!</h1>`);
});


app.listen(port, () => {
    console.log(`listening to port ${port}`);
});


// nodemon