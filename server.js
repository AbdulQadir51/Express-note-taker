// import express
const express = require('express');
// secure url
express.urlencoded({ extended: true })

const app = express();
const path = require("path");


// import notes routes
const notesRoutes = require('./routes/notesRoutes');
// import html routes
const htmlRoutes = require('./routes/htmlRoutes');


// middle ware
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
// allows you to save/configure style sheet/ javascript
app.use(express.static(path.join(__dirname, "public")));

// use html routes
app.use('/', htmlRoutes);
// use notes api routes
app.use('/api', notesRoutes);




// local and heroku app port number (local -> 3001 and heroku -> 80)
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});