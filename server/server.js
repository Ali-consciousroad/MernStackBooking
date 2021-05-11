//const express = require("express");
import express from "express";
//import router from './routes/auth';
import { readdirSync } from "fs";
// Print the route in the console in dev mode
// This way of importing morgan give a warning in the console
// import morgan from "morgan";
const morgan = require("morgan");

const app = express ();

// middlewares
app.use(morgan("dev"));

// Route middleware
readdirSync("./routes").map((r) => app.use("/api", require(`./routes/${r}`)));
//app.use("/api", router);

// Create a port variable and access the value from the .env file
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));