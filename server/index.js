const express = require("express");
const path = require("path");
// require("dotenv").config({ path: "db/config.env" });
console.log(process.env.DB);
const fileRoute = require("./routes/file");
require("./db/db");

const app = express();

app.use(express.static(path.join(__dirname, "..", "build")));
app.use(fileRoute);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

app.listen(10000, () => {
  console.log("server started on port 10000");
});
