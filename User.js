const mongoose = require("mongoose");
const addressScheme = new mongoose.Schema({
    street:String,
    city:String,
})
const userSchema = new mongoose.Schema({
    name:String,
    age:{
        type:Number,
        min:1,
        max:100,
        // custom validator 
        // validate:{
        //     validator:value => value % 2 === 0,
        //     message:props=>`${props.value} is not a valid age`,
        // }
    },
    email:{
        type:String,
        //unique:true,
        required:true,
        lowercase:true,
        // minLength:10,
        // maxLength:25
    },
    createdAt:{
        type:Date,
        immutable:true,// any one can't able to change it 
        default: ()=> Date.now()
    },
    updatedAt:{
        type:Date,
        default: ()=> Date.now()
    },
    bestFriend:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User"
    },
    hobbies:[String],
    address: addressScheme
});
userSchema.methods.sayHi= function(){
    // this method is accessible for each instance
    console.log(`Hi ${this.name} ,how are you `)
}
userSchema.statics.findByName = function(name){
    // this method is accessible for class 
    return this.find({name:name});
}

userSchema.query.byName = function(name){
    // creation of custom query 
    return this.where({name:name});
}
userSchema.virtual('namedAge').get(function(){
    return `${this.name} <${this.age} >`;
})

// Mongoose middleware 
 userSchema.pre('save',function(next){
    console.log('working')
    this.updatedAt = new Date();
    next();
 })

 userSchema.post('save',function(document,next){
    document.sayHi();
    next();
 })

// schema is blueprint of a coolection 
// model return collection constructor it take two arguments first collection name second schma

// mongodb schema level validation only run in two cases
//  1. when we create a new document by using create method 
//  2. when we call save method
module.exports = mongoose.model("User",userSchema);