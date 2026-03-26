const express = require("express");
const app = express();

// Port (important for flexibility)
const PORT = process.env.PORT || 3000;

// Route
app.get("/", (req, res) => {
  res.send("Hello World from NodeJs CICD implemented");
});

// Start server (IMPORTANT: 0.0.0.0 for EC2 access)
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});