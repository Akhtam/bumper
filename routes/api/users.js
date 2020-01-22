const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../../models/User");
const Business = require("../../models/Business");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email,
      role: req.user.role
    });
  }
);

router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      errors.email = "A user has already registered with this email address";
      return res.status(400).json(errors);
    } else {
        newUser = new User({
            name: req.body.name,
            email: req.body.email,
            role: req.body.role,
            password: req.body.password
        });
      
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;

          if (newUser.role === 'Owner') {
              newUser
                .save()
                .then(user => {
                  const payload = { id: user.id, email: user.email, role: user.role };

                  jwt.sign(
                    payload,
                    keys.secretOrKey,
                    { expiresIn: 3600 },
                    (err, token) => {
                      res.json({
                        success: true,
                        token: "Bearer " + token
                      });
                    }
                  );
                })
                .catch(err => console.log(err));
          } else {
              newUser
                .save()
                .then(user => {
                     const business = new Business({
                      title: req.body.title,
                      location: req.body.location,
                      hours: req.body.hours,
                      providerId: user.id
                    })  
                    business.save()

                  const payload = { id: user.id, 
                    email: user.email, 
                    title: business.title, 
                    location: business.location, 
                    hours: business.hours,
                    providerId: business.providerId
                   };
    
                  jwt.sign(
                    payload,
                    keys.secretOrKey,
                    { expiresIn: 3600 },
                    (err, token) => {
                      res.json({
                        success: true,
                        token: "Bearer " + token
                      });
                    }
                  );
                    
                })
                .catch(err => console.log(err));
          }
        });
      });
    }
  });
});

router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email }).then(user => {
    if (!user) {
      return res.status(404).json({ email: "This user does not exist" });
    }

    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        const payload = { id: user.id, name: user.name, role: user.role };

        jwt.sign(
          payload,
          keys.secretOrKey,
          // Tell the key to expire in one hour
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        return res.status(400).json({ password: "Incorrect password" });
      }
    });
  });
});

module.exports = router;
