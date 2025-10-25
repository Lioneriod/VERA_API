// required basic lines
const express = require("express");
const app = express();
app.use(express.json());

// REST endpoints
app.get("/plants", (req, res) => {
  res.json({ status: "ok" });
});
