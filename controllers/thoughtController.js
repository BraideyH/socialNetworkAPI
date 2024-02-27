const { User, Thought } = require('../models');

module.exports = {
  async getAllThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async getSingleThoughtById(req, res) {
    try {
      const course = await Thought.findOne({ _id: req.params.thoughtId })
        .select('-__v');

      if (!thought) {
        return res.status(404).json({ message: 'No thoughts with that ID' });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      res.json(thought);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  async deleteThoughtById(req, res) {
    try {
      const thought = await Thought.findOneAndDelete({ _id: req.params.courseId });

      if (!thought) {
        res.status(404).json({ message: 'No thoughts with that ID' });
      }
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  async updateThoughtById(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!thought) {
        res.status(404).json({ message: 'No thoughts with this id!' });
      }

      res.json(course);
    } catch (err) {
      res.status(500).json(err);
    }
}}
