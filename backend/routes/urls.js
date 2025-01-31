const express = require("express");
const router = express.Router();
const { nanoid } = require("nanoid");
const Url = require("../models/Url");
const validateUrl = require("../middlewares/validateUrl");

router.post("/shorten", validateUrl, async (req, res) => {
  const { longUrl } = req.body;

  try {
    let url = await Url.findOne({ longUrl });

    if (!url) {
      const shortId = nanoid(7);
      url = new Url({ longUrl, shortId });
      await url.save();
    }
    const host = `${req.protocol}://${req.get("host")}`;
    res.json({ shortUrl: `${host}/${url.shortId}` });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server error" }); 
  }
});

router.get("/:shortId", async (req, res) => {
  try {
    const url = await Url.findOne({ shortId: req.params.shortId });
    if (!url) return res.status(404).json({ error: "URL not found" }); 

    res.redirect(url.longUrl);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
