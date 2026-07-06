// Import the Express library
const express = require('express');

// Create the Express application
const app = express();

// Tell Express to read JSON data from requests
app.use(express.json());

// Create sample data that will be returned by the GET endpoint
const events = [
    {
        id: 1,
        eventName: 'Student Council Election',
        eventType: 'Election',
        category: 'School',
        startDate: '2026-07-05',
        endDate: '2026-07-10',
        status: 'Open'
   }
];

// Create a GET endpoint to display all events
app.get('/api/events', (req, res) => {
   res.status(200).json({
       status: 'success',
       message: 'Voting events retrieved successfully.',
       data: events
   });
});

// Create a POST endpoint to add a new appointment
app.post('/api/events', (req, res) => {
   const {
       eventName,
       eventType,
       category,
       startDate,
       endDate,
       status
   } = req.body;

// Check if any required field is missing
   if (
       !eventName ||
       !eventType ||
       !category ||
       !startDate ||
       !endDate ||
       !status
   ) {
       return res.status(400).json({
           status: 'error',
           message: 'All fields are required.'
       });
   }

// Create a new appointment object
   const newEvent = {
       id: events.length + 1,
       eventName,
       eventType,
       category,
       startDate,
       endDate,
       status
   };

// Add the new appointment to the array
   events.push(newEvent);

// Return success response
   res.status(201).json({
       status: 'success',
       message: 'Voting event created successfully.',
       data: newEvent
   });
});

// Start the server on port 3000
app.listen(3000, () => {
   console.log('Server is running on http://localhost:3000');
});
