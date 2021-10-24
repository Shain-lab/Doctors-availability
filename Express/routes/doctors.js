const express = require("express");
const router = express.Router();
let doctors = require("../dummyDatabase");

router.get("/list", async (req, res) => {
  try {
    res.status(200).json({
      results: doctors
      
    });
  } catch (err) {
    res.status(400).json({
      message: "Some error occured",
      err
    });
  }
});

router.get("/list/:id", async (req, res) => {
  let { id } = req.params;
  id = Number(id);
  try {
    let doctor = doctors.find(doctor => doctor._id === id);
    res.status(200).json({
      data: doctor
    });
  } catch (err) {
    res.status(400).json({
      message: "Some error occured",
      err
    });
  }
});

module.exports = router;
