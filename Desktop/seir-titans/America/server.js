// DEPENDENCIES
const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const methodOverride = require("method-override")

app.use(express.static(__dirname + '/public'));

// DATABASE CONFIGURATION
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Database Connection Error/Success
// Define callback functions for various events
const db = mongoose.connection;
db.on('error', (err) => console.log(err.message + ' is mongo not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));

// MIDDLEWARE  & BODY PARSER
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

//ROUTES

const Seed = require("./models/seed.js");
const Staff = require("./models/schema.js")

app.get('/staff/seed', (req, res) => {
    console.log("in seed");
    Staff.deleteMany({}, (error, allSeeds) => {});

    Staff.create(Seed, (error, data) => {
        console.log(data);
        res.redirect('/staff');
    });
});

//INDEX
app.get("/staff", (req, res) => {
    Staff.find((error, allStaff) => {
        res.render('index.ejs', {
            allStaff : allStaff
        });
    });
})


//GET new
app.get("/staff/new", (req, res) => {
    res.render("new.ejs");
})

//POST new
app.post("/staff/new", (req, res) => {
    Staff.create(req.body, (error, newStaff) => {
        console.log(newStaff);
        res.redirect("/staff");
    });
})


// SHOW
app.get("/staff/:id", (req, res) => {
    Staff.findById(req.params.id, (err, staff) => {
        res.render("show.ejs", { staff: staff })
    })
})

// DELETE
app.delete("/staff/:id", (req, res) => {
    Staff.findByIdAndDelete(req.params.id, (err, foundStaff) => {
        res.redirect("/staff")
    })
});

// GET Edit
app.get("/staff/:id/edit", (req, res) => {
    Staff.findById(req.params.id, (error, foundStaff) => {
        res.render("edit.ejs", {
            staff : foundStaff,
        })
    })
})

// PUT Edit
app.put("/staff/:id", (req, res) => {
    Staff.findByIdAndUpdate(req.params.id, req.body, {new: true},
        (error, updatedStaff) => {
            res.redirect(`/staff/${req.params.id}`)
        }
    )
});






// LISTENER
const PORT = process.env.PORT || 1776;
app.listen(PORT, () => {
    console.log(`The serer is listening on port: ${PORT}`)
})