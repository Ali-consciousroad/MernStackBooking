//const express = require("express");
import express from "express";
//import router from './routes/auth';
import { readdirSync } from "fs";

const app = express ();

// Route middleware
readdirSync("./routes").map((r) => app.use("/api", require(`./routes/${r}`)));
//app.use("/api", router);

app.listen(8000, () => console.log(`Server is running on port 8000`));