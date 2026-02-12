const express = require('express');
const router = express.Router(); // Import the Student model to interact with the students collection in MongoDB
const Student = require('../models/student'); // Route to create a new student

// CRUD operations for the Student model
// READ. get all students (fetch all students from the database and return them as a JSON response)
router.get('/', async (req, res) =>  // Route to get all students (fetch all students from the database and return them as a JSON response)
    {
    try {const students = await Student.find(); /* Fetch all students from the database res.json(students); 
     -Return the list of students as a JSON response } catch (error) { res.status(500).json({ message: error.message }); 
     -Return an error message if something goes wrong } }); 
     -Route to create a new student (create a new student in the database using the data provided in the request body) router.post('/', async (req, res) => { const { name, age, email, grade } = req.body; 
     -Extract name, age, email, and grade from the request body const student = new Student({ name, age, email, grade }); // Create a new Student instance with the provided data try { const newStudent = await student.save(); 
     -Save the new student to the database res.status(201).json(newStudent); // Return the newly created student as a JSON response } catch (error) { res.status(400).json({ message: error.message }); 
     -Return an error message if something goes wrong } }); module.exports = router; // Export the router to be used in other parts of the application
    */
        res.json(students); // Return the list of students as a JSON response
    }
    catch (error) {
        res.status(500).json({ message: error.message }); // Return an error message if something goes wrong
    }
}); //CREATE. Route to create a new student (create a new student in the database using the data provided in the request body)
router.post('/', async (req, res) => {
    const { name, age, email, grade } = req.body; /* Extract name, age, email, and grade from the request body  const student = new Student({ name, age, email, grade }); 
    Create a new Student instance with the provided data   try {   const newStudent = await student.save(); 
     Save the new student to the database res.status(201).json(newStudent); 
    Return the newly created student as a JSON response } catch (error) { res.status(400).json({ message: error.message }); 
    Return an error message if something goes wrong } }); module.exports = router; 
     Export the router to be used in other parts of the application
    */

    try {
        const student= new Student({ name, age, email, grade }); // Create a new Student instance with the provided data
        const newStudent = await student.save(); // Save the new student to the database
        res.status(201).json(newStudent); // Return the newly created student as a JSON response
    } 
    catch (error) {
        res.status(500).json({ message: error.message }); // Return an error message if something goes wrong
    }
});

// UPDATE. a student by id (update an existing student in the database using the data provided in the request body and the student ID from the request parameters)
router.put('/:id', async (req, res) => {
    const { name, age, email, grade } = req.body; // Extract name, age, email, and grade from the request body
    try {
        const student = await Student.findByIdAndUpdate(
            req.params.id,
            req.body, // Update the student with the provided data
            { new: true } // Return the updated student document
        );
        res.json(student); // Return the updated student as a JSON response
    } 
    catch (error) {
        res.status(500).json({ message: error.message }); // Return an error message if something goes wrong
    }   
});

// DELETE. a student by id (delete an existing student from the database using the student ID from the request parameters)
router.delete('/:id', async (req, res) => {
    try {
        await Student.findByIdAndDelete(
            req.params.id); // Delete the student with the specified ID from the database
        res.json({ message: 'Student deleted successfully' }); // Return a success message as a JSON response
    } 
    catch (error) {
        res.status(500).json({ message: error.message }); // Return an error message if something goes wrong
    }
});

module.exports = router; // Export the router to be used in other parts of the application