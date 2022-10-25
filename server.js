const mongoose = require("mongoose"),
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
method6();
//https://www.youtube.com/watch?v=DZBGEVgL2eE
// find({age:23}) => if no record is found than it will return []
