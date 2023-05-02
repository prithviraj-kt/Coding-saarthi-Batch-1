const express = require("express");
const router = express.Router();
const REGISTRATION = require("../Model/Registration");

router.post("/signup", async (req, res) => {
  const data = await REGISTRATION.create(req.body);
  await res.json({ msg: req.body });
});

module.exports = router;
