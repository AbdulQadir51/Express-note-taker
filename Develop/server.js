const express = require('express');
const app = express();
const path = require("path");
const db = require('./db/db')




// middle ware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// allows you to save/configure style sheet/ javascript
app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
    res.render("index.html")
})

app.get('/notes', (req, res) => {
    res.render("notes.html")
})


app.get('/api/notes', (req, res) => {
    console.log(db)
    res.json(db)
})


app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
});