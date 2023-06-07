const { Curses, Bootcamp } = require("../models");
const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");

// get all courses
exports.getCourses = asyncHandler(async (req, res, next) => {
  // when we want only courses from one bootcamp
  if (req.params.bootcampId) {
    const courses = await Curses.findAll({
      where: { bootcampId: req.params.bootcampId },
    });
    res.status(200).json({
      success: true,
      data: courses,
    });
  }
  // when we want all courses
  else {
    const courses = await Curses.findAll();
    res.status(200).json({
      success: true,
      data: courses,
    });
  }
});

// get single course
// GET courses/:id
// Public
exports.getCourse = asyncHandler(async (req, res, next) => {
  // include bootcamp in course
  const course = await Curses.findByPk(req.params.id, {
    include: [
      {
        model: Bootcamp,
        // only get name from bootcamp
        attributes: ["name"],
      },
    ],
  });
  if (!course) {
    return next(new ErrorResponse(`No course with that id`, 400));
  }
  res.status(200).json({
    success: true,
    data: course,
  });
});

// create a course
// POST /bootcamp/:bootcampId/courses
exports.postCourse = asyncHandler(async (req, res, next) => {
  console.log(req.params.bootcampId);
  const courseProperties = { ...req.body, bootcampId: req.params.bootcampId };
  const course = await Curses.create(courseProperties);
  res.status(200).json({
    success: true,
    data: course,
  });
});
