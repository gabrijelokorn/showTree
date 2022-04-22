const express = require("express");
const app = express();
const http = require("http");
const port = 8080;

app.get("/", (req, res) => {
    app.write("help")
});

app.listen(port, err => {
    if (err) {
        console.log("Could not reach localhost!");
        return;
    }
    console.log("Listening on port " + port);
})