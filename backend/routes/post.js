const express = require("express");

const router = express.Router();

const controllersPost = require("../controllers/post");
const auth = require("../middelware/auth");

router.post("/postCreate", controllersPost.postCreate)
router.get("/getAllpost", controllersPost.getAllPost);
router.get("/getOnePost/:id", controllersPost.getOnePost);
router.delete("/deletePost/:id", controllersPost.deletePost);



module.exports = router;