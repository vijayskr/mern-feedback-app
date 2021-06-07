const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
require("./services/passport");

//we have an alternate JS method to be used
//const authRoutes = require('./routes/authRoutes');

//represents a new Express application running in app object
const app = express();

require("./routes/authRoutes")(app);

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
