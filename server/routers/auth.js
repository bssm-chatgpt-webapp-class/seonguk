const express = require("express");
const router = express.Router();
const { getConnection } = require("../models/connector");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

router.post("/signin", async (req, res) => {
  const { email, pw } = req.body;
  const [results] = await getConnection().query(
    `SELECT * FROM user WHERE email =? AND pw =?`,
    [email, pw]
  );
  if (results.length === 0) {
    return res.json("no user");
  }
  const token = jwt.sign({ id: results[0].id, email }, process.env.JWT_SECRET);
  res.json(token);
});

router.post("/signup", async (req, res) => {
  const { email, pw } = req.body;
  const encryptedPw = await bcrypt.hash(pw, 10);
  await getConnection().query(`INSERT INTO user(email, pw) VALUES (?,?)`, [
    email,
    encryptedPw,
  ]);
  res.json("success");
});

module.exports = router;
