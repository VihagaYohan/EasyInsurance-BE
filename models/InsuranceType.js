const mongoose = require("mongoose");

const InsuranceTypeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add insurance type name"],
    trim: [true],
    unique: [true],
    maxlength: [50, "Name can not be more than 50 characters"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("InsuranceType", InsuranceTypeSchema);
