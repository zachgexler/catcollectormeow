const express = require('express');
const app = express();
const staff = require("./models/staff")
const port = 1776;
const methodOverride = require("method-override")

app.use(methodOverride("_method"));


// // app.use((req, res, next) => {
// //     next() 
// // })
app.get("/staff/", function (req, res) {
    res.render("index.ejs", {
        allStaf: staff
    })
});

// app.get("/pokemon/new", function (req, res) {
//   res.render("show.ejs")
// })

// app.post("/pokemon/new", (req, res) => {
//   pokemon.push(req.body);
//   res.redirect("/pokemon");
// });

// app.delete("/pokemon/:indexOfPokemonArray", (req, res) => {
//   pokemon.splice(req.params.indexOfPokemonArray, 1) //remove the item from the array
//   res.redirect("/pokemon") //redirect back to index route
// })

// //UPDATE
// app.put("/pokemon/:id", (req, res) => {
//   pokemon[req.params.id] = req.body
//   res.redirect("/pokemon")
// })


// app.post("/pokemon/", (req, res) => {
//   pokemon.push(req.body);
//   res.redirect("/pokemon");
// });

// app.get("/pokemon/:id", (req, res) => {
//   res.render("edit.ejs", {
//       pokemon: pokemon[req.params.id],
//   });
// });

// //SHOW
// app.get('/pokemon/:id', (req, res) => {
//   res.render('show.ejs', { data: pokemon[req.params.id] });
//   });

// TELL OUR APP TO LISTEN ON PORT...
app.listen(port, () => {
    console.log(`listening on port `, port)
});