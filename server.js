const express = require('express'); // Import the Express framework to create the server and define routes
const dotenv = require('dotenv'); // Import the dotenv package to load environment variables from a .env file
const connectDB = require('./config/db'); // Import the connectDB function to establish a connection to MongoDB
const cors = require('cors'); // Import the cors package to enable Cross-Origin Resource Sharing (CORS) for handling requests from the frontend

dotenv.config(); // Load environment variables from the .env file
connectDB(); // Connect to MongoDB using the connectDB function
const app = express(); // Create an instance of the Express application

//middleware to parse incoming JSON requests
app.use(express.json()); // Middleware to parse incoming JSON requests
app.use(cors({
    origin: 'http://localhost:5173', // Allow requests from the React frontend running on localhost:5173
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific HTTP methods for CORS requests
    credentials: true, // Allow credentials (cookies, authorization headers) to be sent in CORS requests
}))

app.use('/api/students', require('./routes/studentRoutes')); // Use the student routes for any requests to /api/students
app.get('/', (req, res) => {
    res.send('Welcome to the Student Management API'); // Send a welcome message when the root route is accessed
});
const PORT = process.env.PORT || 5000; // Define the port to listen on, using the PORT environment variable or defaulting to 5000
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`); // Log a message when the server starts successfully

});
