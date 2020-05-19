const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const timerSchema = new Schema({
  label: { type: String, required: true },
});

const Timer = mongoose.model("Timer", timerSchema);

module.exports = Timer;
