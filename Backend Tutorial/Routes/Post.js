const express = require("express");
const router = express.Router();
const POST = require("../Model/Post");

router.post("/add", async (req, res) => {
  try {
    await POST.create(req.body);
    return res.json({ msg: "Success" });
  } catch (error) {
    return res.json({ msg: "Failed" });
  }
});

router.get("/getpost", async (req, res) => {
  try {
    const getPost = await POST.find({ email: req.body.email });
    return res.json({ msg: getPost });
  } catch (error) {
    return res.json({ msg: "Failed" });
  }
});

module.exports = router;
