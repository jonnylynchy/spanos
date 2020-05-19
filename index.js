const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const routes = require("./routes");

const PORT = process.env.PORT || 3001;
const app = express();

app.use([
    express.urlencoded({ extended: true }),
    express.json()
]);

app.use(routes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/spanos", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.listen(PORT, () => {
  console.log("🚀  API server now on port", PORT);
});