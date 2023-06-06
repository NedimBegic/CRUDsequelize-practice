const { Bootcamp } = require("../models");
const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");

// desc     Get all bootcamps
//@route    GET /bootcamps
// @acces   Public
exports.getBootcamps = asyncHandler(async (req, res, next) => {
  const bootcamps = await Bootcamp.findAll();
  if (bootcamps.length == 0) {
    return next(new ErrorResponse("There are no bootcamps", 200));
  }
  res.status(200).json({
    success: true,
    data: bootcamps,
  });
});

// desc     get bootcamp
//@route    GET /bootcamp/:id
// @acces   Public

exports.getBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findByPk(req.params.id);
  if (bootcamp == null) {
    return next(new ErrorResponse(`No bootcamp with id ${req.params.id}`, 400));
  }

  res.status(200).json({
    success: true,
    data: bootcamp,
  });
});

// desc     Create bootcamp
//@route    POST /bootcamps
// @acces   Public
exports.postBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.create(req.body);
  res.status(200).json({
    success: true,
    data: bootcamp,
  });
});
