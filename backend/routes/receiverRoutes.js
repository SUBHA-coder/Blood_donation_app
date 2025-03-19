const express = require("express");
const Receiver = require("../models/receiverModel");

const router = express.Router();

// Route to add a new receiver
router.post("/add", async (req, res) => {
    try {
        const receiver = new Receiver(req.body);
        await receiver.save();
        res.status(201).json({ message: "Receiver registered successfully" });
    } catch (error) {
        console.error("Error saving receiver:", error);
        res.status(500).json({ error: "Failed to register receiver" });
    }
});

// Route to get all receivers
router.get("/", async (req, res) => {
    try {
        const receivers = await Receiver.find();
        res.json(receivers);
    } catch (error) {
        console.error("Error fetching receivers:", error);
        res.status(500).json({ error: "Failed to fetch receivers" });
    }
});

module.exports = router;
