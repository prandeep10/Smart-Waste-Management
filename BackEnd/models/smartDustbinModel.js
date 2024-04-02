const mongoose = require('mongoose');

const smartDustbinSchema = new mongoose.Schema({
  id : { type: Number, required: true , primaryKey: true},  
  name: { type: String, required: true },
  status: { type: String, enum: ['Full', 'Half', 'Empty'], default: 'Empty' }
});

const SmartDustbin = mongoose.model('SmartDustbin', smartDustbinSchema);

module.exports = SmartDustbin;
