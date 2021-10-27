import express from "express";

const router = express.Router();

// middelware
import { requireSignin } from "../middlewares";
// controllers
import { createConnectAccount } from "../controllers/stripe";
router.post("/create-connect-account", requireSignin, createConnectAccount);

// Common mistake, we can't use this syntax anymore because of the require() in the server.js file
// Export default router; 
module.exports = router;