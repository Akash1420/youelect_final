var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

/*
var userSchema = new mongoose.Schema({
    local: {
        username: String,
        password: String,
    },
    twitter          : {
        id           : String,
        token        : String,
        displayName  : String,
        username     : String
    }
});

*/

var userSchema = new mongoose.Schema({
    local: {
        username: String,
		fname: String,
        password: String,
		email: String,
		phone: String,
		
    },
    twitter          : {
        id           : String,
        token        : String,
        displayName  : String,
        username     : String
    }
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);