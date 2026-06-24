const express = require("express");
const cors = require("cors");

const app = express();

const port = 2000;

app.use(cors())

app.get("/", (req, res) => {
  return res.status(200).json({
    dashboardContent: "Nishan Singh",
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
