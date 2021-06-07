const passport = require("passport");
const googleStatergy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");

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
      console.log(
        "Access Token from Google : " +
          accessToken +
          " Refresh Token " +
          refreshToken +
          " Profile " +
          profile
      );
    }
  )
);
