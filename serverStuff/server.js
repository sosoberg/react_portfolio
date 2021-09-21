const express = require('express');
const routes = require("./serverStuff/routes");
const app = express();
const db = require("./serverStuff/config/connection.js")
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("/build"));
}

app.use(routes);

app.use(express.urlencoded({extended: true}))
app.use(express.json())

db.once("open", function() {
  app.listen(PORT, () => {
    console.log(`Server is up... ${PORT}`);
  });
});

