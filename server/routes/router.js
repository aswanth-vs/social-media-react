const express = require("express");

//create router for express
const router = new express.Router();

const tweetController = require("../controller/tweetController");

const upload = require("../multerConfig/storageConfig");

router.post("/create-post", upload.single("post_image"), tweetController.createPost);

//export router
module.exports = router;
