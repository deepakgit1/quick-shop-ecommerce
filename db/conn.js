//Database Connection

const mongoose = require('mongoose');

const DB = process.env.DATABASE

mongoose.connect(DB).then(()=>{console.log("Database Connected Successfully at port 8000");}).catch((err)=> console.log("Error"+err.message))