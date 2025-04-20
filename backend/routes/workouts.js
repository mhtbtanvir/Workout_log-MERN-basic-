const express= require('express');
const {

    createworkout,
    getAllWorkouts,
    getWorkout,
    deleteWorkout,
    UpdateWorkout
     
} = require ('../controllers/workoutController.js');
const router= express.Router();
//all workouts
//GET all workouts
router.get('/', getAllWorkouts)

//get a single workout
router.get('/:id',getWorkout)

//POST a new workout
router.post('/',createworkout)
//DELETE a workout      
router.delete('/:id' ,deleteWorkout)
//UPDATE a workout      
router.patch('/:id',UpdateWorkout)

module.exports= router;