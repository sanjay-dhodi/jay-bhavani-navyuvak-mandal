const mongoose = require("mongoose");

const collectionSchema = new mongoose.Schema(
  {
    name: { type: String, unique: true, trim: true },
    month: {
      jan: { type: Boolean, default: false },
      fab: { type: Boolean, default: false },
      mar: { type: Boolean, default: false },
      apr: { type: Boolean, default: false },
      may: { type: Boolean, default: false },
      jun: { type: Boolean, default: false },
      jul: { type: Boolean, default: false },
      aug: { type: Boolean, default: false },
      sep: { type: Boolean, default: false },
      oct: { type: Boolean, default: false },
      nov: { type: Boolean, default: false },
      dec: { type: Boolean, default: false },
    },
  },
  {
    timestamps: true,
  }
);

const collectionModel = mongoose.model("collection", collectionSchema);

module.exports = collectionModel;
