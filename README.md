# MERN Stack Application

This is a full-stack MERN (MongoDB, Express, React, Node.js) application that allows users to manage workouts. The backend is built with Node.js, Express, and MongoDB, while the frontend is built with React.

---

## Features

- **Frontend**:
  - Built with React and React Router for navigation.
  - Displays a list of workouts.
  - Allows users to create, update, and delete workouts.

- **Backend**:
  - Built with Node.js, Express, and MongoDB.
  - RESTful API for managing workouts.
  - Includes routes for creating, reading, updating, and deleting workouts.

---

## Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [MongoDB](https://www.mongodb.com/) (local or Atlas cluster)
- [npm](https://www.npmjs.com/) (comes with Node.js)

---

## Installation

1. Clone the repository:
   
   ```bash
   https://github.com/mhtbtanvir/Workout_log-MERN-basic-/
   cd Workout_log-MERN-basic-
   cd backend
   npm install
   cd ../frontend
   npm install
2.Configuration
Create a .env file in the backend directory and add the following:

      MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>? 
      retryWrites=true&w=majority
      PORT=4000
3.Running the Application
  Start the backend and frontend server:

    cd backend
    npm run dev
    cd ../frontend
    npm start
  Then Open Browser and navigate to 
  
    http://localhost:3000

API Endpoints

    Base URL: http://localhost:4000/api/workouts
    GET /: Fetch all workouts.
    GET /:id: Fetch a single workout by ID.
    POST /: Create a new workout.
    DELETE /:id: Delete a workout by ID.
    PATCH /:id: Update a workout by ID.
    
**Project Structure:**

backend(master branch)

    server.js: Entry point for the backend server.
    routes/workouts.js: Defines API routes for workouts.
    controllers/workoutController.js: Handles business logic for workouts.
    models/workoutModel.js: Mongoose schema for workouts.
    
frontend(master branch):

    src/App.js: Main React component.
    src/pages/Home.js: Home page displaying workouts.
    src/components/Navbar.js: Navigation bar.
Troubleshooting
Proxy Error
If you encounter the error:

     Proxy error: Could not proxy request /api/workouts/ from localhost:3000 to http://localhost:4000/ (ECONNREFUSED).

Ensure the backend server is running on port 4000.

Verify the proxy field in **{}package.json**: "proxy": "http://localhost:4000"


Ensure your MongoDB instance is running or your Atlas cluster is accessible.
Whitelist your IP address in the MongoDB Atlas dashboard.


Author: 

Tanvir Mahtab

mhtbtanvir@gmail.com



    
      

  
