
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
 
dotenv.config();
 
// connect to db
mongoose.connect(
  process.env.DB_CONNECT,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => console.log("connected to db")
);
 
//initiate body parser
app.use(express.json());
app.use(express.urlencoded({extended: true}));
 
 
// Import routes
const contactRoutes = require("./routes/regroutes");
 
// Middlewares
app.use(express.json());
app.use(cors());
 
// route Middlewares
app.use("/api/contact",contactRoutes);
 
app.listen(4000, () => console.log("server up and runing on port 4000!"));