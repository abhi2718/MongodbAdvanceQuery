const mongoose = require("mongoose");

const publicMemeSchema = new mongoose.Schema({
    name:String,
})

module.exports =  mongoose.model("publicMeme",publicMemeSchema);
// const data = [
//     {
//       name: 'meme1',
//       _id: new ObjectId("6357961aa5ecd0bcb05c067c"),
//       __v: 0
//     },
//     {
//       name: 'meme2',
//       _id: new ObjectId("6357961aa5ecd0bcb05c067d"),
//       __v: 0
//     },
//     {
//       name: 'meme3',
//       _id: new ObjectId("6357961aa5ecd0bcb05c067e"),
//       __v: 0
//     },
//     {
//       name: 'meme4',
//       _id: new ObjectId("6357961aa5ecd0bcb05c067f"),
//       __v: 0
//     },
//     {
//       name: 'meme5',
//       _id: new ObjectId("6357961aa5ecd0bcb05c0680"),
//       __v: 0
//     }
//   ]

