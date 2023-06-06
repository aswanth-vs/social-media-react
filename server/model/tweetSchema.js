const mongoose = require("mongoose");

const tweetSchema = new mongoose.Schema({
  post_content: {
    type: String,
    required: true,
    trim: true,
  },
  post_image: {
    type: String,
  },
});

//model
const tweets = new mongoose.model("tweets", tweetSchema);

module.exports = tweets;
