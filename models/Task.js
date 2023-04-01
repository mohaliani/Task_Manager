const mongoose = require("mongoose");

const TaksSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide the name"],
    trim: true,
    maxlenght: [20, "lenght can not be more than 20 charcters "],
  },
  completed: { type: Boolean, default: false },
});

module.exports = mongoose.model("task", TaksSchema);
