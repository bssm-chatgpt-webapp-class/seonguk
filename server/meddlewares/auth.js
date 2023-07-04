const jwt = require("jsonwebtoken");
const { getConnection } = require("../models/connector");

const validateToken = async (req, res, next) => {
  const token = req.headers.authorization;
  try {
    const tokenResult = jwt.verify(token, process.env.JWT_SECRET);
    const [results] = await getConnection().execute(
      `SELECT * FROM todo WHERE id = ?`,
      [tokenResult.id]
    );

    if (results.lenght === 0) {
      return res.status(401).json("no user");
    }

    req.user = results[0];

    next();
  } catch (error) {
    console.log(error);
    return res.status(403).json("invatid token");
  }
};

module.exports = { validateToken };
