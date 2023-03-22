const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const verifytoken = require("../db/verifyToken");
const Code = require("../db/schema/code");

router.post("/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    let data = new Code({
      userId: userId,
      html: req.body.html,
      css: req.body.css,
      js: req.body.js,
    });
    data = await data.save();
    console.log(data);
    res
      .status(200)
      .json({ success: true, msg: "Code save successfully", result: data });
  } catch (err) {
    res.status(500).json({ success: false, msg: err });
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    const Id = req.params.id;
    let code = await Code.updateOne(
      { _id: Id },
      { $set: { html: req.body.html, css: req.body.css, js: req.body.js } }
    );
    console.log(code);
    res.status(200).json({ success: true, msg: "Code updated successfully", result: code });
  } catch (err) {
    res.status(500).json({ success: false, msg: err });
  }
});

router.delete("/delete/:id", async (req, res) => {
    try {
      const Id = req.params.id;
      let code = await Code.deleteOne({_id: Id});
      console.log(code);
      res.status(200).json({ success: true, msg: "Code delete successfully", result: code });
    } catch (err) {
      res.status(500).json({ success: false, msg: err });
    }
  });

router.get("/show/:id", async (req, res) => {
  try {
    const Id = req.params.id;
    let code = await Code.findOne({ _id: Id });
    if (code) {
      let hello = code.html.replace("\n", "---");
      // code.css = code.css.replace("\n", "");
      // code.js = code.js.replace("\n", "");
      console.log(hello)
      res
        .status(200)
        .json({ success: true, msg: "data fetch successfully", result: code });
    } else {
      res.status(200).json({ success: false, msg: "Not found" });
    }
  } catch (err) {
    res.status(500).json({ success: false, msg: err });
  }
});


router.get("/:id", async (req, res) => {
    try {
      const Id = req.params.id;
      let code = await Code.find({ userId: Id });
      console.log(code)
      if (code) {
        res.status(200).json({ success: true, msg: "data fetch successfully", result: {code} });
      } else {
        res.status(200).json({ success: false, msg: "Not found" });
      }
    } catch (err) {
      res.status(500).json({ success: false, msg: err });
    }
  });

module.exports = router;
