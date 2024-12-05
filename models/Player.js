const mongoose = require("mongoose");
const ObjectId = mongoose.SchemaTypes.ObjectId;

const PlayerSchema = new mongoose.Schema(
  {
    player_id: {
      type: Number,
    },
    long_name: {
      type: String,
    },
    short_name: {
      type: String,
    },
    wage_eur: {
      type: Number,
    },
  },
  { timestamps: true }
);

const Player = mongoose.model("Player", PlayerSchema);

module.exports = Player;