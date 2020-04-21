const mongoose = require('mongoose');
var Schema = mongoose.Schema;

//form for each recommended home according to data displayed on widget
//_________________________________________________
let nodeSchema = new Schema({
  index: Number,
  name: String,
  friendNodeProcessor: Number,
  friendNodeRAM: Number,
  friendNodeQuantum: Number
},

  { typeKey: '$type' } //needed so that for when generating from a mongoose schema, it does not try to convert an object at a property to a string.

);

let Node = mongoose.model('Node', nodeSchema);

module.exports = Node;
