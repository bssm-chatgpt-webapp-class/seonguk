const express = require("express");
const router = express.Router();
const { getConnection } = require("../models/connector");
const jwt = require("jsonwebtoken");
const { validateToken } = require("../meddlewares/auth");
const { hasAuth } = require("../meddlewares/todo");

router.get("/", async (req, res) => {
  const [results] = await getConnection().execute(`SELECT * FROM todo`);
  res.json(results);
});

router.post("/", validateToken, async (req, res) => {
  const data = req.body;

  await getConnection().execute(
    `INSERT INTO todo (todo, completed, user_id) VALUES (?,?,?)`,
    [data.todo, 0, tokenResuit.id]
  );

  return res.json("success");
});

router.put("/:id", validateToken, hasAuth, async (req, res) => {
  const id = req.params.id;
  const { todo, completed } = req.body;
  await getConnection().execute(
    `UPDATE todo SET todo =?, completed =? WHERE id =?`,
    [todo, completed, id]
  );
  return res.json("success");
});

router.delete("/:id", validateToken, hasAuth, async (req, res) => {
  const id = req.params.id;
  await getConnection().execute(`DELETE FROM todo WHERE id =?`, [id]);
  return res.json("success");
});

module.exports = router;
