const express = require("express");
const router = express.Router();
const REGISTRATION = require("../Model/Registration");

router.post("/signup", async (req, res) => {
  const existUser = await REGISTRATION.findOne({ email: req.body.email });
  if (existUser) {
    return res.json({ msg: "User already exist" });
  }

  const user = await REGISTRATION.create(req.body);
  return res.json({ msg: `User created successfully at ${user._id}` });
});

router.get("/login", async (req, res) => {
  const existUser = await REGISTRATION.findOne({ email: req.body.email });
  if (existUser) {
    if (existUser.password == req.body.password) {
      return res.json({ msg: "User authenticated" });
    }
  }

  return res.json({ msg: "Login failed" });
});

router.delete("/delete", async (req, res) => {
  const existUser = await REGISTRATION.findOne({ email: req.body.email });
  if (existUser) {
    await REGISTRATION.deleteOne({ email: req.body.email });
    return res.json({ msg: "User deleted" });
  }
  return res.json({ msg: "Failed" });
});

router.put("/update", async (req, res) => {
  const user = await REGISTRATION.findOne({ email: req.body.email });

  user["name"] = req.body.name;

  try {
    await REGISTRATION.updateOne({ email: req.body.email }, user);
    return res.json({ msg: "User data updated successfully" });
  } catch (error) {
    return res.json(error);
  }
});

router.get("/getmany", async (req, res) => {
  const existUser = await REGISTRATION.findOne({ phone: req.body.phone });
  if (existUser) {
    const getAllUsers = await REGISTRATION.find({ phone: req.body.phone });
    return res.json({ msg: getAllUsers });
  }
  return res.json({ msg: "Error occured" });
});

module.exports = router;
