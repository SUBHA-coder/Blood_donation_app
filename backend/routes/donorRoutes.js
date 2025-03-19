const express = require("express");
const Donor = require("../models/donorModel");

const router = express.Router();

// Route to add a new donor
router.post("/add", async (req, res) => {
    try {
        const donor = new Donor(req.body);
        await donor.save();
        res.status(201).json({ message: "Donor registered successfully" });
    } catch (error) {
        console.error("Error saving donor:", error);
        res.status(500).json({ error: "Failed to register donor" });
    }
});

// Route to get all donors
router.get("/", async (req, res) => {
    try {
        const donors = await Donor.find();
        res.json(donors);
    } catch (error) {
        console.error("Error fetching donors:", error);
        res.status(500).json({ error: "Failed to fetch donors" });
    }
});

module.exports = router;
