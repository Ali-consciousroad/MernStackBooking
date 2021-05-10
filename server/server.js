const express = require("express");
const app = express ();

// :message is dynamic, it will allow to return whatever was written in the browser
app.get("/api/:message", (req, res) => {
    res.status(200).send(`Here is your secret message: ${req.params.message}`);
});

app.listen(8000, () => console.log(`Server is running on port 8000`));