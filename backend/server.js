const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const donorRoutes = require("./routes/donorRoutes");
const receiverRoutes = require("./routes/receiverRoutes");
require("./config");

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/donors", donorRoutes);
app.use("/api/receivers", receiverRoutes);
app.get("/", (req, res) => {
    res.send("Welcome to the Blood Donation API");
});
// Dynamic Port
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
