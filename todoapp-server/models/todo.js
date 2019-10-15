const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  title: String,
  created: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Todo', todoSchema);