const Receiver = require("../models/receiverModel");

// Add a new receiver
exports.addReceiver = async (req, res) => {
    try {
        const receiver = new Receiver(req.body);
        await receiver.save();
        res.status(201).json({ message: "Receiver added successfully", receiver });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all receivers
exports.getAllReceivers = async (req, res) => {
    try {
        const receivers = await Receiver.find();
        res.json(receivers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get receivers by blood type
exports.getReceiversByBloodType = async (req, res) => {
    try {
        const { bloodType } = req.params;
        const receivers = await Receiver.find({ bloodType });
        res.json(receivers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a receiver
exports.deleteReceiver = async (req, res) => {
    try {
        const { id } = req.params;
        await Receiver.findByIdAndDelete(id);
        res.json({ message: "Receiver deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
