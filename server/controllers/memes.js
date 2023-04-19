const Meme = require('../models/meme');

// GET /api/memes
const getAllMemes = async (req, res) => {
  try {
    const memes = await Meme.find();
    res.json(memes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

module.exports = { getAllMemes };