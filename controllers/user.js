const passport = require("passport");
const User = require("../models/User");

//RENDER HOMAPAGE
exports.homePage = (req,res)=>{
res.render("home");
}

//RENDER LOGIN PAGE
exports.loginPage = (req,res)=>{
     res.render("login");
}

//RENDER REGISTER PAGE
exports.registerPage = (req,res)=>{
     res.render("register");
}

//RENDER SUBMIT PAGE
exports.submitPage = (req,res)=>{
     if (req.isAuthenticated()) {
   res.render("submit");
 } else {
   res.redirect("/login");
 }
}


//REGISTER USER
exports.register = (req,res)=>{
     User.register(
   { username: req.body.username },
   req.body.password,
   (err, user) => {
     if (err) {
       console.log(err);
       res.redirect("/register");
     } else {
       passport.authenticate("local")(req, res, () => {
         res.redirect("/secrets");
       });
     }
   }
 );
}

//LOGIN USER
exports.login = (req,res)=>{
     const user = new User({
   username: req.body.username,
   password: req.body.password,
 });
 req.login(user, (err) => {
   if (err) {
     console.log(err);
   } else {
     passport.authenticate("local")(req, res, () => {
       res.redirect("/secrets");
     });
   }
 });
}

//LOGOUT USER
exports.logout = (req,res)=>{
     req.logout(function (err) {
   if (err) {
     return next(err);
   }
   res.redirect("/");
 });
}




