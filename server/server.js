//const express = require("express");
import express from "express";
import router from './routes/auth';

const app = express ();

// Add the route middleware
app.use("/api", router);

app.listen(8000, () => console.log(`Server is running on port 8000`));