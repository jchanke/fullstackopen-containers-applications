const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  text: String,
  done: Boolean,
});

todoSchema.set("toJSON", (current, returned) => {
  returned.id = current._id;
  delete returned._id;
  delete returned.__v;
});

module.exports = mongoose.model("Todo", todoSchema);
