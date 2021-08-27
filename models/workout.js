const mongoose = require("mongoose");
const Exercise = require("./exercise");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now()
  },
  exercises: [
    Exercise,
  ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;