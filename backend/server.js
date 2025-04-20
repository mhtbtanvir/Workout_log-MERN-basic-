require('dotenv').config();

const express= require('express');
const mongoose= require('mongoose');


const workoutroutes= require('./routes/workouts.js');
    

 //express app
const app= express();

app.use(express.json());

//middleware
app.use((req,res,next)=>{
    console.log(req.path, req.method)
    next();
})

//routes
app.use('/api/workouts',workoutroutes);
//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        //listen for requests
        app.listen(process.env.PORT,()=>{
            console.log('connected to db & listening for requests on port:',process.env.PORT)
        })
    })
    .catch((error)=>{
        console.log(error);
    })
