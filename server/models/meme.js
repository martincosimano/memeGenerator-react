const mongoose = require('mongoose');

const memeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  width: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  box_count: {
    type: Number,
    required: true,
  },
});

const Meme = mongoose.model('Meme', memeSchema);

module.exports = Meme;