const Donor = require("../models/donorModel");

// Add a new donor
exports.addDonor = async (req, res) => {
    try {
        const donor = new Donor(req.body);
        await donor.save();
        res.status(201).json({ message: "Donor added successfully", donor });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all donors
exports.getAllDonors = async (req, res) => {
    try {
        const donors = await Donor.find();
        res.json(donors);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get donors by blood type
exports.getDonorsByBloodType = async (req, res) => {
    try {
        const { bloodType } = req.params;
        const donors = await Donor.find({ bloodType });
        res.json(donors);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a donor
exports.deleteDonor = async (req, res) => {
    try {
        const { id } = req.params;
        await Donor.findByIdAndDelete(id);
        res.json({ message: "Donor deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
