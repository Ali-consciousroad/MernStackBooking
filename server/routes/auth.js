import express from "express";

const router = express.Router();

// :message is dynamic, it will allow to return whatever was written in the browser
router.get("/:message", (req, res) => {
    res.status(200).send(`Here is your secret message: ${req.params.message}`);
});

export default router; 