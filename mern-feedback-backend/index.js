const express = require("express");
const passport = require("passport");
const googleStatergy = require("passport-google-oauth20").Strategy;
const keys = require("./config/keys");

//represents a new Express application running in app object
const app = express();

//Mapping the passport with the Google Statergy to be used in this app
//When the app is started we need the new google statergy
passport.use(
  new googleStatergy(
    {
      clientID: keys.googleAPIClientID,
      clientSecret: keys.googleAPIClientSecret,
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      console.log("Access Token from Google : " + accessToken
      + " Refresh Token " + refreshToken
      + " Profile " + profile);
    }
  )
);

app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

app.get("/auth/google/callback", passport.authenticate("google"));

const PORT = process.env.PORT || 5000;
app.listen(PORT);
