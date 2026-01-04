const express = require("express");
const mysql = require("mysql2");
const app = express();

const db = mysql.createConnection({
  host: "DB_PRIVATE_IP",
  user: "appuser",
  password: "admin123",
  database: "devopsdb"
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello from Backend API 🚀" });
});

app.listen(3000, () => {
  console.log("Backend running on port 3000");
});
