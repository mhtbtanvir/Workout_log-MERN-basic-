const Workout= require('../models/workoutModel')
const mongoose= require('mongoose');
// GET all workouts

const getAllWorkouts = async (req,res) => {
    const workouts = await Workout.find({}).sort({createdAt:-1});   

    res.status(200).json(workouts);
}

// GET single workout 
const getWorkout = async (req,res) => {
    const {id} = req.params;

    //check if id is valid
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such workout'});
    }
    //check if workout exists
    const workout = await Workout.findById(id);

    if(!workout){
        return res.status(404).json({error:'No such workout'});
    }
    res.status(200).json(workout); 
}

// CREATE a new workout\
const createworkout = async (req,res) => {
    const {title,reps,load} = req.body;
// add doc to db
    try{
        const workout = await Workout.create({title,load,reps});
        res.status(200).json(workout);
    }catch(error){
        res.status(400).json({error:error.message});
        
    }
}
// DELETE a workout
const deleteWorkout = async (req,res) => {
    const {id} = req.params;

    //check if id is valid
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such workout'});
    }
    //check if workout exists
    const workout = await Workout.findByIdAndDelete({_id : id });

    if(!workout){
        return res.status(404).json({error:'No such workout'});
    }
    res.status(200).json(workout); 
}

//UPdate a workout
const UpdateWorkout = async (req,res) => {
    const { id } = req.params;
    //check if id is valid
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such workout'});
    }
   
    const workout =await Workout.findOneAndUpdate({_id:id}, {
        ...req.body
    }); 
    //check if workout exists
    if (!workout) {
        return res.status(400).json({error : 'Cannot Update theres No Such Workout'})
    }

    res.status(200).json(workout);
}

module.exports = {
    createworkout,
    getAllWorkouts,
    getWorkout,
    UpdateWorkout,
    deleteWorkout
}