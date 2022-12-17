const express = require("express");
const path = require("path");
require("dotenv").config({ path: "db/config.env" });
const fileRoute = require("./routes/file");
require("./db/db");

const app = express();

// var cors = require("cors");

// app.use(cors());
// app.use(cors(corsOptions));
// const cors = require("cors");
// const corsOptions = {
//   origin: "http://localhost:10000",
//   credentials: true, //access-control-allow-credentials:true
//   optionSuccessStatus: 200,
// };
// app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(fileRoute);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

app.listen(10000, () => {
  console.log("server started on port 10000");
});
