require("dotenv").config();
require("./db/conn");
const express = require("express");
const mongoose = require('mongoose');
const DefaultData = require("./defaultdata");
const Products = require("./models/productschema");
const cors = require("cors");
const router = require("./routes/router");
const cookieParser = require("cookie-parser")

const app = express();

app.use(express.json())
app.use(cookieParser(""))
app.use(cors());
app.use(router)

const port = process.env.PORT || 8000


//for Deployement process
if (process.env.NODE_ENV === 'production') {
    // Exprees will serve up production assets
    app.use(express.static('client/build'));
  
    // Express serve up index.html file if it doesn't recognize route
    const path = require('path');
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }

//server connection
app.listen(port,()=>{
    console.log(`server is running on port  ${port}`);
})

DefaultData()