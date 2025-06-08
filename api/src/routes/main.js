import express from "express";

const main = express.Router();

main.get("/", async (req, res) => {
  try {
    res.json({ error: false, message: "hello helton" });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
});

export default main;
