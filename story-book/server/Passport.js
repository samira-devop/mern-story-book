const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const User = require('./models/User'); // Replace with your User model

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email', // The field to use as the username (assuming users login with their email)
    },
    async (email, password, done) => {
      try {
        // Find the user by email in your database
        const user = await User.findOne({ email });

        // If user not found, handle invalid email
        if (!user) {
          return done(null, false, { message: 'Invalid email or password' });
        }

        // Compare the provided password with the hashed password
        const passwordMatch = await bcrypt.compare(password, user.password);

        // If passwords do not match, handle invalid password
        if (!passwordMatch) {
          return done(null, false, { message: 'Invalid email or password' });
        }

        // Authentication successful, return the user
        return done(null, user);
      } catch (error) {
        // Handle errors
        return done(error);
      }
    }
  )
);

// Serialize user into session
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Deserialize user from session
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});
