const mongoose = require('mongoose');
const MongoSchema = require('../mongoSchema');
const HashingService = require('./hashingService');
let mongoSchema = new MongoSchema();

class MongoService{
    User = mongoose.model("userlogins",mongoSchema.UserSchema);
    Menu = mongoose.model("menus",mongoSchema.MenuSchema);
    hashingService = new HashingService();
    getMenu(id){
        return this.Menu.find({_id:id});
    }

    getPass(email){
        return this.User.find({email:email});
    }

    addUser(email,pass){
        pass = this.hashingService.getHash(pass);
        let user = new this.User({email:email,pass:pass});
        return user.save();
    }
}
module.exports = MongoService;