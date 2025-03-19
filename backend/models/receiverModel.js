const mongoose = require("mongoose");

const receiverSchema = new mongoose.Schema({
    name: { type: String, required: true },
    bloodType: { type: String, required: true },
    location: { type: String, required: true },
    contact: { type: String, required: true }
});

module.exports = mongoose.model("Receiver", receiverSchema);
