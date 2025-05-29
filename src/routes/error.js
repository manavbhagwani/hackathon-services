const express = require("express");

const router = express.Router();

router.use((req, res) => {
  res.status(404).send({ error: "not found1" });
});

module.exports = router;
