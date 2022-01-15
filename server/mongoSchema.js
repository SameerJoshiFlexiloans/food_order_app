const mongoose = require('mongoose');

class MongoSchema{
    UserSchema = new mongoose.Schema({
        email:{
            type:String
        },
        pass:{
            type:String
        }
    });

    SpeficSchema = new mongoose.Schema({
        type:{
            type:String
        },
        price:Number,
        description:String,
        image:String,
        amount:Number,
        foodType:String,
        quantity:Number
    });

    MenuSchema = new mongoose.Schema({
        indian: [this.SpeficSchema],
        maxican: [this.SpeficSchema]
    });
}

module.exports = MongoSchema;