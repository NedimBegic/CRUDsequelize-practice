const express = require("express");
const courseRouter = require("./courses");
const router = express.Router();
const {
  getBootcamps,
  postBootcamp,
  getBootcamp,
  updateBootcamp,
} = require("../controller/bootcamp");

router.use("/:bootcampId/courses", courseRouter);
router.route("/").get(getBootcamps).post(postBootcamp);
router.route("/:id").get(getBootcamp).put(updateBootcamp);

module.exports = router;
