const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3001;
const doctors = require("./routes/doctors");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/doctors", doctors);
app.listen(port, function() {
  console.log("Runnning on " + port);
});
module.exports = app;
