const express = require("express");
const router = express.Router();
const {
  getBootcamps,
  postBootcamp,
  getBootcamp,
} = require("../controller/bootcamp");

router.route("/").get(getBootcamps).post(postBootcamp);
router.route("/:id").get(getBootcamp);

module.exports = router;
