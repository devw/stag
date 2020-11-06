const express = require("express");
const app = express();
const PORT = 3000;

app.get("*", function (req, res) {
    res.sendFile("./index.html", { root: __dirname });
});
require("./app.js");

app.listen(3000, () => console.log(`http://localhost:${PORT}`));
