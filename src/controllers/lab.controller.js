const Lab = require('../models/Lab');
const { v4: uuidv4 } = require('uuid');

exports.createLab = async (req, res) => {
  try {
    const { name, networkSize } = req.body;

    if (!name || !networkSize) {
      return res.status(400).json({ message: 'Missing name or network size' });
    }

    const apiKey = 'LAB-' + uuidv4();

    const lab = await Lab.create({
      name,
      networkSize,
      apiKey
    });

    res.json({
      labId: lab._id,
      apiKey: lab.apiKey
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to create lab' });
  }
};
