const express = require('express');
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("/build"));
}

app.use(routes);

app.listen(PORT, () => {
   console.log(`Server is up... ${PORT}`);
});