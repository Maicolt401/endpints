const { Schema, model } = require("mongoose");

const kindsShema = new Schema({
  kinds: { type: String },
});

const Kind = model("Kind", kindsShema, "kinds");

module.exports = Kind;
