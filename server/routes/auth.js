import express from "express";

const router = express.Router();

// :message is dynamic, it will allow to return whatever was written in the browser
router.get("/:message", (req, res) => {
    res.status(200).send(`Here is your secret message: ${req.params.message}`);
});

// Common mistake, we can't use this syntax anymore because of the require() in the server.js file
// Export default router; 
module.exports = router;