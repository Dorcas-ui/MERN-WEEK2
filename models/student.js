const mongoose = require('mongoose'); 
require('dotenv').config(); // Load environment variables from .env file
// Define a schema for the Student model with fields: name, age, and grade
const studentSchema = new mongoose.Schema
({
    name: // Define the fields for the Student schema
    {
        type: String, required: true, // Name is required
        age: {type: Number, required: true}, // Age is required
        email: { type: String, required: true, unique: true }, // Email is required and must be unique
        grade: { type: String, required: true }, // Grade is required
    },
    
}); 
//create the model from the schema and export it for use in other parts of the application
const Student = mongoose.model('Student', studentSchema); 
module.exports = Student; // Export the Student model to be used in other parts of the application
