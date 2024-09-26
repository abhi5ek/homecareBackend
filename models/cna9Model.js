const mongoose = require('mongoose');

// Define the schema for assistance levels
const assistanceSchema = new mongoose.Schema({
  unableToDo: String,
  minimalAssistance: String,
  moderateAssistance: String,
  maximalAssistance: String,
  independent: String
});


// Define the main schema
const cna9Schema = new mongoose.Schema({
  clientId:{ type: String, required: false}, 
  ambulation: [assistanceSchema],
  stairs: [assistanceSchema], // Array of activities
  dressing: [assistanceSchema], // Array of activities
  feeding: [assistanceSchema], // Array of activities
  householdtask : [assistanceSchema], // Array of activities
  transfer : [assistanceSchema], // Array of activities
  selfcare : [assistanceSchema], // Array of activities
  toilating : [assistanceSchema] // Array of activities
},{ timestamps: true });

const Cna9 = mongoose.model('Cna9', cna9Schema);

module.exports = Cna9;
