const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const staff = require("./models/staff.js");
const methodOverride = require("method-override");
const port = 1776;
// DATABASE CONFIGURATION
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use((req, res, next)=>{
      console.log("I run for all routes")
      next()
    })
    
    
    app.post("/staff", (req, res) => {
      console.log(req.body)
      res.send("data received")
    })
// Database Connection Error/Success
// Define callback functions for various events
const db = mongoose.connection
db.on('error', (err) => console.log(err.message + ' is mongo not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));

// MIDDLEWARE  & BODY PARSER

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// DEFINE OUR ROUTES

// INDEX
app.get('/staff', (req, res) => 
    staff.find, (error, allStaff) => {
        res.render('index.ejs', {
            staff: allStaff,
        });
    });

// NEW
  app.get("/staff/new", function (req, res) {
    res.render("new.ejs")
  })


//Delete
  app.delete("/staff/:indexOfStaffArray", (req, res) => {
    staff.splice(req.params.indexOfStaffArray, 1) //remove the item from the array
    res.redirect("/staff") //redirect back to index route
  })

// UPDATE
app.put("/staff/:id", (req, res) => {
    if (req.body.completed === "on") {
        req.body.completed = true
    } else {
        req.body.completed = false
    }

    staff.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true,
        },
        (error, updatedStaff) => {
            res.redirect(`/staff/${req.params.id}`)
        }
    )
});

// CREATE
app.post("/staff", (req, res) => {
    if (req.body.completed === 'on') {
        //if checked, req.body.completed is set to 'on'
        req.body.completed = true;
    } else {
        //if not checked, req.body.completed is undefined
        req.body.completed = false;
    }
    staff.create(req.body, (error, createdStaff) => {
        res.redirect("/staff");
    });
})
// EDIT
app.get("/staff/:id/edit", (req, res) => {
    staff.findById(req.params.id, (error, foundStaff) => {
        res.render("edit.ejs", {
            staff: foundStaff,
        })
    })
})

// SHOW
app.get("/books/:id", (req, res) => {
    Book.findById(req.params.id, (err, foundBook) => {
        res.render("show.ejs", { book: foundBook })
    })
})
// TELL OUR APP TO LISTEN ON PORT...
app.listen(port, () => {
    console.log(`listening on port `, port)
});
// // REQUIRE DEPENDENCIES
// const express = require('express');
// const fruits = require('./models/fruits.js');

// // INITIALIZE EXPRESS APP
// const app = express();
// const port = 3000;

// // MIDDLEWARE
// // Processes that run in between requests and responses
// // app.use((req, res, next)=>{
// //   console.log('i run for all routes')
// //   next()
// // })
// // This adds data to req.body so we can access it in the CREATE action
// app.use(express.urlencoded({ extended: false }));

// // DEFINE OUR ROUTES

// // INDEX
// app.get("/fruits/", (req, res)=>{
//     res.render("index.ejs", {
//       allFruits: fruits
//     })
// });

// // NEW
// app.get("/fruits/new", (req, res)=>{
//   res.render("new.ejs")
// });

// // D
// // U

// // CREATE
// app.post("/fruits", (req, res)=>{
//   if (req.body.readyToEat === "on") {
//     //if checked, req.body.readyToEat is set to 'on'
//     req.body.readyToEat = true //do some data correction
//   } else {
//     //if not checked, req.body.readyToEat is undefined
//     req.body.readyToEat = false //do some data correction
//   }
//   fruits.push(req.body)
//   res.redirect("/fruits")
// });

// // E

// // SHOW
// app.get("/fruits/:indexOfFruitsArray", (req, res)=>{
//     res.render("show.ejs", {
//       fruit: fruits[req.params.indexOfFruitsArray]
//     })
// });

// // TELL OUR APP TO LISTEN ON PORT...
// app.listen(port, ()=>{
//     console.log(`listening on port `, port)
// });

// Action	URL	HTTP Verb	EJS view filename	mongoose method
// 1	Index	/logs/	GET	index.ejs	Log.find()
// 2	Show				
// 3	New	/logs/new	GET	new.ejs	none
// 4	Create	/logs/	POS T	none	Log.create(req.body)
// 5	Edit				
// 6	Update				
// 7	Destroy