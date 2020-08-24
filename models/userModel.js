const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const bcrypt = require('bcrypt');

const userSchema = new Schema({
  firstName : { 
    type : String, 
    required : true 
  },
  lastName : { 
    type : String, 
    required : true
  },
  email : { 
    type : String, 
    required : "Email address is required", 
    unique : true,
    trim: true,
    lowercase: true,
    validate: [validateEmail, 'Please fill a valid email address'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  password : { 
    type : String, 
    required : "Password is required",
    trim : true
  },
  url : { 
    type : String, 
    required : true
  },
  phone : { 
    type : String, 
    required : true
  },
  company : { 
    type : String, 
    required : true
  },
  
});

// instructorSchema.methods.generateHash = function(password) {
//   return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
// }

// instructorSchema.methods.validPassword = function(password) {
//   return bcrypt.compareSync(password, this.password);
// }

const User = mongoose.model("User", userSchema);

module.exports = User;
