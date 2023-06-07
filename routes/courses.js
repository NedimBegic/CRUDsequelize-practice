const express = require("express");
const router = express.Router({ mergeParams: true });
const { postCourse, getCourses, getCourse } = require("../controller/courses");

router.route("/").get(getCourses).post(postCourse);

router.route("/:id").get(getCourse);

module.exports = router;
