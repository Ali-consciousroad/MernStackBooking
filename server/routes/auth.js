import express from "express";

const router = express.Router();

// controllers
import { register, login } from "../controllers/auth";

router.post("/register", register);
router.post("/login", login);

// Common mistake, we can't use this syntax anymore because of the require() in the server.js file
// Export default router; 
module.exports = router;