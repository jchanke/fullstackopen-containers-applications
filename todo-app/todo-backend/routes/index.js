const express = require("express");
const redis = require("../redis");

const router = express.Router();

const configs = require("../util/config");

let visits = 0;

/* GET index data. */
router.get("/", async (req, res) => {
  visits++;

  res.send({
    ...configs,
    visits,
  });
});

/* Statistics, using the Redis cache. */
router.get("/statistics", async (req, res) => {
  const added_todos = Number(await redis.getAsync(redis.ADDED_TODOS_COUNT));
  res.json({ added_todos });
});

module.exports = router;
