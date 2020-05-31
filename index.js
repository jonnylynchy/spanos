const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const socketIo = require('socket.io');
const http = require('http');

const routes = require("./routes");

const PORT = process.env.PORT || 3001;

const app = express();
const httpServer = http.createServer(app);
const io = socketIo(httpServer);

app.use([
    express.urlencoded({ extended: true }),
    express.json()
]);

// Set up socket in app context
app.set('io', io);

app.use('/api', routes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

io.on('connection', (socket) => {
  console.log('socket connection');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/spanos", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

httpServer.listen(PORT, () => {
  console.log("🚀  API server now on port", PORT);
});

const gracefulShutdown = () => {
  // tear down database
  process.exit();

  // db.teardown()
  //     .catch(() => {})
  //     .then(() => process.exit());
};

process.on('SIGINT', gracefulShutdown);
process.on('SIGTERM', gracefulShutdown);
process.on('SIGUSR2', gracefulShutdown); // Sent by nodemon