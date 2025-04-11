const express = require('express');
require('dotenv').config()
const { default: mongoose } = require('mongoose');

const app = express();



(async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/vivek`)
        console.log("connected")
        
    } catch (error) {
        console.log("ERROR : " , error)
        
    }

})()

app.get('/', (req, res) => {
    res.send('Hello World from Express!');
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running at http://localhost:${process.env.PORT}`);
});