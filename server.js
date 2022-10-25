const mongoose = require("mongoose"),
  PublicMeme = require("./PublicMeme"),
  PrivateMeme = require("./PrivateMeme"),
  User = require("./User");

// local mongodb url ->  mongodb://localhost/dbname
mongoose.connect(
  "mongodb+srv://abhishek123:abhishek123@cluster0.1kbo88a.mongodb.net/dbtest?retryWrites=true&",
  () => {
    console.log("connected with database");
  },
  (err) => console.log(err)
);

const method1 = async () => {
  const user = new User({
    name: "Abhishek Singh",
    age: 58,
    email:'abhi123@gmail.com'
  });
  user.name = "Abhi Singh";
  await user.save();
  console.log(user);
};

const method2 = async () => {
  const user = await User.create({
    name: "Abhishek Singh",
    age: 23,
  });
  user.name = "Abhi Singh";
  await user.save();
  console.log(user);
};

const method3 = async () => {
  try {
    const user = await User.create({
      name: "ankit Singh",
      age: 80,
      address: {
        street: "samaneghat",
        city: "Varanasi",
      },
      email: "abhiwebdev2718@gmail.com",
    });
    // user.name = "Abhi Singh";
    // await user.save();
    console.log(user);
  } catch (err) {
    console.log("err --->", err.message);
  }
};
//method3()

const method4 = async () => {
  // exists -->  Returns a document with its _id if at least one document
  // exists in the database that matches the given filter,
  // and null otherwise.
  try {
    const user = await User.exists({
      name: "A",
    });
    console.log(user);
  } catch (err) {
    console.log("err --->", err.message);
  }
};

const method5 = async () => {
  // writting find query
  try {
    const user = await User.where("name")
      .equals("Shivani Singh")
      .where("email")
      .equals("abhiwebdev2718@gmail.com")
      .where('age').lt('80').gt('10')
      .limit(6)
     // .skip(1)
     .populate('bestFriend')
     .select('name age,bestFriend');
    // user[0].bestFriend = "6356df0283566fbb3afd93f4"
    // await user[0].save() 
    console.log("user ===>", user);
  } catch (err) {
    console.log("err --->", err.message);
  }
};

const method6 = async () => {
  try {
    const user = await User.create({name:"Abhishek Singh",email:"abhi123@gmail.com"})
      //user.sayHi();
      await  user.save()
  } catch (err) {
    console.log("err --->", err.message);
  }
};

const usersArr = [{
  name:"User1",
  email:"abhi123@gmail.com",
  age:23,
},
{
  name:"User2",
  email:"abhi123@gmail.com",
  age:20,
},
{
  name:"User3",
  email:"abhi123@gmail.com",
  age:35,
},
{
  name:"User4",
  email:"abhi123@gmail.com",
  age:10,
}]
const insert = async()=>{
  try{
    const users = await User.create(usersArr);
    console.log('users created --->',users);
  }catch(e){
    console.log('err -->',e);
  }
}
//insert();
const filterDocument = async()=>{
  const pipeline = [
    {
      $match:{
        age:{
          $gt:10
        },
        name:{
          $eq:"Abhishek Singh"
        }
      }
    },
    {
      $group:{
        "_id":"$name",
      }
    }
  ];
  const result = await User.aggregate(pipeline);
  console.log('result --->',result);
}
// filterDocument();

const _publicMeme = [
  {
    name:"meme1"
  },
  {
    name:"meme2"
  },
  {
    name:"meme3"
  },
  {
    name:"meme4"
  },
  {
    name:"meme5"
  },
]
const createPublicMeme = async()=>{
  const memes = await PublicMeme.create(_publicMeme);
  console.log(memes)
}
//createPublicMeme()
const createPrivateMeme = async()=>{
  const _privateMeme = [
    {
      memeRef:"6357961aa5ecd0bcb05c067c"
    },
    {
      memeRef:"6357961aa5ecd0bcb05c067d"
    }
  ]
  const memes = await PrivateMeme.create(_privateMeme);
  console.log(memes)
}
//createPrivateMeme()

const filterPublicMeme =  async()=>{
  const privateMeme =  await PrivateMeme.aggregate([
    {
      $group:{
        _id:"$memeRef"
      }
    }
  ]);
 const publicMeme = await PublicMeme.find({
  _id:{
    $nin:privateMeme
  }
 }).limit('4')
  console.log(publicMeme);
}
filterPublicMeme();

