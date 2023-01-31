const passport = require("passport");
const User = require("../models/User");

//FIND SECRETS
exports.secrets = (req,res)=>{
 User.find({ "secret": { $ne: null } }, (err, foundUsers) => {
   if (err) {
     console.log(err);
   } else {
     if (foundUsers) {
       res.render("secrets", {usersWithSecrets: foundUsers})
     }
   }
 })
}

//SUBMIT SECRETS
exports.submit = (req,res)=>{
  const submittedSecret = req.body.secret;

  User.findById(req.user.id, (err, foundUser) => {
    if (err) {
      console.log(err);
    } else {
      if (foundUser) {
        foundUser.secret = submittedSecret;
        foundUser.save(() => {
          res.redirect("/secrets");
        });
      }
    }
  });
}