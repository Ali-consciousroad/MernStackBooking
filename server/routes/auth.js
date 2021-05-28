import express from "express";

const router = express.Router();

// controllers
import { showMessage, register } from "../controllers/auth";
// :message is dynamic, it will allow to return whatever was written in the browser
router.get("/:message", showMessage);
router.post("/register", register);

// Common mistake, we can't use this syntax anymore because of the require() in the server.js file
// Export default router; 
module.exports = router;