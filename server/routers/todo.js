const express = require("express");
const router = express.Router();
const connection = require("../models/connector");

const dataBase = [{ id: 1, text: "할1" }];
let currentid = 1;

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get("/", async function (req, res) {
  const results = await (await connection).query(`SELECT * FROM todo`);
  res.json(results);
});

router.post("/", (req, res) => {
  const data = req.body;
  console.log("data : ", data);
  dataBase.push({ id: ++currentid, text: data.text });
  return res.json("성공");
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  dataBase = dataBase.filter((data) => data.id !== Number(id));
  return res.json("성공");
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const updataIndex = dataBase.findIndex((data) => data.id === Num(id));
  dataBase[updataIndex].text = req.body.text;
  return res.json("성공");
});

module.exports = router;
