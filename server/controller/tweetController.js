const tweets = require("../model/tweetSchema");

exports.createPost = async (req, res) => {
  const { post_content } = req.body;
  if (!post_content) {
    return res.status(403).json("Post Body is Empty!");
  }
  try {
    if (req.file) {
      const file = req.file.filename;
      const post = new tweets({
        post_content,
        post_image: file,
      });
      await post.save();
      res.status(200).json(post);
    } else {
      const post = new tweets({
        post_content,
      });
      await post.save();
      res.status(200).json(post);
    }
  } catch (error) {
    res.status(401).json(error);
  }
};
