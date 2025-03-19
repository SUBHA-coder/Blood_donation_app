const API_URL = "http://localhost:5001/api"; // Change this if your backend runs on a different port

// Function to register a donor
async function registerDonor() {
    const donor = {
        name: document.getElementById("donorName").value,
        bloodType: document.getElementById("donorBloodType").value,
        location: document.getElementById("donorLocation").value,
        contact: document.getElementById("donorContact").value
    };

    try {
        const res = await fetch(`${API_URL}/donors/add`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(donor)
        });

        // ✅ Check if the response was successful
        if (res.status === 201 || res.status === 200) {
            console.log("✅ Donor added successfully");
            alert("Donor registered successfully!");
            document.getElementById("donorForm").reset(); // Clear form fields
            fetchDonors(); // Refresh donor list
        } else {
            const errorText = await res.text();
            throw new Error(`Failed to register donor: ${errorText}`);
        }
    } catch (error) {
        console.error("❌ Error registering donor:", error);
        alert("Error registering donor. Please try again.");
    }
}

// Function to register a receiver
async function registerReceiver() {
    const receiver = {
        name: document.getElementById("receiverName").value,
        bloodType: document.getElementById("receiverBloodType").value,
        location: document.getElementById("receiverLocation").value,
        contact: document.getElementById("receiverContact").value
    };

    try {
        const res = await fetch(`${API_URL}/receivers/add`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(receiver)
        });

        // ✅ Check if the response was successful
        if (res.status === 201 || res.status === 200) {
            console.log("✅ Receiver added successfully");
            alert("Receiver registered successfully!");
            document.getElementById("receiverForm").reset(); // Clear form fields
            fetchReceivers(); // Refresh receiver list
        } else {
            const errorText = await res.text();
            throw new Error(`Failed to register receiver: ${errorText}`);
        }
    } catch (error) {
        console.error("❌ Error registering receiver:", error);
        alert("Error registering receiver. Please try again.");
    }
}

// Function to fetch and display donors
async function fetchDonors() {
    try {
        const res = await fetch(`${API_URL}/donors`);
        if (!res.ok) throw new Error("Failed to fetch donors");

        const donors = await res.json();
        const donorList = document.getElementById("donorList");

        if (donors.length === 0) {
            donorList.innerHTML = "<li>No donors available</li>";
        } else {
            donorList.innerHTML = donors
                .map(d => `<li><strong>${d.name}</strong> - ${d.bloodType} (${d.location})</li>`)
                .join("");
        }
    } catch (error) {
        console.error("❌ Error fetching donors:", error);
        document.getElementById("donorList").innerHTML = "<li>Error fetching donors</li>";
    }
}

// Function to fetch and display receivers
async function fetchReceivers() {
    try {
        const res = await fetch(`${API_URL}/receivers`);
        if (!res.ok) throw new Error("Failed to fetch receivers");

        const receivers = await res.json();
        const receiverList = document.getElementById("receiverList");

        if (receivers.length === 0) {
            receiverList.innerHTML = "<li>No receivers available</li>";
        } else {
            receiverList.innerHTML = receivers
                .map(r => `<li><strong>${r.name}</strong> - ${r.bloodType} (${r.location})</li>`)
                .join("");
        }
    } catch (error) {
        console.error("❌ Error fetching receivers:", error);
        document.getElementById("receiverList").innerHTML = "<li>Error fetching receivers</li>";
    }
}

// Fetch donors and receivers when the page loads
document.addEventListener("DOMContentLoaded", () => {
    fetchDonors();
    fetchReceivers();
});
