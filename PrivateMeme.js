const mongoose = require("mongoose");

const privateMemeSchema = new mongoose.Schema({
    memeRef:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"PublicMeme"
    },
})

module.exports = mongoose.model("PrivateMeme", privateMemeSchema);
// const data = [
//     {
//       memeRef: new ObjectId("6357961aa5ecd0bcb05c067c"),
//       _id: new ObjectId("635796eafaa73c26ab87a7db"),
//       __v: 0
//     },
//     {
//       memeRef: new ObjectId("6357961aa5ecd0bcb05c067d"),
//       _id: new ObjectId("635796eafaa73c26ab87a7dc"),
//       __v: 0
//     }
// ]  