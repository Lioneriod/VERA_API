// required basic lines
const express = require("express");
const app = express();
app.use(express.json());

// REST endpoints
app.get("/plants", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(3000, () => {
  console.log("Access on port 3000");
});
